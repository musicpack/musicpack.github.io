import styled from "styled-components"
import * as variables from "./Variables"
import { FcMusic } from "react-icons/fc"

export const IntroContainer = styled.div`
  color: #fff;
  background: ${variables.BG_COLOR};

  @media screen and (max-width: 1023px) {
    padding: 100px 0;
  }
`
export const IntroWrapper = styled.div`
  display: grid;
  justify-content: center;
  width: 100%;
  height: 860px;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  z-index: 1;
`
export const Row = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 1023px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`
export const Col1 = styled.div`
  margin-bottom: 15px;
  padding: 0 16px;
  grid-area: col1;
`
export const Col2 = styled.div`
  margin-bottom: 15px;
  padding: 0 2px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 65px;
`
export const IntroHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 700 !important;
  color: #fff;

  @media screen and (max-width: 560px) {
    font-size: 32px;
  }
`
export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 20px;
  line-height: 24px;
  color: #fff;
`
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgContainer = styled.div`
  max-width: 600px;
  height: 100%;
`
export const Img = styled.img`
  width: 100%;
`

export const Button = styled.button`
  width: 150px;
  height: 50px;
  box-sizing: border-box;
  margin-right: 1.5rem;
  padding: 14px 28px;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #fff")};
  background: ${({ primary }) =>
    primary ? variables.PRIMARY_COLOR : variables.BG_COLOR};
  display: inline-block;
  font-weight: 600;
  transition: all 0.3s;

  &:hover {
    background: ${({ primary }) =>
      primary ? variables.PRIMARY_COLOR_DARKER : "#fff"};
    color: ${({ primary }) => (primary ? "##fff" : variables.BG_COLOR)};
  }
`
export const Lists = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 24px;
`
export const ListIcon = styled(FcMusic)`
  margin-right: 7px;
  margin-bottom: 8px;
  font-size: 1.1rem;
  /* background-color: #add9eb;
  border: 1px solid #a9aaaa;
  border-radius: 100%; */
  transform: translateY(63%);
`
