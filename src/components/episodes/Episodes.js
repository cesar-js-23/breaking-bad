import React, { useEffect } from "react";
import "./Episodes.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getEpisodes } from "../../actions";
import Spinner from "../Spinner";
const Episodes = (props) => {
  useEffect(() => {
    async function fetchData() {
      await props.getEpisodes();
    }
    fetchData();
  }, []);

  return (
    <div className="Episodes">
      <h1>Episodes List</h1>
      <ul className="Episodes__list">
        {props.episodes ? (
          // eslint-disable-next-line array-callback-return
          props.episodes.map((episode, index) => {
            if (episode.series === "Breaking Bad") {
              return (
                <Link key={index} to={`/episodes/${episode.episode_id}`}>
                  <li>{episode.title}</li>
                </Link>
              );
            }
          })
        ) : (
          <Spinner />
        )}
      </ul>
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
    getEpisodes: () => dispatch(getEpisodes()),
  };
}

//===========================================//

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
