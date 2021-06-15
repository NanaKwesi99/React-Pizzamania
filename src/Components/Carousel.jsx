import React from 'react';
import images from '../images/ipp.jpg';
import images2 from '../images/e.jpg';

const Carousel = () => {
    return (
        <div className="container-fluid">
        <div className="row">
            <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
      {/* <!-- Indicators --> */}
      <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
    
      {/* <!-- Wrapper for slides --> */}
      <div className="carousel-inner carousel-content" role="listbox">
        <div className="item active">
          <img className="imgstyle" src={images} alt="pizza" />
        </div>
        <div className="item">
          <img className="imgstyle" src={images2} alt="pizza" />
        </div>
    
      </div>
    </div>
        </div>
    </div>
    );
}

export default Carousel;
