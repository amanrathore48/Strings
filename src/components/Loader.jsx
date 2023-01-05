import React from "react";

import { loader } from "../assets";
import { LoaderCon } from "./Styles/GlobalStyles";

const Loader = ({ title }) => (
  <LoaderCon>
    <img src={loader} alt="loader" />
    <h1>{title || "Loading"}</h1>
  </LoaderCon>
);

export default Loader;
