import Link from 'next/link';
import React from 'react';
import Header from '../header/Header';

////https://docs.google.com/spreadsheets/d/1V8csdlha79zmXLcz0nmZFakCUNIJEw74VTBZ6QlKWu4/edit#gid=258472031

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
        
            <section className='bg-dark col-12 justify-content-center' >
            <Header/>
            <div className='container  d-flex justify-content-center' >
               

                
                <div className='bg-light col-12 col-md-10 col-lg-6' style={{border: '0.5px solid #333', borderRadius:"4px", marginTop:"4%", marginBottom:"5%"}}>
               
                <form style={{margin:"4%"}}>
                    <div className='container container d-flex justify-content-center' >
                        <span style={titleStyle}>Contact Form</span>
                    </div>
                    <div className="form-group">
                        <label >Name*</label>
                        <input type="text" autoComplete="off" required className="form-control" id="exampleInputEmail1" placeholder="Enter name">
                        </input>
                    </div>
                    <div className="form-group">
                        <label >Email address*</label>
                        <input type="email" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                        </input>
                        <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label >Topic*</label>
                        <input autoComplete="off" className="form-control" id="exampleInputPassword1" required placeholder="Write Topic..." />
                    </div>
                    <div className="form-group">
                        <label >Message*</label>
                        <textarea  className="form-control" required id="exampleInputPassword1" placeholder="Write here..." />
                    </div>
                    <div className="form-check" style={{marginBottom:"2%"}}>
                        <input type="checkbox" autoComplete="off" required  className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label"  >Accept the conditions from <Link href="/privacy" ><a>Privacy</a></Link>  and  <Link href="/terms" ><a>Terms</a></Link> </label>
                    </div>
                    <button type="submit" className="btn btn-info">Submit</button>
                </form>
                
                </div>
            </div>
           
            </section>

        </>
    )
}
