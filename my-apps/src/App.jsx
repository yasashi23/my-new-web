import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Container} from './style/style.styled';
import Nav from './component/nav';
import Att from './component/att';
import About from './component/about';
import Skill from './component/skill';
import Otskill from './component/otSkill';
import MyProject from './component/mPro';
import What from './component/wC';
import Footer from './component/footer';



class App extends React.Component{

   render() {
    return (
      <Container col='red' dis='flex' ali="center" fD="column">
      
      <Nav comp='nav' colC='red'/>
      <Att/>
      {/* <About/>
      <Skill/>
      <Otskill/>
      <MyProject/>
      <What/>
      <Footer/> */}
      </Container>
     );
  }

}
export default App;
