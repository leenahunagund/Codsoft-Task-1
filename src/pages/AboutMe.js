import React from 'react';
import './aboutme.css';

function AboutMe() {
    return (
        <div style={{ padding: '10px', maxWidth: '900px', textAlign: 'center', marginTop: '80px', marginLeft: '350px', alignContent: 'center' }}>
            <h2>About Me</h2>
            <div class="shadow-lg custom-shadow p-4 mb-5 rounded aboutME" style={{ fontSize: '18px', border: 'solid 1px' }}>
                As a dedicated and enthusiastic 3rd-year Computer Science and Engineering student,
                I am constantly exploring the dynamic world of technology.
                My academic journey has equipped me with a strong foundation in programming,
                algorithms, and software development, while my hands-on projects have
                honed my skills in areas like web development, data structures, and machine learning.
                This portfolio is a reflection of my journey, showcasing the projects, skills,
                and experiences that define my growth as an aspiring software engineer.
                I am eager to contribute to innovative solutions and am continuously learning
                to stay at the forefront of technological advancements.
            </div>
            <br />
            <div style={{ fontSize: '18px', border: 'solid 1px',width:'880px',padding:'2px' }}>
                <h4>Skills:</h4>
                <ul style={{listStyle:'none',display:'flex',flexDirection:'row'}}>
                    <li class="lis">Python</li>
                    <li class="lis">C</li>
                    <li class="lis">Java</li>
                    <li class="lis">JavaScript</li>
                    
                    <li class="lis">DSA</li>

                    <li class="lis">MERN</li>
                        
                    <li class="lis">MySQL, Postgres</li>
                    <li class="lis">Git</li>
                    <li class="lis">ML</li>
                    <li class="lis">GenAI, Prompt, APIs</li>
                </ul>

            </div>
        </div>
    );
}

export default AboutMe;