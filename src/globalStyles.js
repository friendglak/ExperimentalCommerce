import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Karla', sans-serif;
}

`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;

export const Button = styled.button`
  background: none;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  font-weight: 700;
  outline: solid;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3 ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#A85D09" : "#FFFF")};
    color: black;
    outline: solid white;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const Button2 = styled.button`
  display: block;
  width: 100%;
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  background: black;
  padding: 1rem;
  margin: 0 aut 1rem;
  border: 0;
  outline: none;
  cursor: pointer;
`;

export const Button3 = styled.button`
  display: block;
  width: 100%;
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 300;
  text-transform: uppercase;
  color: black;
  background: white;
  padding: 1rem;
  margin: 0 aut 1rem;
  border: 0;
  outline: 1px solid black;
  text-decoration: none;
  cursor: pointer;
  margin: 20px 0px;
`;

export default GlobalStyle;
