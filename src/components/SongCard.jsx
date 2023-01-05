import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import {
  SongCardArtName,
  SongCardCon,
  SongCardDetailsCon,
  SongCardImgCon,
  SongCardImgOver,
  SongCardTitle,
} from "./Styles/GlobalStyles";

const SongCard = ({ song, isPlaying, activeSong, data, i }) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <SongCardCon>
      <SongCardImgCon>
        <SongCardImgOver>
          <PlayPause
            isPlaying={isPlaying}
            activeSong={activeSong}
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </SongCardImgOver>
        <img alt="song_img" src={song.images?.coverart} />
      </SongCardImgCon>

      <SongCardDetailsCon>
        <SongCardTitle to={`/songs/${song?.key}`}>{song.title}</SongCardTitle>
        <SongCardArtName
          to={
            song.artists
              ? `/artists/${song?.artists[0]?.adamid}`
              : "/top-artists"
          }
        >
          {song.subtitle}
        </SongCardArtName>
      </SongCardDetailsCon>
    </SongCardCon>
  );
};

export default SongCard;
