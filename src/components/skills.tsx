import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <section id="skills">
                <h2>Skills</h2>
                <hr/>
                <ul>
                    <li>Proficient: Kotlin, Java, C#, Spring Boot, Ktor</li>
                    <li>Familiar: Golang, Solidity, Javascript, Truffle</li>
                    <li>Cloud: Google Cloud, AWS</li>
                    <li>Docker, Kubernetes, Helm, Github Actions</li>
                    <li>Event sourced and event driven architecture: Kafka, gRPC</li>
                    <li>Postgres, Redis, PineconeDb</li>
                    <li>SDK and API development</li>
                    <li>Prometheus, Grafana</li>
                    <li>Web App Development: React, Node.js, Web3.js</li>
                    <li>Full stack debugging in all environments</li>
                    <li>TestContainers, Jupiter, Mockito</li>
                    <li>Plantuml diagramming</li>
                </ul>
            </section>
        )
    }
}

export default Skills;