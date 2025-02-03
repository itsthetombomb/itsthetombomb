import React, { Component } from 'react';

class Projects extends Component {
    render() {
        return (
            <section id="projects">
                <h2>Projects</h2>
                <hr/>

                <h4>AnIdea</h4>
                <p>Personal design agency that assists in generating an minimum viable product from your idea</p>
                <ul>
                    <li>
                    <a href="https://thpa9933.github.io/AnIdea/#/">AnIdea</a>
                    </li>
                </ul>

                <h4>ABA Pathway, CTO</h4>
                <p>Build and distribute an IOS and Android application connecting Autism patients to Board Certified Behavior Analysts</p>
                <p> Lead all project initiatives with a consumer-focused approach, defining and delivering requirements to the Flutter development team to ensure
                end-user-driven solutions.</p>
                <p>Architect and own HIPAA compliant AWS cloud infrastructure using ECS and Fargate, with Github Action CI/CD integrations.</p>

                <h4>Ask Me Questions AI</h4>
                <p>SaaS product focusing on conversational AI technology to handle private data built on Spring boot, React, PGVector and OpenAI.</p>
                
                <h4>Decentralized Application</h4>
                <p>Write a variety of small apps to familiarize myself with blockchain related tools and processes</p>
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