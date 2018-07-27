import React, { Component } from 'react';
import './CodeBar.css';
import { Carousel } from 'react-responsive-carousel';
import codeBar from '../../Assets/projects/codebar.png';
import codeBar1 from '../../Assets/projects/codebar1.png';
import codeBar2 from '../../Assets/projects/codebar2.png';
import codeBar3 from '../../Assets/projects/codebar3.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class CodeBar extends Component {
  render() {
    return (
      <Carousel showArrows={true} autoPlay={false} interval='5000' infiniteLoop={true}>
      <div>
          <img src={codeBar} />
          <p className="legend">Code Bar landing page, no login required for assessments</p>
      </div>
      <div>
          <img src={codeBar1} />
          <p className="legend">CSs</p>
      </div>
      <div>
          <img src={codeBar3} />
          <p className="legend">CSs</p>
      </div>
      <div>
          <img src={codeBar2} />
          <p className="legend">CSs</p>
      </div>
  </Carousel>
    );
  }
}

export default CodeBar;