import React, { useEffect } from "react";
import { emptyCharacterDetail, getCharacterDetail } from "../../actions";
import { connect } from "react-redux";
import Spinner from "../Spinner";
import "./CharacterDetail.css";

const CharacterDetail = (props) => {
  const id = props.match.params.id;
  useEffect(() => {
    props.emptyCharacterDetail();
    props.getCharacterDetail(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="CharacterDetail">
      <h1>Character Details</h1>
      {props.characterDetail ? (
        <div>
          <h3>{props.characterDetail.name}</h3>

          <img
            className="CharacterDetail__Photo"
            src={props.characterDetail.img}
            alt=""
          />
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
    emptyCharacterDetail: () => dispatch(emptyCharacterDetail()),
    getCharacterDetail: (id) => dispatch(getCharacterDetail(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);
