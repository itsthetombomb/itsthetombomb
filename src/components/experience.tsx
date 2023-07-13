import React, { Component} from 'react'


class Experience extends Component {
    render() {
        return (
        <section id="experience">
            <h2>Experience</h2>
            <div className="job">
                <h4>Backend Software Engineer, Mythical Games, Los Angeles CA. 01/2021 - Present</h4>
                <ul>
                    <li>Core contributor of an EVM blockchain driven marketplace backend from inception to launch</li>
                    <li>Own idempotent Kotlin microservices and medium sized features that facilitate item and token operations</li>
                    <li>Assist in designing a bridging solution to transfer items from in house blockchain to Ethereum</li>
                    <li>Facilitate design for in game token mints, burns, and transfers with OpenZeppelin features such as Permit</li>
                    <li>Extend execution and chain listening logic in Golang services that handle on-chain operations</li>
                    <li>Assist in custodial key management design with third party systems such as Vault and FusionAuth</li>
                    <li>Scrape Prometheus metrics and generate Grafana dashboards, monitor and participate in on call duties</li>
                    <li>Leverage Truffle and Web3.js to debug chain events and verify transactions</li>
                    <li>Work closely with infra ops to set up helm configurations and github actions to ensure smooth deployments</li>
                    <li>Write unit and integration tests to validate end to end workflows and avoid regressions</li>
                    <li>Create UML diagrams to express ideas and data flow through a variety of distributed services and data stores</li>
                </ul>
            </div>

            <div className="job">
                <h4>Software Engineer, Northrop Grumman, San Diego CA. 09/2019 – 12/2021</h4>
                <ul>
                    <li>Full-Stack agile development of data driven web app (C# .NET, Postgres, React)</li>
                    <li>CSCI Lead and application owner for JSF subdivision, ranked top performer</li>
                    <li>Created and edited development documents, analyzed and scoped requirements</li>
                </ul>
            </div>

            <div className="job">
                <h4>Software Development Intern, ANSYS, Boulder CO. 05/2019 – 08/2019</h4>
                <ul>
                    <li>Mechanical CAD Developer, extended 3D modeling engine feature set for SpaceClaim (C# .NET, WPF)</li>
                </ul>
            </div>

            <div className="job">
                <h4>Front End Developer, Integrated Teaching and Learning Lab, Boulder CO. 01/2018 – 01/2019</h4>
                <ul>
                    <li>Lead designer and developer of CU Boulder’s Integrated Teaching and Learning Lab website</li>
                </ul>
            </div>

            <div className="job">
                <h4>Software Development Intern, Circadence Corporation, Boulder CO. 05/2018 – 08/2018</h4>
                <ul>
                    <li>Extend API for cyber simulation application Project Ares (Django, Python and Flask)</li>
                </ul>
            </div>

            <h6>Download resume here</h6>
        </section>
        )
    }
}

export default Experience;