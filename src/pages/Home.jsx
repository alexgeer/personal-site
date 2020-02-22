import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PageWrapper from "./layouts/PageWrapper";

let HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ImageContainer = styled.div`
  margin-top: 40px;
  background: ${({ theme }) => theme.color3};
  padding: 10px;
  border-radius: 10px;
  width: 40%;
  color: ${({ theme }) => theme.background};
`;

const BackDiv = styled.div`
  width: 375px;
  font-size: 20px;
  margin-top: 26px;

  word-break: break-all !important;
  color: ${({ theme }) => theme.color1};

  .bg-text {
    opacity: 0.175;
  }

  .highlighted {
    transition: 1s ease-in;
    opacity: 1;
    color: ${({ theme }) => theme.color3};
    word-break: break-word !important;
    font-weight: 700;
    font-size: 25px;
  }

  .first {
    transition: 2.25s ease-in;
    font-size: 50px !important;
  }

  @media only screen and (max-width: 400px) {
    .bg-text:first-of-type {
      display: none;
    }
    width: 100%;
  }

  @media only screen and (min-width: 401px) {
    .optional {
      display: none;
    }
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    .optional {
      display: none;
    }
    width: 100%;
    font-size: 25px;
  }
`;

let bgContent = `


  A document is a written, drawn, presented, or memorialized representation of thought. 
      The word originates from the Latin documentum, which denotes a "teaching" or "lesson":
      the verb doceō denotes "to teach". In the past, the word was usually used to denote a 
      written proof useful as evidence of a truth or fact. In the computer age, "document" 
      usually denotes a primarily textual computer file, including its structure and format, 
      e.g. fonts, colors, and images. Contemporarily, "document" is not defined by its transmission 
      medium, e.g., paper, given the existence of electronic documents document doc·u·ment
  noun
  /ˈdäkyəmənt/
  a piece of written, printed, or electronic matter that provides information or evidence or that serves as an official record.
  verb
  /ˈdäkyəˌment/
  record (something) in written, photographic, or other form. "Document" is defined in 
  library and information science and documentation science as a fundamental, abstract idea:
  the word denotes everything that may be represented or memorialized in order to serve as evidence. 
  The classic example provided by Suzanne Briet is an antelope: "An antelope running wild on the plains of
    Africa should not be considered a document[;] she rules. But if it were to be captured, taken to a zoo
    and made an object of study, it has been made into a document. It has become physical evidence being 
    used by those who study it. Indeed, scholarly articles written about the antelope are secondary documents, 
    since the antelope itself is the primary document."
  [3] This opinion has been interpreted as an early expression of actor–network theory.
  A document is a written, drawn, presented, or memorialized representation of thought. 
      The word originates from the Latin documentum, which denotes a "teaching" or "lesson":
      the verb doceō denotes "to teach". In the past, the word was usually used to denote a 
      written proof useful as evidence of a truth or fact. In the computer age, "document" 
      usually denotes a primarily textual computer file, including its structure and format, 
      e.g. fonts, colors, and images. Contemporarily, "document" is not defined by its transmission 
      medium, e.g., paper, given the existence of electronic documents. doc·u·ment
  noun
  /ˈdäkyəmənt/
  a piece of written, printed, or electronic matter that provides information or evidence or that serves as an official record.
  verb
  /ˈdäkyəˌment/
  record (something) in written, photographic, or other form. "Document" is defined in 
  library and information science and documentation science as a fundamental, abstract idea:
  the word denotes everything that may be represented or memorialized in order to serve as evidence. 
  The classic example provided by Suzanne Briet is an antelope: "An antelope running wild on the plains of
    Africa should not be considered a document[;] she rules. But if it were to be captured, taken to a zoo
    and made an object of study, it has been made into a document. It has become physical evidence being 
    used by those who study it. Indeed, scholarly articles written about the antelope are secondary documents, 
    since the antelope itself is the primary document."
  [3] This opinion has been interpreted as an early expression of actor–network theory.A document is a written, drawn, presented, or memorialized representation of thought. 
      The word originates from the Latin documentum, which denotes a "teaching" or "lesson":
      the verb doceō denotes "to teach". In the past, the word was usually used to denote a 
      written proof useful as evidence of a truth or fact. In the computer age, "document" 
      usually denotes a primarily textual computer file, including its structure and format, 
      e.g. fonts, colors, and images. Contemporarily, "document" is not defined by its transmission 
      medium, e.g., paper, given the existence of electronic documents. doc·u·ment
  noun
  /ˈdäkyəmənt/
  a piece of written, printed, or electronic matter that provides information or evidence or that serves as an official record.
  verb
  /ˈdäkyəˌment/
  record (something) in written, photographic, or other form. "Document" is defined in 
  library and information science and documentation science as a fundamental, abstract idea:
  the word denotes everything that may be represented or memorialized in order to serve as evidence. 
  The classic example provided by Suzanne Briet is an antelope: "An antelope running wild on the plains of
    Africa should not be considered a document[;] she rules. But if it were to be captured, taken to a zoo
    and made an object of study, it has been made into a document. It has become physical evidence being 
    used by those who study it. Indeed, scholarly articles written about the antelope are secondary documents, 
    since the antelope itself is the primary document."
  [3] This opinion has been interpreted as an early expression of actor–network theory. A document is a written, drawn, presented, or memorialized representation of thought. 
  The word originates from the Latin, which denotes a "teaching" or "lesson":
  the verb doceō denotes "to teach". In the past, the word was usually used to denote a 
  written proof useful as evidence of a truth or fact.

`;



const LightUp = ({ timing, children, first=false, className }) => {
  const [lighted, setLighted] = useState(false);

  useEffect(() => {
    if (!timing) return;

    let timer = setTimeout(() => {
      setLighted(true);
    }, timing);

    return () => clearTimeout(timer);
  }, []);

  let cn = lighted ? "highlighted" : "bg-text"
  if(lighted && first)
    cn += " first"

  return <span className={cn}>{children}</span>;
};

/**
 * Find and highlight relevant keywords within a block of text
 * @param  {string} label - The text to parse
 * @param  {string} value - The search keyword to highlight
 * @return {object} A JSX object containing an array of alternating strings and JSX
 */
const formatLabel = (label, value, subs) => {
  if (!value) {
    return label;
  }

  let counter = 1;
  let interval = 2000;

  return [
    label.split(value).reduce((prev, current, i) => {
      if (!i) {
        return [
          <span className="bg-text" key={i}>
            {" "}
            {current}{" "}
          </span>
        ];
      }

      //we want the subs to be larger than oter
      let insert = subs.shift() || value;
      let first = i === 1
      
      let val = prev.concat(
        <LightUp first={first} timing={counter < 7 ? interval : undefined} key={i + value}>
          {insert}
        </LightUp>,
        <span className="bg-text" key={i}>
          {" "}
          {current}{" "}
        </span>
      );
      first ? interval += 2000 : interval += 300;
      
      counter++;
      return val;
    }, [])
  ];
};
let subs = "Hello. My name is Alex Geer. I think about abstractions like documents and information and how they relate to human beings and in particular how they relate human beings to each other ".split(
  " "
);
bgContent = formatLabel(bgContent, "document", subs);

const HeroText = () => {
  return bgContent.map(e => {
    return e;
  });
};

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop);

function Home({ loading }) {
  const scrollRef = useRef(null);
  const [lowerRevealed, setLowerRevealed] = useState(false);
  const executeScroll = () => scrollToRef(scrollRef);

  return (
    <PageWrapper className={loading ? "loading" : "loaded"}>
      <HomeContainer>
        <BackDiv>
          <span className="bg-text">
            doc·u·ment noun /ˈdäkyəmənt/ a piece of written, printed, or
            electronic matter that provides information or evidence or that
            serves as an official record. verb/ˈdäkyəˌment/
          </span>
          <span className="bg-text optional">
            doc·u·ment noun /ˈdäkyəmənt/ a piece of written
          </span>
          <HeroText />
        </BackDiv>
        {/* <ImageContainer>
          <h3 style={{color:'#fff'}}>Hi there.</h3>
      </ImageContainer> */}
      </HomeContainer>
    </PageWrapper>
  );
}

export default Home;
