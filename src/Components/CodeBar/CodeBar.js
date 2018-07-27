import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import codeBar from '../../Assets/projects/codebar.png';
import codeBar1 from '../../Assets/projects/codebar1.png';
import codeBar2 from '../../Assets/projects/codebar2.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './CodeBar.css'

class CodeBar extends Component {
  render() {
    return (
        // <div className="CodeBar">
      <Carousel showArrows={true} autoPlay={false} interval='5000' infiniteLoop={true}>
      <div>
          <img src={codeBar} />
          <p className="legend">Code Bar landing page</p>
      </div>
      <div>
          <img src={codeBar1} />
          <p className="legend">Assessment selection page</p>
      </div>
      <div>
          <img src={codeBar2} />
          <p className="legend">Code Bar test suite</p>
      </div>
  </Carousel>
//   </div>
    );
  }
}

export default CodeBar;