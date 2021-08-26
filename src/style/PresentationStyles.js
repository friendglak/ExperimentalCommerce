import styled from "styled-components";
import home from "../images/home.jpg";
import hombre from "../images/hombre.jpg";
import mujer from "../images/mujer.jpg";

const PresentationSec = styled.div`
  color: #fff;
  padding: 160px 0;
  /* background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")}; */
  background: url(${home});
  /* background-size: 1024px 600px; */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 1000px;
`;

const ButtonCategoria = styled.div`
  background: linear-gradient(#000 0 0) 50% calc(-3px - 100%) / var(--d, 0%)
    200% no-repeat;
  transition: 0.3s, background-size 0.3s 0.3s;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  position: absolute;
  bottom: 3%;
  left: 20%;
  width: 60%;
  height: auto;

  padding: 10px;
  cursor: pointer;
  :hover {
    --d: 100%;
    background-position: 50% 0%;
    color: #fff;
    transition: 0.3s, background-position 0.3s 0.3s, color 0.3s 0.3s;
  }
`;

const ContainerCategorias = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 80px 20px 80px;
  height: auto;
  place-content: center;

  @media (max-width: 1245px) {
    flex-direction: column;
    margin: auto;
  }
`;

const CategoriaHombre = styled.div`
  color: #fff;
  background: url(${hombre});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  height: 800px;
  margin: 80px;
  position: relative;

  @media (max-width: 1245px) {
    width: auto;
  }
`;

const CategoriaMujer = styled.div`
  color: #fff;
  background: url(${mujer});
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  height: 800px;
  margin: 80px;
  position: relative;

  @media (max-width: 1245px) {
    width: auto;
  }
`;

const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768 px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#101011")};
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#fff" : "#101011")};
`;

const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 15px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#a9b3c1" : "#101011")};
`;

const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

export {
  PresentationSec,
  InfoColumn,
  TextWrapper,
  InfoRow,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  ContainerCategorias,
  CategoriaHombre,
  CategoriaMujer,
  ButtonCategoria,
};
