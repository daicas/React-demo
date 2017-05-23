import React, { Component } from 'react';

class Skills extends Component{
    render(){
        return(
          <div id="skills" className="skill-area section-big">
        <div className="container">

            <div className="row">

                <div className="col-md-6 col-sm-6">

                    <h3>Our Work Process</h3>

                    <ul className="nav nav-tabs">
                        <li className="">
                            <a data-toggle="tab" href="#tab1" aria-expanded="false">Planning</a>
                        </li>
                        <li className="">
                            <a data-toggle="tab" href="#tab2" aria-expanded="false">Research</a>
                        </li>
                        <li className="active">
                            <a data-toggle="tab" href="#tab3" aria-expanded="true">Target</a>
                        </li>
                    </ul>

                    <div className="tab-content">


                        <div id="tab1" className="tab-pane fade">
                            <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lorem ipsum dolor sit amet laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lincidunt ut laoreet dolore magna aliquam erasit amet magna.</p>
                        </div>


                        <div id="tab2" className="tab-pane fade">
                            <p>Coctetuer adipiscing elit, sed diam nonummy nibh euismod consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna adipiscing. Lincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet magna.</p>
                        </div>


                        <div id="tab3" className="tab-pane fade active in">
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat aliquam erat volutpat consectetuer sit amet magna adipiscing. Lincidunt ut laoreet dolore magna aliquam erat volutpat consectetuer sit amet adipiscing.</p>
                        </div>

                    </div>

                </div>
                <div className="col-md-6 col-sm-6">

                    <h3>Our Skills</h3>
                    <div className="skill-bar-container">
                        <h4>Monitoring</h4>
                        <div className="skill-progress-bar">
                            <span data-percent="90"></span>
                        </div>

                    </div>


                    <div className="skill-bar-container">
                        <h4>Branding</h4>
                        <div className="skill-progress-bar">
                            <span data-percent="80"></span>
                        </div>

                    </div>


                    <div className="skill-bar-container">
                        <h4>Supporting</h4>
                        <div className="skill-progress-bar">
                            <span data-percent="85"></span>
                        </div>

                    </div>


                </div>

            </div>


        </div>
    </div>
        )
    }
}
 export default Skills;