import Link from 'next/link';
import React from 'react';
import Header from '../header/Header';
import { set, useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
import Thanks from '../thanks/Thanks';
//https://sheetdb.io/api/v1/74826f4n6xvly
export default function Contactform() {
    const { register, handleSubmit, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [IsSent, setIsSent] = useState(false);

    const titleStyle = {
        display: "block",
        fontFamily: "verdana",
        fontSize: "39px",
        color: "#333333",
        lineHeight: "1.2",
        textAlign: "center",
        paddingBottom: "30px",
        fontWeight: "bold"
    }
    const processData = (data,e) => {
        const URL = "https://sheetdb.io/api/v1/74826f4n6xvly";
        // const currentDate = new Date().toLocaleString();
        const timestamp = new Date().toLocaleString();
        setLoading(true);
        const new_data={timestamp,...data}
        axios.post(URL, new_data).then((response) => {
            console.log(response);
            setLoading(false);
            setIsSent(true);
        });
        e.target.reset();
        
    }
    return (
        <>

            <section className='bg-dark col-12 justify-content-center' style={{height:"100vh", }} >
                <Header />
                <div className='container  d-flex justify-content-center' >



                {!IsSent?(    <div className='bg-light col-12 col-md-10 col-lg-6' style={{ border: '0.5px solid #333', borderRadius: "4px", marginTop: "4%", marginBottom: "5%" }}>

                        <form style={{ margin: "4%" }} onSubmit={handleSubmit(processData)}>
                            <div className='container container d-flex justify-content-center' >
                                <span style={titleStyle}>Contact Form</span>
                            </div>
                            <div className="form-group">
                                <label >Name*</label>
                                <input type="text" autoComplete="off" required className="form-control" id="exampleInputEmail1" {...register("name")} placeholder="Enter name">
                                </input>
                            </div>
                            <div className="form-group">
                                <label >Email address*</label>
                                <input type="email"  {...register("email")} required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
                                </input>
                                <small id="emailHelp" className="form-text text-muted">We&apos;ll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label >Topic*</label>
                                <input autoComplete="off"  {...register("subject")} className="form-control" id="exampleInputPassword1" required placeholder="Write Topic..." />
                            </div>
                            <div className="form-group">
                                <label >Message*</label>
                                <textarea className="form-control"  {...register("texto")} required id="exampleInputPassword1" placeholder="Write here..." />
                            </div>
                            <div className="form-check" style={{ marginBottom: "2%" }}>
                                <input type="checkbox" autoComplete="off" required className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label"  >Accept the conditions from <Link href="/privacy" ><a>Privacy</a></Link>  and  <Link href="/terms" ><a>Terms</a></Link> </label>
                            </div>
                            {!loading ? <button type="submit" className="btn btn-info">Submit</button> : (
                                <button type="submit" className="btn btn-info" disabled>Submit


                                </button>
                            )}
                        </form>
                    

                    </div>

                    )
                        :<Thanks/>}
                </div>

            </section>

        </>
    )
}
