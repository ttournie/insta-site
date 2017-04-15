import React from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div className="container">
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default App;
