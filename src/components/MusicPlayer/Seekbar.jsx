import React from "react";
import {
  IncDecBtn,
  SeekBarCon,
  SeekInput,
  SeekTimer,
} from "../Styles/MusicPlayer";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <SeekBarCon>
      <IncDecBtn
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden lg:mr-4 lg:block text-white"
      >
        -
      </IncDecBtn>
      <SeekTimer>{value === 0 ? "0:00" : getTime(value)}</SeekTimer>
      <SeekInput
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
      />
      <SeekTimer>{max === 0 ? "0:00" : getTime(max)}</SeekTimer>
      <IncDecBtn
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden lg:ml-4 lg:block text-white"
      >
        +
      </IncDecBtn>
    </SeekBarCon>
  );
};

export default Seekbar;
