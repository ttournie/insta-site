import InstagramAPI from 'instagram-api';
import config from '../../config.js';

export const fetchPictures = () => {
  return (dispatch) => {
    var accessToken = config.access_token;
    var instagramAPI = new InstagramAPI(accessToken);
    // Make the request.
    instagramAPI.userSelfMedia()
    .then(function(result) {
      console.log(result);
      dispatch({
      type: 'FETCH_PICTURES_SUCCESS',
      pictures: result.data
      })
    }, function(err){
        console.log(err);
    });
  }
}
