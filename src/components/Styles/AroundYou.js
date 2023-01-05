import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";

export const AroundYouCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const AroundYouHead = styled.div`
  padding: 12px;
  color: ${COLORS.TextColor};
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  font-family: ${FONTS.Monster};
  span {
    color: ${COLORS.Light};
  }
  @media ${DEVICE.tablet} {
    text-align: center;
  }
`;
export const AroundYouCardCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 100px;
  //hide scrollbar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
