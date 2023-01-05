import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";

export const DiscoverSec = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  background: ${COLORS.SecondaryDark};
`;
export const DiscoverCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 70%;
  align-items: center;
  @media ${DEVICE.laptopL} {
    width: 100vw;
  }
`;
export const DiscoverHeadCon = styled.div`
  display: flex;
  margin-top: 1rem;
  margin-bottom: 1rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
`;
export const DiscoverHead = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: left;
  font-family: ${FONTS.Monster};
`;
export const DiscoverType = styled.select`
  padding: 0.75rem;
  background-color: ${COLORS.Light};
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.25rem;
  border-radius: 0.5rem;
  outline: 0;
`;
export const DiscoverCardCon = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 90%;
  overflow-y: auto;
  justify-content: center;
  gap: 2rem;
  //hide scrollbar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
