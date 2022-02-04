import React from 'react';

export default function Textdata(props) {
    const {textdata, update}=props;
  return (

    <textarea id="text1" name="text1" type="text"

          style={{ width: '100%', height: 'calc( 40em + 15vh )', fontSize: '18px' , overflow:"auto"}}
          className="col-5 col-sm-5 col-md-5 col-lg-5  "
          placeholder="Copy text here and then Run"
          autoComplete="false"
          onChange={update}
        >
          {textdata}

        </textarea>

  )
}
