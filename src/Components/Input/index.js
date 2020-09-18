import React, { useRef } from "react";

import { Inp, Button, Main } from "./style";

import { connect } from "react-redux";
import getAllMovie from "../../Data/Operations";

const Input = ({ getAllMovie }) => {
  const URL = useRef("");

  const style = {
    textAlign: "center",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  function sendURL() {
    getAllMovie(URL.current.value);
  }

  return (
    <Main>
      <Inp ref={URL} type="text" placeholder="Paste link" />
      <Button onClick={() => sendURL()}>Start</Button>
    </Main>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllMovie: (URL) => dispatch(getAllMovie(URL)),
});

const ConectedApp = connect(null, mapDispatchToProps)(Input);

export default ConectedApp;
