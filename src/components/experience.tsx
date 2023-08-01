import React, { Component} from 'react'


class Experience extends Component {
    render() {
        return (
        <section id="experience">
            <div className="job">
            <h1>Experience</h1>
            <hr/>
                <h4>Backend Software Engineer, Mythical Games, Los Angeles CA. 01/2021 - Present</h4>
                <ul>
                    <li>Core contributor of SAGA, Mythical Games' EVM-compatible ERC20/ERC721 blockchain driven marketplace backend from inception to launch</li>
                    <li>Deliver, maintain and improve SDKs and APIs that wrap blockchain smart contracts for use in NFL Rivals and Nitro Nation mobile games</li>
                    <li>Successfully design, deliver and scale Kotlin and Golang microservices allowing the Mythos chain to become the third largest NFT blockchain by transaction volume</li>
                    <li>Assist in designing self healing, event driven services by implementing retries and idempotency in Kafka consumers</li>
                    <li>Design a safe, iterative metadata sorting algorithm to improve search preformance for Blankos Marketplace metadata</li>
                    <li>Assist in designing a bridging solution to transfer NFTs from Mythos chain to Ethereum</li>
                    <li>Extend chain execution and listening logic in Golang services that facilitate token mints, burns and transfers using OpenZeppelin features</li>
                    <li>Leverage Truffle and Web3.js to debug chain events and verify transactions</li>
                    <li>Scrape Prometheus metrics, design and generate Grafana dashboards to ensure quick identification of bugs during monitoring and on call duties</li>
                    <li>Work closely with infra ops to set up kubernetes and helm configurations with github actions to ensure smooth deployments</li>
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
                    <li>Improve metadata storage by implementing serialization during shut down procedures</li>
                    <li>Expand python scripting API feature to allow internal commands to be visable and recordable enabling user to script their geometric model designs</li>
                </ul>
            </div>

            <div className="job">
                <h4>Front End Developer, Integrated Teaching and Learning Lab, Boulder CO. 01/2018 – 01/2019</h4>
                <ul>
                    <li>Lead designer and developer of CU Boulder’s <a href="https://itlp.colorado.edu/">Integrated Teaching and Learning Lab website</a></li>
                </ul>
            </div>

            <div className="job">
                <h4>Software Development Intern, Circadence Corporation, Boulder CO. 05/2018 – 08/2018</h4>
                <ul>
                    <li>Extend API for cyber simulation application Project Ares (Django, Python and Flask)</li>
                    <li>Extend API to trigger explotation functionality on target machines using Kali Linux and Metasploit</li>
                </ul>
                
                <h4>
                    <a href="./images/ResumeThomasPayne.pdf" download>Download Resume Here</a>
                </h4>
            </div>
        </section>
        )
    }
}

export default Experience;