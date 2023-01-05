import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

import "swiper/css";
import "swiper/css/free-mode";
import {
  SwiperImg,
  SwiperSlideStyled,
  TopChartCardCon,
  TopChartCardDetailsCon,
  TopChartCardHead,
  TopChartCardImgCon,
  TopChartCardMain,
  TopChartCardSubTitle,
  TopChartCardTitle,
  TopPlayArtistCon,
  TopPlayCon,
  TopPlayHead,
  TopPlayHeadCon,
  TopPlayInnerCon,
  TopPlaySeeMore,
  TopPlaySwiperCon,
} from "./Styles/GlobalStyles";

const TopChartCard = ({
  song,
  i,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <TopChartCardMain activeSong={activeSong} song={song}>
    <TopChartCardHead>{i + 1}.</TopChartCardHead>
    <TopChartCardImgCon className="flex-1 flex flex-row justify-between items-center">
      <img src={song?.images?.coverart} alt={song?.title} />
      <TopChartCardDetailsCon>
        <TopChartCardTitle to={`/songs/${song.key}`}>
          {song?.title}
        </TopChartCardTitle>
        <TopChartCardSubTitle to={`/artists/${song?.artists[0].adamid}`}>
          {song?.subtitle}
        </TopChartCardSubTitle>
      </TopChartCardDetailsCon>
    </TopChartCardImgCon>
    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </TopChartCardMain>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: "smooth" });
  });

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <TopPlayCon ref={divRef}>
      <TopPlayInnerCon>
        <TopPlayHeadCon>
          <TopPlayHead>Top Charts</TopPlayHead>
          <Link to="/top-charts">
            <TopPlaySeeMore>See more</TopPlaySeeMore>
          </Link>
        </TopPlayHeadCon>

        <TopChartCardCon>
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </TopChartCardCon>
      </TopPlayInnerCon>

      <TopPlaySwiperCon>
        <TopPlayArtistCon>
          <TopPlayHead>Top Artists</TopPlayHead>
          <Link to="/top-artists">
            <TopPlaySeeMore>See more</TopPlaySeeMore>
          </Link>
        </TopPlayArtistCon>

        <Swiper
          slidesPerView="auto"
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
        >
          {topPlays?.slice(0, 5).map((artist) => (
            <SwiperSlideStyled
              key={artist?.key}
              style={{ width: "25%", height: "auto" }}
            >
              <Link to={`/artists/${artist?.artists[0].adamid}`}>
                <SwiperImg src={artist?.images?.background} alt="Name" />
              </Link>
            </SwiperSlideStyled>
          ))}
        </Swiper>
      </TopPlaySwiperCon>
    </TopPlayCon>
  );
};

export default TopPlay;
