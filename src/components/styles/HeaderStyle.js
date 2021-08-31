import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

import * as variables from "./Variables"

export const Nav = styled.nav`
  background: ${variables.BG_COLOR};
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  z-index: 100;
  /* border: 1px solid black; */
`
export const NavLogo = styled.img`
  width: 52px;
  height: 52px;
  margin: 5px;
  transform: translate(0, -5%);
`

export const HomeIcon = styled.div`
  font-size: 1.4rem;
  transform: translate(0, -5%);
  margin-left: 10px;
  font-weight: 600;
`

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  text-decoration: none;
  cursor: pointer;
`

export const MenuBars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 1023px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 110%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const MenuList = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const NavButton = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;

  @media screen and (max-width: 1023px) {
    display: none;
  }
`

export const Button = styled(Link)`
  background: ${variables.PRIMARY_COLOR};
  color: #fff;
  white-space: nowrap;
  padding: 12px 32px;
  font-size: 1.1rem;
  outline: none;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.8;
  }
`
