import React from "react";

import Header from "./Components/Header";
import Wrapper from "./Components/Wrapper";
import Input from "./Components/Input";
import ProgressBar from "./Components/ProgresBar";
import Downloader from "./Components/Downolader";
import Footer from "./Components/Footer";

import { connect } from "react-redux";

function App({ loading, movieInfo }) {
  const h1Style = {
    textAlign: "center",
    margin: "30px 0",
    fontSize: "1.5em",
    fontWeight: "normal",
  };

  return (
    <>
      <Header />
      <Wrapper>
        <h2 style={h1Style}>Download Video and Audio from YouTube</h2>
        <Input />
        {loading ? <ProgressBar /> : null}

        {typeof movieInfo === "object" && movieInfo !== null ? (
          <Downloader movieInfo={movieInfo} />
        ) : null}
        <Footer />
      </Wrapper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.Movie.loading,
    movieInfo: state.Movie.movieInfo,
  };
};

const MyApp = connect(mapStateToProps, null)(App);

export default MyApp;
