import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from "./components";
import {
  AppContainer,
  AppInnerCon,
  MainContainer,
  MusicPlayerSec,
  PageCon,
  TopPlayCon,
  TopPlayOuterCon,
} from "./components/Styles/GlobalStyles";
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
} from "./pages";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <MainContainer>
      <Sidebar />
      <AppContainer>
        <Searchbar />

        <AppInnerCon>
          <PageCon>
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/top-artists" element={<TopArtists />} />
              <Route path="/top-charts" element={<TopCharts />} />
              <Route path="/around-you" element={<AroundYou />} />
              <Route path="/artists/:id" element={<ArtistDetails />} />
              <Route path="/songs/:songid" element={<SongDetails />} />
              <Route path="/search/:searchTerm" element={<Search />} />
            </Routes>
          </PageCon>
        </AppInnerCon>
      </AppContainer>

      {activeSong?.title && (
        <MusicPlayerSec>
          <MusicPlayer />
        </MusicPlayerSec>
      )}
    </MainContainer>
  );
};

export default App;
