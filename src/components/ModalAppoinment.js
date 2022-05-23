import React, {useState} from "react";
import { Button,Modal,Row,Col } from "react-bootstrap";
import { isAuthenticated } from "./user/apiCore";
import NotifiModal from "./Notification/NotifiModal";
const ModalAppoinment = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () =>{
    console.log("submit")
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Xử lý
      </Button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        fullscreen = "sm-down"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Xử lý lịch hẹn</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row className="mb-2">
                <Col><h6>Mã số lịch hẹn</h6></Col>
                <Col><h6>{props.lichhen.code}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col><h6>Thời gian</h6></Col>
                <Col><h6>{props.lichhen.time}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col><h6>Tên công dân</h6></Col>
                <Col><h6>{props.lichhen.name}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col><h6>Ngày hẹn gặp</h6></Col>
                <Col><h6>{props.lichhen.date}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col> <h6>Cán bộ giải quyết</h6></Col>
                <Col><h6>{isAuthenticated().username}</h6></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col> <h6>Kết Quả</h6></Col>
                <Col> <input style={{padding:"5px"}}  type="text" placeholder="Kết quả gặp mặt"/></Col>
            </Row>
            <hr></hr>
            <Row className="mb-2">
                <Col> <h6>Biên bản</h6></Col>
                <Col>  <input type="file" id="file-upload" required /></Col>
            </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Huỷ
          </Button>
          <NotifiModal handleSubmit = {() => {handleClose();handleSubmit()}} Header = {"Thông Báo"} Content = {"Bạn muốn xác nhận ?"}/>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAppoinment;
