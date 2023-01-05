import React from "react";
import { RSongsCon, RSongsHead, RSongsInnerCon } from "./Styles/ArtistDetails";
import SongCard from "./SongCard";

const RelatedSongs = ({
  data,
  artistId,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
}) => (
  <RSongsCon>
    <RSongsHead>Related Songs</RSongsHead>
    <RSongsInnerCon>
      {data?.map((song, i) => (
        <SongCard
          key={song.key}
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          data={data}
          i={i}
        />
      ))}
    </RSongsInnerCon>
  </RSongsCon>
);

export default RelatedSongs;
