import {
  Box,
  ListIcon,
  ListItem,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Paragraph from "../Paragraph";
// import arrow icon from react
import { IoMdArrowDropdown, IoMdArrowDropright } from "react-icons/io";

//only renderes h1, h2, h3 in the table of contents
const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];
  headingElements.forEach((heading, index) => {
    const { innerText: title, id } = heading;
    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H1") {
      nestedHeadings.push({ id, title, items: [] });
    } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
      nestedHeadings[nestedHeadings.length - 1].items.push({
        id,
        title,
      });
    }
  });

  return nestedHeadings;
};

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = useState([]);

  useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );

    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const useIntersectionObserver = (setActiveId) => {
  const headingElementsRef = useRef({});
  useEffect(() => {
    const callback = (headings) => {
      headingElementsRef.current = headings.reduce((map, headingElement) => {
        map[headingElement.target.id] = headingElement;
        return map;
      }, headingElementsRef.current);

      const visibleHeadings = [];
      Object.keys(headingElementsRef.current).forEach((key) => {
        const headingElement = headingElementsRef.current[key];
        if (headingElement.isIntersecting) visibleHeadings.push(headingElement);
      });

      const getIndexFromId = (id) =>
        headingElements.findIndex((heading) => heading.id === id);

      // set the active id to the first visible heading
      if (visibleHeadings.length === 1) {
        setActiveId(visibleHeadings[0].target.id);
      } else if (visibleHeadings.length > 1) {
        // set the active id to the closest heading
        const closestHeadingIndex = visibleHeadings.reduce(
          (closestIndex, headingElement) => {
            const index = getIndexFromId(headingElement.target.id);
            if (index < closestIndex) return index;
            return closestIndex;
          },
          getIndexFromId(visibleHeadings[0].target.id)
        );

        setActiveId(headingElements[closestHeadingIndex].id);
      }
    };
    const observer = new IntersectionObserver(callback, {
      rootMargin: "0px 0px 0px 0px",
    });
    const headingElements = Array.from(document.querySelectorAll("h1, h2, h3"));
    headingElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [setActiveId]);
};

const Headings = ({ headings, activeId, textColor }) => (
  <UnorderedList
    className="tocclass"
    listStylePos={"outside"}
    listStyleType={"none"}
  >
    {headings.map((heading) => (
      <ListItem
        key={heading.id}
        className={heading.id === activeId ? "activetoc" : ""}
        color={heading.id === activeId ? "blue.500" : textColor}
        fontWeight={heading.id === activeId ? "500" : "normal"}
      >
        <a
          href={`#${heading.id}`}
          onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById(heading.id);
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }}
        >
          <Paragraph
            paddingTop="0.3rem"
            color={heading.id === activeId ? "blue.500" : textColor}
            css={{
              textIndent: "-0.9rem",
              paddingLeft: "0.9rem",
            }}
          >
            <ListIcon
              as={
                heading.id === activeId ? IoMdArrowDropdown : IoMdArrowDropright
              }
              marginRight={"0.3rem"}
            />
            {heading.title}
          </Paragraph>
        </a>
        {heading.items.length > 0 && (
          <UnorderedList
            className="tocclass"
            listStylePos={"outside"}
            listStyleType={"none"}
          >
            {heading.items.map((child) => (
              <ListItem
                key={child.id}
                style={{
                  marginLeft: "1rem",
                }}
                className={child.id === activeId ? "activetoc" : ""}
                color={child.id === activeId ? "blue.500" : textColor}
                fontWeight={child.id === activeId ? "500" : "normal"}
              >
                <a
                  href={`#${child.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(child.id);
                    element.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }}
                >
                  <Paragraph
                    paddingTop="0.3rem"
                    color={child.id === activeId ? "blue.500" : textColor}
                    css={{
                      textIndent: "-0.9rem",
                      paddingLeft: "0.9rem",
                    }}
                  >
                    <ListIcon
                      as={
                        child.id === activeId
                          ? IoMdArrowDropdown
                          : IoMdArrowDropright
                      }
                      marginRight={"0.3rem"}
                    />
                    {child.title}
                  </Paragraph>
                </a>
              </ListItem>
            ))}
          </UnorderedList>
        )}
      </ListItem>
    ))}
  </UnorderedList>
);

const tableOfContents = () => {
  const [activeId, setActiveId] = useState();
  const { nestedHeadings } = useHeadingsData();
  const textColor = useColorModeValue("gray.600", "gray.300");
  useIntersectionObserver(setActiveId);

  return (
    <Box
      aria-label="Table of contents"
      // make box sticky
      position="sticky"
      top="4em"
    >
      <Headings
        headings={nestedHeadings}
        activeId={activeId}
        textColor={textColor}
      />
    </Box>
  );
};

export default tableOfContents;
