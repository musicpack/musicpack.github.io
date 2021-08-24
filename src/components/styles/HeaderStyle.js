import styled from "styled-components"
import { Link } from "gatsby"
import { FaBars } from "react-icons/fa"

export const Nav = styled.nav`
  background: #3d3d3d;
  height: 80px;
  display: flex;
  justify-content: start;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  position: relative;
  z-index: 100;
  border: 1px solid black;
`

export const HomeIcon = styled.div`
  font-size: 1.3rem;
  transform: translate(0, -5%);
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

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

export const MenuList = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
