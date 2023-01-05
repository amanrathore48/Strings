import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Error, Loader, SongCard, TopPlay } from "../components";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { genres } from "../assets/constants";
import {
  DiscoverCardCon,
  DiscoverCon,
  DiscoverHead,
  DiscoverHeadCon,
  DiscoverSec,
  DiscoverType,
} from "../components/Styles/Discover";
import { TopPlayOuterCon } from "../components/Styles/GlobalStyles";

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );

  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <DiscoverSec>
      <DiscoverCon>
        <DiscoverHeadCon>
          <DiscoverHead>Discover {genreTitle}</DiscoverHead>

          <DiscoverType
            onChange={(e) => dispatch(selectGenreListId(e.target.value))}
            value={genreListId || "pop"}
          >
            {genres.map((genre) => (
              <option key={genre.value} value={genre.value}>
                {genre.title}
              </option>
            ))}
          </DiscoverType>
        </DiscoverHeadCon>

        <DiscoverCardCon>
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
        </DiscoverCardCon>
      </DiscoverCon>

      <TopPlayOuterCon>
        <TopPlay />
      </TopPlayOuterCon>
    </DiscoverSec>
  );
};

export default Discover;
