import React, { Component } from 'react';
import Header from './components/header';
import Experience from './components/experience'
import Skills from './components/skills'
import Education from './components/education'
import Projects from './components/projects';
import About from './components/about';
import "./App.css"

class Home extends Component {
  render() {
    return (
      <div className="main">
        <Header/>    
        <div className="content">
          <Experience/>
          <Skills/>
          <Education/>
          <Projects/>
          <About/>
        </div>
      </div>

    )
  }
}

export default Home;