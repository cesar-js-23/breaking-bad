import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCharacters } from "../../actions";
import Spinner from "../Spinner";

import "./Characters.css";

const Characters = (props) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchData(query) {
      await props.getCharacters(query);
    }
    fetchData(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleChange = (q) => {
    setQuery(q);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Characters">
      <h1>List of Characters</h1>

      <section>
        <form className="form-control" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      </section>

      <ul className="Characters__list">
        {/*El loading le va a dar un efecto de carga hasta que la peticion de la API llegue, no tocar!.*/}
        {props.characters ? (
          props.characters.map((c) => (
            <li key={c.char_id}>
              <Link to={`/characters/${c.char_id}`}>{c.name}</Link>
            </li>
          ))
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
    getCharacters: (query) => dispatch(getCharacters(query)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
