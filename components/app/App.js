import { React, useState } from 'react';

export default function App() {
  const [state, setState] = useState("hola");
  return (
    <>

      <div className="row  justify-content-center  mt-5  " >
      
        <textarea id="text1" name="text1" type="text"

          style={{ width: '100%', height: 'calc( 40em + 15vh )', fontSize: '18px' }}
          className="col-5 col-sm-5 col-md-5 col-lg-5  "

        >
          {state}

        </textarea>


        <div id="text1" name="text1" type="text"

          style={{ border: '1px solid #333', width: '100%', height: 'calc( 40em + 15vh )', fontSize: '18px', border: '1px solid #333', overflow: 'auto' }}

          className="bg-white col-5 col-sm-5 col-md-5 col-lg-5  "


        ></div>
      </div>

    </>
  )
}
