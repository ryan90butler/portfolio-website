import React, { Component } from 'react';
import './MyPark.css';
import { Carousel } from 'react-responsive-carousel';
import myPark from '../../Assets/projects/myPark.png';
import myPark1 from '../../Assets/projects/myPark1.png';
import myPark2 from '../../Assets/projects/myPark2.png';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class MyPark extends Component {
  render() {
    return (
      <Carousel showArrows={true} autoPlay={false} interval='5000' infiniteLoop={true}>
      <div>
          <img src={myPark} />
          <p className="legend">Code Bar landing page, no login required for assessments</p>
      </div>
      <div>
          <img src={myPark1} />
          <p className="legend">CSs</p>
      </div>
      <div>
          <img src={myPark2} />
          <p className="legend">CSs</p>
      </div>
  </Carousel>
    );
  }
}

export default MyPark;