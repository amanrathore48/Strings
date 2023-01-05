import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import { Error, Loader, SongCard } from "../components";
import { useGetSongsByCountryQuery } from "../redux/services/shazamCore";
import {
  AroundYouCardCon,
  AroundYouCon,
  AroundYouHead,
} from "../components/Styles/AroundYou";

const CountryTracks = () => {
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_GEO_API_KEY)
      .then((res) => setCountry(res?.data?.location.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading)
    return <Loader title="Loading Songs around you..." />;

  if (error && country !== "") return <Error />;

  return (
    <AroundYouCon>
      <AroundYouHead>
        Trending Songs of <span>{country}</span>
      </AroundYouHead>

      <AroundYouCardCon>
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
      </AroundYouCardCon>
    </AroundYouCon>
  );
};

export default CountryTracks;
