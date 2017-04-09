import React from 'react';
import {Link} from 'react-router';

const App = (props) => {
  return (
    <div className="container">
      <div className="menu">
        <ul className="nav navbar-nav">
            <li><Link to="/">Home</Link></li>
        </ul>
      </div>
      {/* Each smaller components */}
      {props.children}
    </div>
  );
};

export default App
