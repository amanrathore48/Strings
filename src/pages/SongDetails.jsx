import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";

import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
import {
  Lyrics,
  SongDetailsHead,
  SongDetailsInnerCon,
  SongDetailsSec,
} from "../components/Styles/SongDetails";
import {
  RelatedCon,
  SongBarDetailsCon,
} from "../components/Styles/ArtistDetails";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="Searching song details" />;

  console.log(songData);

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <SongDetailsSec>
      <SongBarDetailsCon>
        <DetailsHeader artistId={artistId} songData={songData} />
        <SongDetailsHead>Lyrics</SongDetailsHead>

        <SongDetailsInnerCon>
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line, i) => (
              <Lyrics key={`lyrics-${line}-${i}`}>{line}</Lyrics>
            ))
          ) : (
            <Lyrics>Sorry, No lyrics found!</Lyrics>
          )}
        </SongDetailsInnerCon>
      </SongBarDetailsCon>

      <RelatedCon>
        <RelatedSongs
          data={data}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      </RelatedCon>
    </SongDetailsSec>
  );
};

export default SongDetails;
