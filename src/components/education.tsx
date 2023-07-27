import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <section id="education">
                <h2>Education, Certifications, Research</h2>
                <hr/>
                <h4>University of Colorado Boulder, Boulder CO. 2019</h4>
                <ul>
                    <li>B.S Creative Technology and Design, 3.7</li>
                    <li>Minors: Computer Science, Architecture</li>
                </ul>

                <h4>Certifications</h4>
                <ul>
                    <li>Udemy Certification: Kubernetes and Docker, The Container Masterclass</li>
                    <li>Udemy Certification: Ethereum and Solidity, The Complete Developers Guide</li>
                </ul>

                <h4>Reserach</h4>
                <ul>
                    <li>Mobile and Networked Systems Laboratory, Boulder CO. 01/2019 – 08/2019</li>
                </ul>
                <h4>Publication</h4>
                <ul>
                    <li>Painometry, Wearable and Objective Quantification System for Acute Postoperative Pain Published ACM</li>
                </ul>
            </section>
        )
    }
}

export default Education;