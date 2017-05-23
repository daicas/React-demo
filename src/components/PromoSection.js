import React, { Component } from 'react';

class PromoSection extends Component{
    render(){
        return(
          <div id="promo-section" className="promo-section section-big">
            <div className="container">
                <div class="row">
                    <div className="col-md-4">
                    <div className="promo-box">
                            <i className="fa fa-star"></i>
                            <h3>Unique design</h3>
                            <p>Beautiful cinematic designs optimized for all screen sizes and types. Compatible with Retina high pixel density displays.</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="promo-box">
                            <i className="fa fa-gears"></i>
                            <h3>FULLY RESPONSIVE</h3>
                            <p>Featuring trending modern web standards. Clean and easy framework design for worry and hassle free customizations.</p>
                    </div>
                    </div>
                    <div className="col-md-4">
                    <div className="promo-box three">
                            <i className="fa fa-headphones"></i>
                            <h3>24/7 Support</h3>
                            <p>Quick response with regular updates. Each update will include great new features and enhancements for free.</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
 export default PromoSection;