import styled, { css } from "styled-components";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";
import { SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

// App
export const MainContainer = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
`;
export const AppContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #000000;
  flex-direction: column;
  width: 100%;
`;
export const AppInnerCon = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow: hidden;
`;
export const PageCon = styled.div`
  height: 100%;
`;
export const TopPlayOuterCon = styled.div`
  width: 30%;
  height: 100vh;
  @media ${DEVICE.laptopL} {
    display: none;
  }
`;

//Music palyer
export const MusicPlayerSec = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  height: 7rem;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
`;

//Song Card

export const SongCardCon = styled.div`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  border-radius: 0.5rem;
  cursor: pointer;
  width: 250px;
`;
export const SongCardImgCon = styled.div`
  position: relative;
  width: 100%;
  height: 14rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
  }
`;
export const SongCardImgOver = styled.div`
  position: absolute;
  color: ${COLORS.SecondaryDark};
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  opacity: 0.4;

  ${({ activeSong, song }) =>
    activeSong?.title === song?.title
      ? css`
          display: flex;
          background-color: #000000;
        `
      : css`
          display: hidden;
        `};
`;
export const SongCardDetailsCon = styled.div`
  display: flex;
  margin-top: 1rem;
  flex-direction: column;
`;
export const SongCardTitle = styled(Link)`
  color: ${COLORS.TextColor};
  font-size: 1rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  font-family: ${FONTS.Monster};
`;
export const SongCardArtName = styled(Link)`
  margin-top: 0.25rem;
  color: #d1d5db;
  font-size: 0.875rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-decoration: none;
  font-family: ${FONTS.Robo};
`;

// Artist Card

export const ArtCardCon = styled.div`
  display: flex;
  padding: 1rem;
  opacity: 0.8;
  flex-direction: column;
  border-radius: 0.5rem;
  cursor: pointer;
  backdrop-filter: blur(4px);
  width: 250px;

  img {
    width: 100%;
    height: 14rem;
    border-radius: 0.5rem;
  }
`;
export const ArtCardSub = styled.p`
  margin-top: 1rem;
  color: ${COLORS.TextColor};
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${FONTS.Monster};
`;

// Error

export const ErrCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  h1 {
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }
`;

// Loader

export const LoaderCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h1 {
    margin-top: 0.5rem;
    color: #ffffff;
    font-size: 1.5rem;
    line-height: 2rem;
    font-weight: 700;
  }

  img {
    object-fit: contain;
    width: 8rem;
    height: 8rem;
  }
`;

//SearchBar

export const SearchForm = styled.form`
  padding: 0.5rem;
  color: #9ca3af;
`;
export const SearchLabel = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  whitespace: nowrap;
  borderwidth: 0;
`;
export const SearchInputCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const SearchInput = styled.input`
  padding: 1rem;
  background-color: transparent;
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #6b7280;
  flex: 1 1 0%;
  border-style: none;
  outline: 0;
`;

// Top Chart

export const TopChartCardMain = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  padding: 10px;
  border-radius: 6px;
  background: ${({ activeSong, song }) =>
    activeSong?.title === song?.title ? COLORS.Light : "transparent"};
  cursor: pointer;
  &:hover {
    background: #4c426e;
  }
`;
export const TopChartCardHead = styled.h3`
  margin-right: 0.75rem;
  color: #ffffff;
  line-height: 1.5rem;
  font-weight: 700;
  font-family: ${FONTS.Ubuntu};
`;
export const TopChartCardImgCon = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 0%;
  justify-content: space-between;
  align-items: center;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 0.5rem;
  }
`;
export const TopChartCardDetailsCon = styled.div`
  display: flex;
  margin-left: 0.75rem;
  margin-right: 0.75rem;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
`;
export const TopChartCardTitle = styled(Link)`
  color: #ffffff;
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 700;
  text-decoration: none;
  font-family: ${FONTS.Monster};
`;
export const TopChartCardSubTitle = styled(Link)`
  margin-top: 0.25rem;
  color: #d1d5db;
  font-size: 0.8rem;
  text-decoration: none;
  font-family: ${FONTS.Robo};
`;

//Top Play

export const TopPlayCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  align-items: center;
`;
export const TopPlayInnerCon = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  margin-top: 40px;
`;
export const TopPlayHeadCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const TopPlayHead = styled.h2`
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  font-family: ${FONTS.Monster};
`;
export const TopChartCardCon = styled.div`
  display: flex;
  width: 100%;
  height: 80%;
  margin-top: 2rem;
  flex-direction: column;
  gap: 0.5rem;
`;
export const TopPlaySeeMore = styled.p`
  color: #d1d5db;
  font-size: 1rem;
  line-height: 1.5rem;
  cursor: pointer;
`;

export const TopPlaySwiperCon = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  width: 100%;
  height: 40%;
`;
export const TopPlayArtistCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;
export const SwiperSlideStyled = styled(SwiperSlide)`
  border-radius: 9999px;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const SwiperImg = styled.img`
  object-fit: cover;
  width: 100%;
  border-radius: 100%;
`;
