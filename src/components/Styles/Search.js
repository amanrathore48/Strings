import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";

export const SearchSec = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const SearchInnerCon = styled.div`
  height: max-content;
  width: calc(100vw - 240px);
  padding-bottom: 80px;
  overflow-y: auto;
  //hide scrollbar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }

  @media ${DEVICE.tablet} {
    width: 100vw;
  }
`;
export const SearchHead = styled.h2`
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: ${COLORS.TextColor};
  font-size: 1.875rem;
  line-height: 2.25rem;
  font-weight: 700;
  text-align: left;
  font-family: ${FONTS.Monster};
  text-align: center;
  padding: 10px;
`;
export const SearchedCardCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  width: 100%;
`;
