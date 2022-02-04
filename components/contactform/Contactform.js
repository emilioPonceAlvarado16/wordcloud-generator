import React from 'react';
import Header from '../header/Header';
export default function Contactform() {
    const titleStyle={
        display: "block",
        fontFamily: "verdana",
        fontSize: "39px",
        color: "#333333",
        lineHeight: "1.2",
        textAlign: "center",
        paddingBottom: "30px",
        fontWeight:"bold"
    }
    return (
        <>
        
            <section className='bg-dark' >
            <div className='container  d-flex justify-content-center' >
                <Header/>
                <div className='bg-light col-11 col-md-5 col-lg-5' style={{border: '0.5px solid #333', borderRadius:"4px", marginTop:"8%", marginBottom:"5%"}}>
                <form style={{marginBottom:"5%"}}>
                    <div className='container container d-flex justify-content-center' >
                        <span style={titleStyle}>Contact Form</span>
                    </div>
                    <div className="form-group">
                        <label >Name*</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Enter name">
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address*</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </input>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                   
                    <div className="form-group">
                        <label for="exampleInputPassword1">Message</label>
                        <textarea  className="form-control" id="exampleInputPassword1" placeholder="Write here..." />
                    </div>
                    <div className="form-check" style={{marginBottom:"2%"}}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Accept the conditions from </label>
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
                
                </div>
            </div>
           
            </section>

        </>
    )
}
