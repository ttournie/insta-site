import React from 'react';
import { fetchPictures } from '../../actions/instagramActions';
import { connect } from 'react-redux';


class PictureList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.dispatch(fetchPictures());
  }

  render() {
    return (
      <div className="PictureList">
        {this.props.pictures.map((picture,key) =>
          <div key={key}>
            {picture.link}
          </div>
        )
        }
      </div>
    )
  }
}

// Maps state from store to props
const mapStateToProps = (state, ownProps) => {
  return {
    pictures: state.pictures
  }
};

export default connect(mapStateToProps)(PictureList);
