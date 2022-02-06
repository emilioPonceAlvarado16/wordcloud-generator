import React from 'react';

export default function Textdata(props) {
    const {textdata, update}=props;
  return (

    <textarea id="text1" name="text1" type="text"

          
          className="col-6 col-sm-6 col-md-6 col-lg-6  "
          placeholder="Copy text here and then Run"
          autoComplete="false"
          onChange={update}
          defaultValue={textdata}
        >
        
        </textarea>

  )
}
