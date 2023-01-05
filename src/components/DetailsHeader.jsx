import React from "react";
import { Link } from "react-router-dom";
import {
  DetailsCon,
  DetailsGen,
  DetailsGenCon,
  DetailsHeadBg,
  DetailsHeadCon,
  DetailsInnerCon,
  DetailsName,
} from "./Styles/ArtistDetails";

const DetailsHeader = ({ artistId, artistData, songData }) => (
  <DetailsHeadCon>
    <DetailsHeadBg />

    <DetailsInnerCon>
      <img
        alt="profile"
        src={
          artistId
            ? artistData?.artists[artistId].attributes?.artwork?.url
                .replace("{w}", "500")
                .replace("{h}", "500")
            : songData?.images?.coverart
        }
      />

      <DetailsCon>
        <DetailsName>
          {artistId
            ? artistData?.artists[artistId].attributes?.name
            : songData?.title}
        </DetailsName>
        <DetailsGenCon>
          {!artistId && (
            <DetailsGen to={`/artists/${songData?.artists[0]?.adamid}`}>
              {songData?.subtitle}
            </DetailsGen>
          )}

          <DetailsGen>
            (
            {artistId
              ? artistData?.artists[artistId].attributes?.genreNames[0]
              : songData?.genres?.primary}
            )
          </DetailsGen>
        </DetailsGenCon>
      </DetailsCon>
    </DetailsInnerCon>

    <div className="w-full sm:h-44 h-24" />
  </DetailsHeadCon>
);

export default DetailsHeader;
