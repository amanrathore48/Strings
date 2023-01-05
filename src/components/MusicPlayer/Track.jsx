import React from "react";
import {
  CoverCon,
  TrackArtist,
  TrackCon,
  TrackDetailsCon,
  TrackName,
} from "../Styles/MusicPlayer";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <TrackCon>
    <CoverCon isActive={isActive} isPlaying={isPlaying}>
      <img src={activeSong?.images?.coverart} alt="cover art" />
    </CoverCon>
    <TrackDetailsCon>
      <TrackName>
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </TrackName>
      <TrackArtist>
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </TrackArtist>
    </TrackDetailsCon>
  </TrackCon>
);

export default Track;
