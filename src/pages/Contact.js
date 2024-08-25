import React from 'react';

function Contact() {
    return (
        /*<div classNameName="contact">
            <h2>Contact Me</h2>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send</button>
            </form>
        </div>*/
        <div className="card" style={{marginTop:'50px',maxWidth:'500px',minHeight:'500px',marginLeft:'500px'}}>
        <form className='shadow-lg p-3 rounded' style={{minHeight:'600px'}}>
            <div className="form-group" style={{margin:'10px'}}>
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
            </div>
            <div className="form-group" style={{margin:'10px'}}>
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
            </div>
            <textarea placeholder="Message" style={{margin:'5px'}}></textarea>
            <div className="form-check" style={{margin:'10px'}}>
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Send me further updates</label>
            </div>
            <button type="submit" className="btn btn-primary" style={{margin:'5px'}}>Submit</button>
            <h6>Thank you! </h6>
        </form>
        </div>
    );
}

export default Contact;