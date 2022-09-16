export const ADD_QUOTE = "ADD_QUOTE";

export const GET_CHARACTER_DETAIL = "GET_CHARACTER_DETAIL";

export const EMPTY_CHARACTER_DETAIL = "EMPTY_CHARACTER_DETAIL";

export const GET_CHARACTERS = "GET_CHARACTERS";

export const GET_EPISODES = "GET_EPISODES";

export const EMPTY_EPISODE_DETAIL = "EMPTY_EPISODE_DETAIL";

export const GET_EPISODE_DETAIL = "GET_EPISODE_DETAIL";

export function addQuote() {
  return function (dispatch) {
    //fetchear la Api en la ruta de las quotes random
    return (
      fetch("https://www.breakingbadapi.com/api/quote/random")
        .then((res) => res.json())
        //despachar el objeto al reducer
        .then((json) => {
          dispatch({ type: ADD_QUOTE, payload: json[0] });
        })
    );
  };
}

//====================================//

export function getCharacters(query) {
  return function (dispatch) {
    //fetchear la Api en la ruta de las quotes random
    return (
      fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        .then((res) => res.json())
        //despachar el objeto al reducer
        .then((json) => {
          dispatch({ type: GET_CHARACTERS, payload: json });
        })
    );
  };
}

//===================================//
export function getCharacterDetail(num) {
  return function (dispatch) {
    //fetchear la Api en la ruta de las quotes random
    return (
      fetch(`https://www.breakingbadapi.com/api/characters/${num}`)
        .then((res) => res.json())
        //despachar el objeto al reducer
        .then((json) => {
          dispatch({ type: GET_CHARACTER_DETAIL, payload: json[0] });
        })
    );
  };
}
//====================================//

export function emptyCharacterDetail(num) {
  return function (dispatch) {
    dispatch({ type: EMPTY_CHARACTER_DETAIL });
  };
}
//====================================//
export function getEpisodes() {
  return function (dispatch) {
    return (
      fetch(`https://www.breakingbadapi.com/api/episodes`)
        .then((res) => res.json())
        //despachar el objeto al reducer
        .then((json) => {
          dispatch({ type: GET_EPISODES, payload: json });
        })
    );
  };
}
//====================================//

export function emptyEpisodeDetail() {
  return function (dispatch) {
    dispatch({ type: EMPTY_EPISODE_DETAIL });
  };
}
//====================================//

export function getEpisodeDetail(id) {
  return function (dispatch) {
    return (
      fetch(`https://www.breakingbadapi.com/api/episodes/${id}`)
        .then((res) => res.json())
        //despachar el objeto al reducer
        .then((json) => {
          dispatch({ type: GET_EPISODE_DETAIL, payload: json[0] });
        })
    );
  };
}
