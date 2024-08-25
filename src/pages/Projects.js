import React from 'react';
import './aboutme.css';

function Projects() {
    return (
        <div className='main-class' style={{ display: 'flex', flexDirection: 'row' }}>
            <div className="projects " style={{ maxWidth: '50%', padding: '10px' }}>
                <h2 class="project">Projects</h2>
                <hr style={{width:'120px'}}/>
                <div style={{ marginTop: '15px', marginBottom: '30px' }}>
                    <h4 class="titles">Argus</h4>
                    <h6>Python, ReactJS, NodeJS, GenAI, Azure Functions APIs, Supabase Auth.</h6>
                    <p>
                        <ul>
                            <li>A Web Extension that detects phishing and scam instances in emails & SMS, checks for dark patterns on websites especially
                                in e-commerce websites with 96%.+ accuracy. | Hackathon Project</li>
                        </ul>
                    </p>
                </div>
                <div style={{ marginTop: '15px', marginBottom: '30px' }}>
                    <h4 class="titles">Seva Sethu</h4>
                    <h6>FlutterFlow, Supabase, Buildship, Azure Functions</h6>
                    <p>
                        <ul>
                            <li>A hyperlocalised and interconnected grievances addressal system contains a web app that uses AI and ML, inorder to list
                                out the local problems faced by the residents through satellite imaging and detection. | Hackathon Project</li>
                        </ul>
                    </p>
                </div>
                <div style={{ marginTop: '15px', marginBottom: '30px' }}>
                    <h4 class="titles">Online Payments Fraud Detection</h4>
                    <h6>Machine Learning, Python, Jupyter Notebook</h6>
                    <p>
                        <ul>
                            <li>Training a Supervised Machine Learning Model for detecting fraudulent and non-fraudulent payments. Designed,
                                Implemented and tested Linear Regression Model with accuracy 95%+.</li>
                        </ul>
                    </p>
                </div>
                <div style={{ marginTop: '15px', marginBottom: '30px' }}>
                    <h6>Other projects: YouTube Landing Page, Amazon.com clone using HTML, CSS, JavaScript.</h6>
                </div>
            </div>
            <div className="d-flex" style={{ height: "1000px" }}>
                <div className="vr"></div>
            </div>
            <div className='box2' style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='experience' style={{ padding: '10px' }}>
                    <br /><br />
                    <h4 >Experience</h4>
                    <h6 class="titles">Machine Learning Intern, Intrainz Innovation</h6>
                    <h6> Remote Sept 2023 - Nov 2023</h6>
                    <ul>
                        <li>Industrial Training program with hands-on experience of coding, training and testing various models along with the
                            implementation of various libraries viz. Pandas, NumPy, SKLearn, Matplotlib etc.</li>
                        <li>Internship Completion, Industrial Training, LoR</li>
                    </ul>
                </div>
                <hr class="section-title-hr" style={{padding:'2px;'}} />
                <div className='certifications' style={{padding:'7px'}}>
                    <h4 class="titles">Certifications</h4>
                    <ul>
                        <li>Joy Of Computing using Python NPTEL- SWAYAM</li>
                        <li>Managing Kubernetes on Google Cloud</li>
                        <li>DevOps Essentials</li>
                    </ul>

                </div>
            </div>
        </div>
    );
}

export default Projects;