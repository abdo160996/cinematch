import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material/";
import { useMemo ,lazy} from "react";
import { useSelector } from "react-redux";

import Layout from "./components/Layout";
import Home from "./features/home/Home";
const NowPlaying = lazy(()=>import("./features/feed/NowPlaying")) ;
const Trending = lazy(()=>import("./features/trending/Trending")) ;
const Popular = lazy(()=>import("./features/popular/Popular")) ;
const TopRatedMovies = lazy(()=>import("./features/topRated/TopRatedMovies")) ;
const Profile = lazy(()=> import ('./features/profile/Profile'))
const AdvancedSearch = lazy(()=> import ('./features/search/AdvancedSearch'))


import MovieAndTvDetails from "./features/details/MovieAndTvDetails";
import NotFound from "./components/NotFound";
import TitleSearchResults from "./features/search/TitleSearchResults";
import FilterSearchResults from "./features/search/FilterSearchResults";
import Login from "./features/login/Login";
import RequireAuth from "./components/RequireAuth";
import ConfirmLogin from "./features/login/ConfirmLogin";







const multiRoutes = [":mediaType/:id", ":category/:mediaType/:id", "search/:keyword/:mediaType/:id", "filter/filter_results/:mediaType/:id"].map((path, index) => {
  return <Route path={path}  element={<MovieAndTvDetails />} key={index} />;
});
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/cinematch" element={<Layout />} errorElement={<NotFound/>}>
      <Route index  element={<Home />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/approved" element={<ConfirmLogin/>}/>
      
      <Route path="feed/:mediaType" element={<NowPlaying />} />
      <Route path="trending/:mediaType" element={<Trending />} />
      <Route path="popular/:mediaType" element={<Popular />} />
      <Route path="top_rated/:mediaType" element={<TopRatedMovies />} />
      {multiRoutes}

      <Route path="search/:keyword/" element={<TitleSearchResults />} />
      <Route path="filter/filter_results" element={<FilterSearchResults />} />
      <Route path="filter" element={<AdvancedSearch />}  />
      <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>}/>
     
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);


function generatePalette(mode) {
  return {
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: { color: mode === "dark" ? "#fca311 !important" : "#42a5f5 !important" },
        },
      },
    },
    typography: {
      fontFamily: "Outfit",
    },
    shadows: ["rgba(149, 157, 165, 0.2) 0px 8px 24px;", "rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;", ...Array.from({ length: 23 }).fill("none")],
    palette:
      mode === "dark"
        ? {
            mode,
            background: {
              default: "#121420",
            },
            custom: {
              text: "#f5f5f5",
              primary: "#1b2432",
              bgdark: "#121420",
              secondary: "#403f4c",
              chipbg: "#2c2b3c",
              activelink: "#121420",
            },
          }
        : {
            mode,
            background: {
              default: "#cce3de",
            },

            custom: {
              text: "#003049",
              primary: "#E5E5E5",
              bgdark: "#14213D",
              secondary: "#003049",
              chipbg: "#2c2b3c",
              activelink: "#cce3de",
            },
          },
  };
}

function App() {
  const mode = useSelector((state) => state.darkMode.mode);
  const theme = useMemo(() => createTheme(generatePalette(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
