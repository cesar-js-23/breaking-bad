import React, { useEffect } from "react";
import "./Home.css";

import logo from "../../img/logo.png";
import { addQuote } from "../../actions";
import { connect } from "react-redux";
import Spinner from "../Spinner";

const Home = (props) => {
  useEffect(() => {
    //Forma de despachar la acción
    //dispatch(addQuote());
    //console.log(props.quote);
    async function fetchData() {
      await props.addQuote();
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="Home">
      <img src={logo} alt="" className="Home__logo" />
      <hr />
      {props.quote ? (
        <div>
          <h2>"{props.quote.quote}"</h2>
          <h3>{props.quote.author}</h3>
          <p>From: {props.quote.series}</p>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

//Actions
function mapDispatchToProps(dispatch) {
  return {
    addQuote: () => dispatch(addQuote()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
