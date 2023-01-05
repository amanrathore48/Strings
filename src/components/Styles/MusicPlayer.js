import styled, { css, keyframes } from "styled-components";
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { COLORS, FONTS, IMAGES, DEVICE } from "../../constants";
//Amination
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
export const PlayerMain = styled.div`
  display: flex;
  position: relative;
  padding-left: 2rem;
  padding-right: 2rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 640px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
`;
export const PlayerInnerCon = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
  justify-content: center;
  align-items: center;
`;

//Track
export const TrackCon = styled.div`
  display: flex;
  flex: 1 1 0%;
  justify-content: flex-start;
  align-items: center;
`;
export const TrackDetailsCon = styled.div`
  width: 50%;
`;
export const TrackName = styled.p`
  color: ${COLORS.TextColor};
  font-size: 1.125rem;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${FONTS.Monster};
  cursor: pointer;
`;
export const TrackArtist = styled.p`
  color: #d1d5db;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: ${FONTS.Robo};
`;
export const CoverCon = styled.div`
  ${(props) =>
    props.isActive && props.isPlaying
      ? css`
          animation: ${rotate} 3s linear infinite;
        `
      : ""}
  margin-right: 1rem;
  width: 4rem;
  height: 4rem;
  img {
    border-radius: 100%;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 640px) {
    display: block;
  }
`;

// controls

export const ControlCon = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    width: 9rem;
  }
  @media (min-width: 1024px) {
    width: 13rem;
  }
`;

export const RepeatIcon = styled(BsArrowRepeat)`
  display: none;
  cursor: pointer;

  @media (min-width: 640px) {
    display: block;
  }
`;
export const ShuffleIcon = styled(BsArrowRepeat)`
  display: none;
  cursor: pointer;

  @media (min-width: 640px) {
    display: block;
  }
`;
export const PrevIcon = styled(MdSkipPrevious)`
  cursor: pointer;
  color: ${COLORS.TextColor};
`;

export const PauseIcon = styled(BsFillPauseFill)`
  cursor: pointer;
  color: ${COLORS.TextColor};
`;
export const PlayIcon = styled(BsFillPlayFill)`
  cursor: pointer;
  color: ${COLORS.TextColor};
`;
export const SkipIcon = styled(MdSkipNext)`
  cursor: pointer;
  color: ${COLORS.TextColor};
`;

//seekbar
export const SeekBarCon = styled.div`
  display: none;
  flex-direction: row;
  align-items: center;

  @media (min-width: 640px) {
    display: flex;
  }
`;
export const IncDecBtn = styled.button`
  border: none;
  width: 25px;
  height: 24px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${COLORS.Light};
  color: ${COLORS.TextColor};
  font-family: ${FONTS.Monster};
  @media (min-width: 1024px) {
    display: block;
    margin-right: 1rem;
  }
`;
export const SeekTimer = styled.p`
  color: ${COLORS.TextColor};
`;
export const SeekInput = styled.input`
  margin-left: 1rem;
  margin-right: 1rem;
  width: 6rem;
  height: 0.25rem;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    display: block;
    width: 14rem;
  }
`;

// Vloume Bar

export const VolBarCon = styled.div`
  display: none;
  flex: 1 1 0%;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

export const VolInput = styled.input`
  margin-left: 0.5rem;
  height: 0.25rem;

  @media (min-width: 768px) {
    width: 8rem;
  }
  @media (min-width: 1024px) {
    width: 8rem;
  }
`;
