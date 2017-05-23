import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import Slider from './components/Slider';
import About from './components/About';
import PromoSection from './components/PromoSection';
import Action from './components/Action';
import Skills from './components/Skills';
import Services from './components/Services';
import Work from './components/Work';

class App extends Component {
 render(){
     return(
         <div id="home">
            <MenuBar />
            <Slider />
            <PromoSection />
            <About />
            <Action />
            <Skills />
            <Services />
            <Work />
         </div>

     )
 }
}

export default App;
