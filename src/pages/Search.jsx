import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Error, Loader, SongCard } from "../components";
import {
  SearchedCardCon,
  SearchHead,
  SearchInnerCon,
  SearchSec,
} from "../components/Styles/Search";
import { useGetSongsBySearchQuery } from "../redux/services/shazamCore";

const Search = () => {
  const { searchTerm } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);

  const songs = data?.tracks?.hits.map((song) => song.track);

  if (isFetching) return <Loader title={`Searching ${searchTerm}...`} />;

  if (error) return <Error />;

  return (
    <SearchSec>
      <SearchInnerCon>
        <SearchHead>
          Showing results for <span className="font-black">{searchTerm}</span>
        </SearchHead>

        <SearchedCardCon>
          {songs.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))}
        </SearchedCardCon>
      </SearchInnerCon>
    </SearchSec>
  );
};

export default Search;
