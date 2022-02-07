import {React, createRef} from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { saveSvgAsPng } from 'save-svg-as-png';


export default function MyVerticallyCenteredModal(props) {
  const wordcloudRef = createRef();

  const handleSave = () => {
    const svgElement = wordcloudRef.current.querySelector('svg');

    saveSvgAsPng(svgElement, 'wordcloud.png', { backgroundColor: "white" });
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
        Modal heading
      </Modal.Title>
      <button className="btn btn-danger"style={{marginRight:"1%"}} onClick={props.onHide}><i className="fa fa-window-close" aria-hidden="true"></i> Close</button>

    </Modal.Header >
    <Modal.Body>
      <h4>Centered Modal</h4>
      <div style={{ width: "50%", height: "10%" , overflow:"auto"}} className="bg-dark container  d-flex justify-content-center">
      <span ref={wordcloudRef}>
      {props.children}
      </span>
      </div>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button className="btn btn-success"style={{marginRight:"1%"}} onClick={props.onHide}><i className="fa fa-trash" aria-hidden="true"></i> Close</Button>
      <button className="btn social-icons btn-info" style={{ marginRight: "1%" }} onClick={handleSave} ><i className="fa fa-download" aria-hidden="true"> Download Image</i></button>

    </Modal.Footer>
  </Modal>
  );
}
