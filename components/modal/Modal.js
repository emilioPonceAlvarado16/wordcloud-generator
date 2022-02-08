import { React, createRef, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { saveSvgAsPng } from 'save-svg-as-png';

export default function MyVerticallyCenteredModal(props) {
  const darkColor = {
    svgColor: "black",
    class: "bg-dark container col-12 col-md-10 col-lg-12 col-xl-10 d-flex justify-content-center"

  }
  const whiteColor = {
    svgColor: "transparent",
    class: "bg-white container col-12 col-md-10 col-lg-12 col-xl-10 d-flex justify-content-center"

  }
  const [color, setcolor] = useState(darkColor);
  const [checked, setchecked] = useState(true);
  const wordcloudRef = createRef();


  const changeStyle = () => {

    if (checked) {
      setcolor(whiteColor);
    }
    else {
      setcolor(darkColor);
    }
    setchecked(!checked);

  }

  const handleSave = () => {
    const svgElement = wordcloudRef.current.querySelector('svg');

    saveSvgAsPng(svgElement, 'wordcloud.png', { backgroundColor: color.svgColor });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header >
        <Modal.Title id="contained-modal-title-vcenter">
         <span style={{fontWeight:"bold"}}> WordCloud Generated</span> 
        </Modal.Title>
        <button className="btn btn-danger" style={{ marginRight: "1%" }} onClick={props.onHide}> Close</button>

      </Modal.Header >
      <Modal.Body>

          <div  className={color.class} style={{ height: "100%", width: "100%",  border: '1px solid #333', overflow:"auto"  }} ref={wordcloudRef}>
       
            {props.children}
        </div>


      </Modal.Body>
      <Modal.Footer>
      <span style={{fontSize:"1.2rem",fontWeight:"bold"}}>Dark</span>
      <label className="switch">
          
          <input type="checkbox" onChange={changeStyle} checked={checked} />
          <span className="slider round"></span>
        </label>

        <Button className="btn social-icons btn-info" style={{ marginRight: "1%" }} onClick={handleSave} ><i className="fa fa-download" aria-hidden="true"> Download Image</i></Button>

      

      </Modal.Footer>
    </Modal>
  );
}
