import React from "react"
import {
  Nav,
  MenuBars,
  NavLink,
  MenuList,
  HomeIcon,
  NavButton,
  Button,
} from "./styles/HeaderStyle"
import { headerData } from "../data/headerData"

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <HomeIcon>Music Box</HomeIcon>
        </NavLink>
        <MenuBars />
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
