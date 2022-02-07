import React from 'react';

export default function Footer() {
    const foot={

        position:"absolute",
        bottom:"0",
        width:"100%",
        height:"5px",   /* Height of the footer */
        background:"#6cf"
     }
    return (
        <div className='d-flex flex-column' >
            <div className='wrapper flex-grow-1'>
                <footer className=" bg-primary text-center text-lg-start" >
                    <div className="container p-4">

                        <div className="text-center text-white p-3" >
                            © 2022 Copyright:
                            <a className="text-white"> FreeWordCloud Generator By Isaias E. Ponce Alvarado - All rights reserved</a>
                        </div>

                    </div>
                </footer>
            </div>
        </div>

    )
}
