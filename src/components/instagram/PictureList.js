import React from 'react';
import { fetchPictures } from '../../actions/instagramActions';
import { fetchTags } from '../../actions/instagramActions';
import { connect } from 'react-redux';
import Search from '../common/Search.js';

class PictureList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchPictures();
  }

  submitTags(tags) {
    this.props.fetchTags(tags);
  }

  render() {
    return (
      <div className="PictureList">
        {/*<Search submitTags={this.submitTags.bind(this)}/>*/}
        {this.props.pictures.map((picture,key) =>
          <div className="Picture" key={key}>
            <img src={picture.images.standard_resolution.url}/>
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

// Maps actions to props
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPictures: pictures => dispatch(fetchPictures()),
    fetchTags: tags => dispatch(fetchTags(tags))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(PictureList);
