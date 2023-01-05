import React from "react";
import { Link } from "react-router-dom";

import PlayPause from "./PlayPause";
import {
  SongBarDetails,
  SongBarDetailsCon,
  SongBarHeadCounter,
  SongBarName,
  SongBarTitle,
  SongsBarCon,
} from "./Styles/ArtistDetails";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <SongsBarCon>
    <SongBarHeadCounter>{i + 1}.</SongBarHeadCounter>
    <SongBarDetailsCon>
      <img
        src={
          artistId
            ? song?.attributes?.artwork?.url
                .replace("{w}", "125")
                .replace("{h}", "125")
            : song?.images?.coverart
        }
        alt={song?.title}
      />
      <SongBarDetails>
        {!artistId ? (
          <Link to={`/songs/${song.key}`}>
            <SongBarTitle>{song?.title}</SongBarTitle>
          </Link>
        ) : (
          <SongBarTitle>{song?.attributes?.name}</SongBarTitle>
        )}
        <SongBarName>
          {artistId ? song?.attributes?.albumName : song?.subtitle}
        </SongBarName>
      </SongBarDetails>
    </SongBarDetailsCon>
    {!artistId ? (
      <PlayPause
        isPlaying={isPlaying}
        activeSong={activeSong}
        song={song}
        handlePause={handlePauseClick}
        handlePlay={() => handlePlayClick(song, i)}
      />
    ) : null}
  </SongsBarCon>
);

export default SongBar;
