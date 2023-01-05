import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";

export const SidebarCon = styled.div`
  display: flex;

  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  flex-direction: column;
  width: 240px;
  background: ${COLORS.PrimaryDark};
  @media ${DEVICE.tablet} {
    position: fixed;
    left: ${(props) => (props.isOpen ? "0" : "-250px")};
    z-index: 100;
    height: 100%;
  }
`;
export const LogoCon = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LogoName = styled.p`
  font-family: ${FONTS.Ubuntu};
  color: ${COLORS.Light};
  font-size: 24px;
`;
export const MenuBtnCon = styled.div`
  display: block;
  position: absolute;
  right: 0.75rem;
  top: 1.5rem;

  @media (min-width: 768px) {
    display: none;
  }
  color: ${COLORS.TextColor};
  font-size: 20px;
`;

export const LinkCon = styled.div`
  margin-top: 18px;
`;

export const MyNavLink = styled(Link)`
  display: flex;
  gap: 6px;
  padding: 10px;
  margin: 6px;
  color: ${COLORS.TextColor};
  background: ${COLORS.Light};
  font-size: 1.25rem;
  font-weight: 500;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;
  font-family: ${FONTS.Monster};
  border-radius: 6px 2px 2px 6px;
`;
