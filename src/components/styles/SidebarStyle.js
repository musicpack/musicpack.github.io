import styled from "styled-components"
import { FaTimes } from "react-icons/fa"
import { Link } from "gatsby"
import * as variables from "./Variables"

export const Container = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: ${variables.SIDEBAR_BG};
  display: grid;
  align-items: center;
  transition: 0.6s ease-in-out;
  opacity: ${({ sidebarOpen }) => (sidebarOpen ? "97%" : "0")};
  right: ${({ sidebarOpen }) => (sidebarOpen ? "0%" : "-100%")};
  z-index: 999;
`

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`
export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 90%);
  font-size: 1.8rem;
  background: transparent;
  outline: none;
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

export const SidebarList = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${variables.PRIMARY_COLOR};
    transition: 0.3s ease-in-out;
  }
`

/* Button */
export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 60px 0 20px 0;
`
export const SideBarBtn = styled(Link)`
  background: ${variables.PRIMARY_COLOR};
  color: #fff;
  padding: 12px 32px;
  font-size: 1.2rem;
  outline: none;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.8;
  }
`
