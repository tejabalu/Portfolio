import {
  Box,
  Container,
  Divider,
  Flex,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react";
import { MDXProvider } from "@mdx-js/react";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import tableOfContents from "../../components/blogstyles/toc";
import Paragraph from "../../components/Paragraph";
// @ts-ignore
import MDX from "@mdx-js/runtime";

const Post = ({
  fontMatter: { date },
  mdxSource,
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const colorModeValue = useColorModeValue("gray.400", "gray.700");
  console.log(mdxSource);
  console.log(date);
  return (
    <>
      <SlideFade in={true} offsetY={80}>
        <Container maxW={"container.xl"} display={"flex"}>
          <Box
            width={"35%"}
            paddingRight={4}
            paddingTop={4}
            display={["none", "none", "flex", "flex"]}
            flexDirection={"column"}
          >
            {tableOfContents()}
          </Box>
          <Box width={"100%"} display="flex">
            <Divider
              width={"100%"}
              orientation="vertical"
              flexBasis="1"
              paddingLeft={6}
              display={["none", "none", "block", "block"]}
              borderColor={colorModeValue}
            />
            <MDXProvider components={{}}>
              <MDX>{content}</MDX>
            </MDXProvider>
            <Paragraph fontSize={"xl"}>
              {/* {
                <ReactMarkdown
                  components={{
                    h1: HeadingRenderer,
                    h2: HeadingRenderer,
                    h3: HeadingRenderer,
                    h4: HeadingRenderer,
                    h5: HeadingRenderer,
                    h6: HeadingRenderer,
                    p: ParagraphRenderer,
                    img: ImageRenderer,
                    a: LinkRenderer,
                    blockquote: BlockquoteRenderer,
                    li: UnorderedListItemRenderer,
                    hr: HrRenderer,
                    strong: StrongRenderer,
                  }}
                >
                  {content}
                </ReactMarkdown>
              } */}
            </Paragraph>
          </Box>
          <Flex alignItems={"top"} direction={"row"}></Flex>
        </Container>
      </SlideFade>
    </>
  );
};

export const getStaticProps = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      fontMatter,
      slug,
      mdxSource,
      content,
    },
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return { paths, fallback: false };
}

export default Post;
