import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import Slider from './components/Slider';
import About from './components/About';
import PromoSection from './components/PromoSection';

class App extends Component {
 render(){
     return(
         <div id="home">
            <MenuBar />
            <Slider />
            <PromoSection />
            <About />

         </div>

     )
 }
}

export default App;
