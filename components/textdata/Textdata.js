import React from 'react';

export default function Textdata(props) {
    const {textdataa, updatee}=props;
  return (

    <textarea id="text1" name="text1" type="text"

          
          className="col-11 col-md-9 col-lg-9  "
          placeholder="Copy text here and then Run"
          autoComplete="false"
          onChange={updatee}
          defaultValue={textdataa}
        >
        
        </textarea>

  )
}
