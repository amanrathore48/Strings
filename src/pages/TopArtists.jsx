import React from "react";

import { ArtistCard, Error, Loader } from "../components";
import {
  TopArtCardCon,
  TopArtHead,
  TopArtSec,
} from "../components/Styles/TopArtist";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) return <Loader title="Loading artists..." />;

  if (error) return <Error />;

  return (
    <TopArtSec>
      <TopArtHead>Top Artists</TopArtHead>

      <TopArtCardCon>
        {data?.map((track) => (
          <ArtistCard key={track.key} track={track} />
        ))}
      </TopArtCardCon>
    </TopArtSec>
  );
};

export default TopArtists;
