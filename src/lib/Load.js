import React, {Component} from 'react';
import loadGif from '../img/load.gif' 

class Load extends Component {

  render() {
    return (
    <div className="row">
      <div className="col-lg-12" align="center">
        <img src={loadGif} alt="loading"/>
      </div>
    </div>
    );
  }
}

export default Load;
