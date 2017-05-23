import React, { Component } from 'react';

class About extends Component{
    render(){
        return(
        <section id="about" className="about-area section-big">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="about-text">
                            <h3>We are creative</h3>
                            <p>A wonderful serenity has taken possession of my entire soul, like these all sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exqui site sense of mere tranquil existence, that I neglect my talents.</p>
                            <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentiallyIt has survived not only five electronic but also the leap into electronic typesetting, typesetting, remaining essentiallyIt has survived not only five typesetting industry.</p>
                            <a href="" className="btn">Read more</a>
                        </div>
                    </div>
                    <div className="col-md-6 about-img text-center">
                      <img src="http://demo.coderspoint.net/web-bean/bizniz2/assets/img/about/about.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
        )
    }
}
 export default About;