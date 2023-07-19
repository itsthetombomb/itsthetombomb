import React, { Component } from 'react';


class Nav extends Component {
    render() {

        function scrollTo(id: string) {
            document.getElementById(id)?.scrollIntoView({behavior: "smooth"});
        } 

        return(
            <div id="nav">
            <li onClick={() => scrollTo('experience')}>Experience</li>
            <li onClick={() => scrollTo('skills')}>Skills</li>
            <li onClick={() => scrollTo('projects')}>Projects</li>
            <li onClick={() => scrollTo('education')}>Education</li>
            <li onClick={() => scrollTo('about')}>About</li>
            </div>
        )
    }
}

export default Nav;