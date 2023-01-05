import React from "react";
import { useNavigate } from "react-router-dom";
import { ArtCardCon, ArtCardSub } from "./Styles/GlobalStyles";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <ArtCardCon
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track?.images?.coverart} />
      <ArtCardSub>{track?.subtitle}</ArtCardSub>
    </ArtCardCon>
  );
};

export default ArtistCard;
