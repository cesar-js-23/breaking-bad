import React, { useEffect } from "react";
import { emptyEpisodeDetail, getEpisodeDetail } from "../../actions";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import "./EpisodeDetail.css";

const EpisodeDetail = (props) => {
  const id = props.match.params.id;

  useEffect(() => {
    props.emptyEpisodeDetail();
    props.getEpisodeDetail(id);
  }, [id]);

  return (
    <div className="EpisodeDetail-Container">
      <h1>Character Details</h1>
      {props.episodeDetail ? (
        <div className="EpisodeDetail-Data">
          <h2>{props.episodeDetail.title}</h2>
          <h3>Season: {props.episodeDetail.season}</h3>
          <h3>Aired: {props.episodeDetail.air_date}</h3>
          <h3>Characters: </h3>
          <ul>
            {props.episodeDetail.characters &&
              props.episodeDetail.characters.map((character, index) => (
                <li key={index}>{character}</li>
              ))}
          </ul>
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

function mapDispatchToProps(dispatch) {
  return {
    emptyEpisodeDetail: () => dispatch(emptyEpisodeDetail()),
    getEpisodeDetail: (id) => dispatch(getEpisodeDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeDetail);
