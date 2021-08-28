import React from "react"
import {
  IntroWrapper,
  Row,
  Col1,
  Col2,
  TextWrapper,
  IntroHeading,
  Description,
  ButtonContainer,
  Img,
  ImgContainer,
  IntroContainer,
  Button,
} from "./styles/HomeIntroStyles"

import demoGIF from "../images/mboxdomo.gif"

const HomeIntro = ({ imgStart, heading, description }) => {
  return (
    <>
      <IntroContainer>
        <IntroWrapper>
          <Row imgStart={imgStart}>
            <Col1>
              <TextWrapper>
                <IntroHeading>{heading}</IntroHeading>
                <Description>{description}</Description>
                <ButtonContainer>
                  <Button>Learn More</Button>
                  <Button primary="true">Add to Discord</Button>
                </ButtonContainer>
              </TextWrapper>
            </Col1>

            <Col2>
              <ImgContainer>
                <Img
                  src={demoGIF}
                  alt="demoGif"
                  style={{
                    width: "100%",
                    margin: "auto",
                    boxSizing: "border-box",
                    border: "8px solid #1f2331",
                    borderRadius: "30px",
                  }}
                />
              </ImgContainer>
            </Col2>
          </Row>
        </IntroWrapper>
      </IntroContainer>
    </>
  )
}

export default HomeIntro
