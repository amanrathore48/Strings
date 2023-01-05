import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";
import { VolBarCon, VolInput } from "../Styles/MusicPlayer";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <VolBarCon>
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value === 0 && (
      <BsFillVolumeMuteFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(1)}
      />
    )}
    <VolInput
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
    />
  </VolBarCon>
);

export default VolumeBar;
