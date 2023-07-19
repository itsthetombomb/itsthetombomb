import React, { Component } from 'react';
import Header from './components/header';
import Nav from './components/nav';
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
        <Nav/>
        <div className="content">
          <Experience/>
          <Skills/>
          <Projects/>
          <Education/>
          <About/>
        </div>
      </div>

    )
  }
}

export default Home;