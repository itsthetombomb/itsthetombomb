import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <h2>Projects</h2>
                <hr/>

                <h4>AnIdea</h4>
                <p>Personal design agency that assists in generating an MVP from your idea</p>
                <ul>
                    <li>
                    <a href="https://thpa9933.github.io/AnIdea/#/">AnIdea</a>
                    </li>
                </ul>

                <h4>AI Application</h4>
                <p>SpringBoot distributed AI application using the OpenAI API, vector databases and prompt engineering techniques. Repo is currently private.</p>
                
                <h4>Decntralized Application Development</h4>
                <p>Write a variety of small apps to familiarize myself with blockchain related tools and processes.</p>
                <ul>
                    <li><a href="https://github.com/thpa9933/crowdCoin_dapp">CrowdCoin</a></li>
                    <li><a href="https://github.com/thpa9933/lottery_Dapp">Lottery</a></li>
                </ul>

                <h4>Misc</h4>
                <p>A variety of other apps can be found <a href="https://github.com/thpa9933?tab=repositories">Here</a></p>
            </section>
        )
    }
}

export default Projects;