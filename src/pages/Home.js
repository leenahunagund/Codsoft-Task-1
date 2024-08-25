import React from 'react';
import './aboutme.css';

function Homepage() {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h3 style={{ textAlign: 'center' }}>Welcome to My Portfolio</h3>
            <h4 style={{ marginTop: '100px' }}>Hi! , I'm Leena Hunagund</h4>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', maxWidth: '900px' }}>
                <div className="intro" style={{ fontSize: '18px'}}>
                <br /><br />
                    A Current 3rd-year Computer Science and Engineering student with a
                    passion for software development and technology. <b> This portfolio
                    highlights my projects and skills spanning various fields, including full stack web development,
                    machine learning, and software engineering.</b>
                    <br/>Each project has strengthened my technical expertise
                    and fueled my passion for innovation, allowing me to
                    continuously grow and refine my skills, reflecting my dedication to
                    learning and growing as a future software engineer.
                    <br />
                </div>

                <div>
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGsf-jWgc9qbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1683444404298?e=1729728000&v=beta&t=I-WoduOSIGwkwfMvBCWO1N7dvd3eWgorbBMzcI72K8E"
                        alt="Leena Hunagund"
                        style={{ height: '200px', width: '200px', marginLeft: '50px', borderRadius:'100px' }}
                    /></div>
            </div>
            <br /><br /><br />
            <div style={{fontFamily:'-moz-initial',fontSize:'20px'}}>
                <i>"The Analytical Engine has no pretensions whatever to
                    originate anything. It can do whatever we know how to order
                    it to perform. It can follow analysis; but it has no power
                    of anticipating any analytical relations or truths.
                    Its province is to assist us to making available what
                    we are already acquainted with."</i>
                <br />
                <i><b>- Lady Ada Lovelace</b></i>
            </div>
        </div>
    );
}

export default Homepage;
