import React,{useState} from 'react'
import {Modal,Button,Row,Col} from 'react-bootstrap'
const ModalDetailRequestList = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Chi tiết
        </Button>
  
        <Modal
          show={show}
          centered
          onHide={handleClose}
          
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Chi tiết yêu cầu lịch hẹn</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Row className="mb-2">
                <Col><h6>Người yêu cầu</h6></Col>
                <Col><h6>{props.detail.name}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col><h6>CCCD</h6></Col>
                <Col><h6>{props.detail.code}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col><h6>Ngày yêu cầu</h6></Col>
                <Col><h6>{props.detail.date}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col><h6>Vấn đề cần giải quyết</h6></Col>
                <Col><h6>{props.detail.content}</h6></Col>
            </Row>
            <hr></hr>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

export default ModalDetailRequestList