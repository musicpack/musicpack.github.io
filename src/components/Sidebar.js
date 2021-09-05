import React from "react"
import {
  BtnContainer,
  CloseIcon,
  Container,
  Icon,
  SideBarBtn,
  SidebarContainer,
  SidebarList,
  SidebarMenu,
} from "./styles/SidebarStyle"
import { headerData } from "../data/headerData"

const Sidebar = ({ sidebarOpen, sidebarToggle }) => {
  return (
    <Container sidebarOpen={sidebarOpen} onClick={sidebarToggle}>
      <Icon onClick={sidebarToggle}>
        <CloseIcon />
      </Icon>

      <SidebarContainer>
        <SidebarMenu>
          {headerData.map((item, i) => (
            <SidebarList to={item.link} key={i}>
              {item.name}
            </SidebarList>
          ))}
        </SidebarMenu>

        <BtnContainer>
          <SideBarBtn to="/">Add to Discord</SideBarBtn>
        </BtnContainer>
      </SidebarContainer>
    </Container>
  )
}

export default Sidebar
