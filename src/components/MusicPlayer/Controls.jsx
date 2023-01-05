import React from "react";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import {
  ControlCon,
  PauseIcon,
  PlayIcon,
  PrevIcon,
  RepeatIcon,
  ShuffleIcon,
  SkipIcon,
} from "../Styles/MusicPlayer";

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <ControlCon>
    <RepeatIcon
      size={20}
      color={repeat ? "red" : "white"}
      onClick={() => setRepeat((prev) => !prev)}
    />
    {currentSongs?.length && <PrevIcon size={30} onClick={handlePrevSong} />}
    {isPlaying ? (
      <PauseIcon size={45} onClick={handlePlayPause} />
    ) : (
      <PlayIcon size={45} onClick={handlePlayPause} />
    )}
    {currentSongs?.length && <SkipIcon size={30} onClick={handleNextSong} />}
    <ShuffleIcon
      size={20}
      color={shuffle ? "red" : "white"}
      onClick={() => setShuffle((prev) => !prev)}
    />
  </ControlCon>
);

export default Controls;
