import React, { useRef, useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import PageWrapper from './layouts/PageWrapper'



let Wrapper = styled.div`
  
`;




const BackDiv = styled.div`
  width: 375px;
  font-size: 20px;
  margin-top: 26px;


  word-break: break-all !important;
  color: ${({theme}) => theme.color1};
  .bg-text {
    opacity: 0.175;

  }
  
  .highlighted {
    opacity: 1.0;
    color: ${({theme}) => theme.color3};
    word-break: break-word !important;
  }

  .highlighted:first-of-type{
    font-size: 50px;
  }

  @media only screen and (max-width: 400px) {
    .bg-text:first-of-type { display:none;}
    width: 100%;

  }

  @media only screen and (min-width: 401px) {
    .optional { display:none;}
    width: 100%;
  }

  @media only screen and (min-width: 600px) {
    .optional { display:none;}
  }

`

let  bgContent = `


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

`




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
  return (<span>
    { label.split(value)
      .reduce((prev, current, i) => {
        if (!i) {
        return [<span className='bg-text' key={i}> { current } </span>];
        }

        //we want the subs to be larger than oter
        let insert = subs.shift() || value

        return prev.concat( <b className={'highlighted'} key={i + value}>{ insert }</b>, <span className='bg-text' key={i}> { current } </span>);
      }, [])
    }
  </span>);
};
let subs = "Hello my name is Alex Geer I think about abstractions like documents and information and how they relate to human beings and in particular how they relate human beings to each other ".split(" ")
bgContent = formatLabel(bgContent, "document", subs)

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);



function Home({loading}) {
  const scrollRef = useRef(null);
  const [lowerRevealed, setLowerRevealed] = useState(false)
  const executeScroll = () => scrollToRef(scrollRef);
  
 
  
  return (
    
    <PageWrapper  className={loading ? "loading" : "loaded"}>
      <BackDiv>
     <span className='bg-text'>
        doc·u·ment noun /ˈdäkyəmənt/ a piece of written, printed, or electronic matter that provides information or evidence or that serves as an official record.
        verb/ˈdäkyəˌment/
      </span> 
      <span className='bg-text optional'>
       doc·u·ment noun /ˈdäkyəmənt/ a piece of written
      </span> 
      {bgContent} 
      </BackDiv>
    </PageWrapper>
  );
}

export default Home;
