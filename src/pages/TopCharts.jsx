import React from "react";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import {
  TopChartCardCon,
  TopChartHead,
  TopChartSec,
} from "../components/Styles/TopCharts";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <TopChartSec>
      <TopChartHead>Discover Top Charts</TopChartHead>

      <TopChartCardCon>
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </TopChartCardCon>
    </TopChartSec>
  );
};

export default TopCharts;
