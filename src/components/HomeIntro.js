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
  Lists,
  ListIcon,
} from "./styles/HomeIntroStyles"

// import demoGIF from "../images/mboxdomo.gif"

const HomeIntro = ({
  id,
  imgStart,
  heading,
  description,
  img,
  style,
  details,
}) => {
  const ContentDecider = () => {
    if (id === "intro1") {
      return (
        <ButtonContainer>
          <Button>Learn More</Button>
          <Button primary="true">Add to Discord</Button>
        </ButtonContainer>
      )
    } else {
      return details.map((item, index) => {
        return (
          <Lists key={index}>
            <ListIcon />
            {item}
          </Lists>
        )
      })
    }
  }
  return (
    <>
      <IntroContainer>
        <IntroWrapper>
          <Row imgStart={imgStart}>
            <Col1>
              <TextWrapper>
                <IntroHeading>{heading}</IntroHeading>
                <Description>{description}</Description>
                <ContentDecider />
              </TextWrapper>
            </Col1>

            <Col2>
              <ImgContainer>
                <Img src={img} alt="demoGif" style={style} />
              </ImgContainer>
            </Col2>
          </Row>
        </IntroWrapper>
      </IntroContainer>
    </>
  )
}

export default HomeIntro
