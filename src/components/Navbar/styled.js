import styled from "styled-components";

export const NavbarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  position: fixed;
  top: 0;
  height: 70px;
  z-index: 20;
`;

export const LogoWrapper = styled.div`
  display: inline-flex;
  align-self: flex-start;
  align-items: center;
`;

export const NavbarMenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
  }
`;

export const Logo = styled.div`
  width: 80px;
  height: 80px;
`;

export const AppName = styled.p`
  font-family: "Fredoka One";
  font-size: 16px;
  color: #8f70f2;
  margin-left: -18px;
`;
