export const instagramReducer = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PICTURES_SUCCESS':
          return action.pictures;
    default:
          return state;
  }
};
