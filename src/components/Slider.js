import React, { Component } from 'react';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';

class Slider extends Component{
   constructor(props) {
        super(props);
    }
    onSelect= (active,direction)=>{
        console.log(`active=${active} && direction=${direction}`);
    }
    render() {
      return(
        <div id="slider">
          <React_Bootstrap_Carousel
            indicators={false}
            animation={true}
            leftIcon={<img src="http://demo.coderspoint.net/web-bean/bizniz2/assets/img/left-arrow.png" alt="" />}
            rightIcon={<img src="http://demo.coderspoint.net/web-bean/bizniz2/assets/img/right-arrow.png" alt="" />}
            onSelect={this.onSelect}
            className="carousel slide carousel-fade">

                <div className="item active slide1">
                    <div className="table">
                        <div className="table-cell">
                            <div className="intro-text">
                                <h2 data-animation="animated fadeInDown">Welcome To Our Studio!</h2>
                                <h1 data-animation="animated fadeInDown">It's Nice To Meet You</h1>
                                <a href="#" className="btn btn-trnsp" data-animation="animated fadeInDown">Tell Me More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item slide2">
                    <div className="table">
                        <div className="table-cell">
                            <div className="intro-text">
                                <h2 data-animation="animated fadeInDown">Welcome To Our Office!</h2>
                                <h1 data-animation="animated fadeInDown">We Want To Meet You</h1>
                                <a href="#" className="btn btn-trnsp" data-animation="animated fadeInDown">Tell Me More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="item slide3">
                    <div className="table">
                        <div className="table-cell">
                            <div className="intro-text">
                                <h2 data-animation="animated fadeInDown">Welcome To Our Home!</h2>
                                <h1 data-animation="animated fadeInDown">Let's Start Walking</h1>
                                <a href="#" className="btn trnsp" data-animation="animated fadeInDown">Tell Me More</a>
                            </div>
                        </div>
                    </div>
                </div>

          </React_Bootstrap_Carousel>
        </div>
      )
    }
}
 export default Slider;