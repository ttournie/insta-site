import React from 'react';
import PictureList from '../instagram/PictureList'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Picture list</h1>
      <PictureList/>
      </div>
    )
  }
}

export default HomePage;
