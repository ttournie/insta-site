import axios from "axios";

export const fetchPictures = () => {
  return (dispatch) => {
    // Call express server to get the Data (and avoid CORS);
    axios.get('http://localhost:8080/pictures')
    .then((response) => {
      dispatch({
      type: 'FETCH_PICTURES_SUCCESS',
      pictures: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
}

export const fetchTags = (tags) => {
  console.log('TAGS');
  return (dispatch) => {
    axios.get('http://localhost:8080/tags', {
      params: {
              tags: tags,
            }
    })
    .then((response) => {
      dispatch({
        'type': 'FETCH_TAGS_SUCCESS',
        pictures: response.data
      })
    })
    .catch((error) => {
      console.log(error);
    })
  }
}
