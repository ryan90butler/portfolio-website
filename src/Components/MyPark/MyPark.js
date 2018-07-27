import React, { Component } from 'react';
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
          <p className="legend">MyPark login view</p>
      </div>
      <div>
          <img src={myPark1} />
          <p className="legend">MyPark dashboard view</p>
      </div>
      <div>
          <img src={myPark2} />
          <p className="legend">MyPark detail view</p>
      </div>
  </Carousel>
    );
  }
}

export default MyPark;