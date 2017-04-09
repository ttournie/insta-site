import React from 'react';
import PictureList from '../instagram/PictureList'

class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
      <h1>Home Page</h1>

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
      <PictureList/>
      </div>
    )
  }
}

export default HomePage;
