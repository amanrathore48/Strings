import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";

export const SongDetailsSec = styled.div`
  display: flex;
  height: 100vh;
  width: calc(100vw - 240px);
`;
export const SongDetailsCon = styled.div`
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

export const SongDetailsHead = styled.div`
  color: ${COLORS.TextColor};
  margin-top: 1rem;
  width: 100%;
  padding: 10px;
  font-size: 1.875rem;
  font-weight: 500;
  text-align: center;
  font-family: ${FONTS.Carzy};
`;
export const SongDetailsInnerCon = styled.div`
  margin-top: 1rem;
  text-align: center;
  width: 100%;
  height: max-content;
  padding-bottom: 100px;
  overflow-y: auto;
  //hide scrollbar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Lyrics = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.5rem;
`;
