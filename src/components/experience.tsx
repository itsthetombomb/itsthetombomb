import React, { Component} from 'react'


class Experience extends Component {
    render() {
        return (
        <section id="experience">
            <div className="job">
            <h1>Experience</h1>
            <hr/>
                <h4>Backend Software Engineer, Mythical Games, Los Angeles CA. 01/2022 - 07/2023</h4>
                <ul>
                    <li>Core contributor of SAGA, Mythical Games' EVM-compatible ERC20/ERC721 blockchain driven marketplace backend from inception to launch (third largest NFT blockchain by transaction volume)</li>
                    <li>Maintain and improve SDKs and APIs that wrap blockchain smart contracts for use in NFL Rivals and Nitro Nation mobile games</li>
                    <li>Design, deliver and scale self healing Kotlin and Golang microservices by implementing retries and idempotency in Kafka consumers</li>
                    <li>Write a safe, iterative metadata sorting algorithm to improve search performance for Blankos Marketplace metadata</li>
                    <li>Assist in designing a bridging solution to transfer NFTs from Mythos chain to Ethereum</li>
                    <li>Extend and debug chain execution and listening logic in Golang services that facilitate token mints, burns and transfers using OpenZeppelin, Truffle and Web3.js</li>
                    <li>Scrape Prometheus metrics and generate Grafana dashboards to ensure quick identification of bugs during monitoring and on call duties</li>
                    <li>Work with infra ops to set up dockerization of services for kubernetes, helm configurations and github actions to ensure smooth deployments</li>
                    <li>Create UML diagrams to express ideas and data flow through a variety of distributed services and data stores</li>
                    <li>Write unit and integration tests to validate end to end workflows and avoid regressions</li>
                </ul>
            </div>

            <div className="job">
                <h4>Software Engineer, Northrop Grumman, San Diego CA. 09/2019 – 12/2021</h4>
                <ul>
                    <li>Full-Stack agile development of data driven web app within JP2008 program (C# .NET, Postgres, React)</li>
                    <li>Lead developer and application owner for sat com system within JSF subdivision, ranked top performer</li>
                    <li>Resolve networking protocol bugs enabling system to integrate with hardware</li>
                    <li>Implement unit testing to satisfy 100% code coverage requirements</li>
                    <li>Created and edited development documents, analyzed and scoped requirements</li>
                    <li>Possess Secret Clearance</li>
                </ul>
            </div>

            <div className="job">
                <h4>Mechanical CAD Software Engineer, ANSYS, Boulder CO. 05/2019 – 08/2019</h4>
                <ul>
                    <li>Expand python scripting API to enable users to script and record their geometric model designs for 3D modeling engine SpaceClaim (C# .NET, WPF)</li>
                    <li>Optimize metadata storage by implementing serialization during shut down and start up procedures</li>
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
                    <li>Develop cyber simulation application Project Ares (Django, Python and Flask)</li>
                    <li>Extend API to trigger exploitation functionality on target machines using Kali Linux and Metasploit</li>
                </ul>
                
                <h4>
                    <a href="https://itsthetombomb.github.io/ResumeThomasPayne.pdf" target="_blank" download>Download Resume Here</a>
                </h4>
            </div>
        </section>
        )
    }
}

export default Experience;