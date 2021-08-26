import styled from "styled-components";

const Heading = styled.h1`
    margin-bottom: 40px;
    font-size: 48px;
    line-height: 1.1;
    text-align: center;
    color: ${({ lightText }) => (lightText ? '#fff' : '#101011')};
`;

const TestimonialImg = styled.div`
    position: static;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 0px;
    margin-bottom: 10px;

`;

const Img = styled.img`
    position: static;
    width: 100px;
    height: 100px;
    left: 0px;
    top: 0px;
    border-radius: 50%;
    margin:0px auto;
`;

const TestimonialSec = styled.div`
    color: #fff;
    padding: 120px 0;
    background: ${({ lightBg }) => (lightBg ? '#fff' : '#101522')};
`;

const TestimonialLinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

const TestimonialLinksWrapper = styled.div`
  display: flex;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

const TestimonialLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 200px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

const TestimonialLinkTitle = styled.h2`
  margin-bottom: 16px;
`;

const TestimonialText = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    color: ${({ lightTextDesc }) => (lightTextDesc ? '#a9b3c1' : '#101011')};
`;


export {
    Heading,
    TestimonialLinkItems,
    TestimonialLinksContainer,
    TestimonialLinksWrapper,
    TestimonialLinkTitle,
    TestimonialSec,
    TestimonialText,
    TestimonialImg,
    Img
}