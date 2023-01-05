import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";

export const TopChartSec = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
export const TopChartHead = styled.div`
  padding: 12px;
  color: ${COLORS.TextColor};
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  font-family: ${FONTS.Monster};
`;
export const TopChartCardCon = styled.div`
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
