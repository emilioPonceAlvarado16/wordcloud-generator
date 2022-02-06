import React from 'react';
import { Modal } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default function MyVerticallyCenteredModal(props) {
  
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
      <button className="btn btn-success"style={{marginRight:"1%"}} onClick={props.onHide}><i className="fa fa-trash" aria-hidden="true"></i> Close</button>

    </Modal.Header >
    <Modal.Body>
      <h4>Centered Modal</h4>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
        consectetur ac, vestibulum at eros.
      </p>
    </Modal.Body>
    <Modal.Footer>
      {/* <Button onClick={props.onHide}>Close</Button> */}
      <Button className="btn btn-success"style={{marginRight:"1%"}} onClick={props.onHide}><i className="fa fa-trash" aria-hidden="true"></i> Close</Button>

    </Modal.Footer>
  </Modal>
  );
}
