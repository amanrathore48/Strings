import styled from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";
import { Link } from "react-router-dom";

export const ArtistSection = styled.div`
  display: flex;
  flex-direction: column;
`;

//DetailsHeader

export const DetailsHeadCon = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 90%;
`;
export const DetailsHeadBg = styled.div`
  width: 100%;
  height: 7rem;
  @media (min-width: 640px) {
    height: 12rem;
  }
`;
export const DetailsInnerCon = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  img {
    object-fit: cover;
    width: 7rem;
    height: 7rem;
    border-radius: 9999px;
    border-width: 2px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);

    @media (min-width: 640px) {
      width: 12rem;
      height: 12rem;
    }
  }
`;

export const DetailsCon = styled.div`
  margin-left: 1.25rem;
`;
export const DetailsName = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 700;
  font-family: ${FONTS.Monster};
  @media (min-width: 640px) {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;
export const DetailsGenCon = styled.div`
  display: flex;
  gap: 0.4rem;
`;
export const DetailsGen = styled(Link)`
  margin-top: 0.5rem;
  color: #9ca3af;
  font-size: 1rem;
  line-height: 1.5rem;
  text-decoration: none;
`;

//Related Songs

export const RSongsCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`;
export const RSongsHead = styled.div`
  display: flex;
  width: 90%;
  height: max-content;
  padding: 18px;
  align-items: center;
  justify-content: center;
  color: ${COLORS.TextColor};
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${FONTS.Monster};
`;

export const RSongsInnerCon = styled.div`
  display: flex;
  margin-top: 0.8rem;
  padding-bottom: 100px;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow-y: auto;
  //hide scrollbar
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

//SongBar
export const SongsBarCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 1rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  background: ${({ activeSong, song }) =>
    activeSong?.title === song?.title ? "#4c426e" : "transparent"};
  &:hover {
    background: ${COLORS.PrimaryLight};
  }
`;

export const SongBarHeadCounter = styled.h3`
  margin-right: 0.75rem;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 700;
  font-family: ${FONTS.Monster};
`;

export const SongBarDetailsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 50%;
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem;
  }
`;
export const RelatedCon = styled.div`
  width: 50%;
`;
export const SongBarDetails = styled.div`
  display: flex;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
`;
export const SongBarTitle = styled.p`
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
`;
export const SongBarName = styled.p`
  margin-top: 0.25rem;
  color: #d1d5db;
  font-size: 1rem;
  line-height: 1.5rem;
`;
