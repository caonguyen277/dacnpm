import React, {useState} from "react";
import {Form,Button,Modal} from 'react-bootstrap'
const NotifiModal = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Gửi
      </Button>

      <Modal
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.Header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5 style={{color:"red",textAlign: "center"}}>{props.Content}</h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <Button variant="primary" onClick={() => {handleClose();props.handleSubmit()}}>
            Gửi
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NotifiModal;
