import React from "react";
import axios from "../axios";
import requests from "../request";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = React.useState([]);
  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * (request.data.results.length - 1))
        ]
      );
      //   console.log(
      //     request.data.results[
      //       Math.floor(Math.random() * (request.data.results.length - 1))
      //     ]
      //   );
      return request;
      // div.banner__buttons>button.banner__button*2
    }
    fetchData();
  }, []);
  //   console.log(movie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">{movie?.overview}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
