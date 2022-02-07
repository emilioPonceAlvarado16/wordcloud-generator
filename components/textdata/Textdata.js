import React from 'react';

export default function Textdata(props) {
    const {textdata, update}=props;
  return (

    <textarea id="text1" name="text1" type="text"

          
          className="col-11  "
          placeholder="Copy text here and then Run"
          autoComplete="false"
          onChange={update}
          defaultValue={textdata}
        >
        
        </textarea>

  )
}
