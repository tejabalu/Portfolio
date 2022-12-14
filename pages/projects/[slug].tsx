import {
  Box,
  Container,
  Divider,
  Flex,
  SlideFade,
  useColorModeValue,
} from "@chakra-ui/react";
import fs from "fs";
import matter from "gray-matter";
import { InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import path from "path";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  BlockquoteRenderer,
  HeadingRenderer,
  HrRenderer,
  ImageRenderer,
  LinkRenderer,
  StrongRenderer,
  UnorderedListItemRenderer,
} from "../../components/blogstyles/MarkdownRenderer";
import tableOfContents from "../../components/blogstyles/toc";
import { ParagraphRenderer } from "../../components/Layout/ParagraphRenderer";
import Paragraph from "../../components/Paragraph";

const Post = ({
  fontMatter: { date },
  content,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const colorModeValue = useColorModeValue("gray.400", "gray.700");

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
            <Paragraph fontSize={"xl"}>
              {
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
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
              }
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
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: fontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      fontMatter,
      slug,
      content,
    },
  };
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return { paths, fallback: false };
}

export default Post;
