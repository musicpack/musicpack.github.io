import React from "react"
import {
  Nav,
  MenuBars,
  NavLink,
  NavLogo,
  MenuList,
  HomeIcon,
  NavButton,
  Button,
} from "./styles/HeaderStyle"
import { headerData } from "../data/headerData"
import mboxlogo from "../images/MusicBoxIcon.png"

const Header = ({ sidebarToggle }) => {
  return (
    <>
      <Nav>
        <NavLink to="/" isLogo={true}>
          <NavLogo src={mboxlogo} />
          <HomeIcon>Music Box</HomeIcon>
        </NavLink>
        <MenuBars onClick={sidebarToggle} />
        <MenuList>
          {headerData.map((item, i) => (
            <NavLink to={item.link} key={i}>
              {item.name}
            </NavLink>
          ))}
        </MenuList>
        <NavButton>
          <Button>Start Music Box</Button>
        </NavButton>
      </Nav>
    </>
  )
}

export default Header
