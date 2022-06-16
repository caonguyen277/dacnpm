import React, { useEffect, useState } from "react";
import { Modal, Button, Form, Tab, Tabs, Col, Row, Table } from "react-bootstrap";
const ModalUserInfo = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        View
      </Button>

      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={handleClose}
      >
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Thông tin công dân">
            <Modal.Header closeButton>
              <Modal.Title>Thông tin công dân</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Tên gọi khác</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.name}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Ngày tháng năm sinh</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.date.slice(0,10)}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Giới tính</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.sex}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group as={Col} className="mb-3">
                    <Form.Label>Quê quán</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.country}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Dân tộc</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.folk}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Quốc tịch</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.nationality}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>

                <Row>
                  <Form.Group
                    as={Col}
                    className="mb-3"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Chứng minh dân nhân</Form.Label>
                    <Form.Control
                      disabled
                      value={props.user.cmnd}
                      type="text"
                      placeholder="Enter email"
                    />
                  </Form.Group>
                </Row>

                <Button
                  style={{ marginLeft: "90%" }}
                  variant="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Tab>
          <Tab eventKey="profile" title="Sổ hộ khẩu">
            <Modal.Header closeButton>
              <Modal.Title>Người trong sổ hộ khẩu</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {props.allUser
                .filter((el, index) => {
                  return el.numberHousehold == props.user.numberHousehold;
                })
                .map((obj, index) => {
                  return (
                      <Form key={index}>
                        <Row>
                          <Form.Group as={Col} className="mb-3">
                            <Form.Label>Tên</Form.Label>
                            <Form.Control
                              disabled
                              value={obj.name}
                              type="text"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                        </Row>

                        <Row>
                          <Form.Group as={Col} className="mb-3">
                            <Form.Label>Ngày tháng năm sinh</Form.Label>
                            <Form.Control
                              disabled
                              value={obj.date.slice(0,10)}
                              type="text"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                          <Form.Group as={Col} className="mb-3">
                            <Form.Label>Giới tính</Form.Label>
                            <Form.Control
                              disabled
                              value={obj.sex}
                              type="text"
                              placeholder="Enter email"
                            />
                          </Form.Group>
                        </Row>
                      </Form>
                  );
                })}
            </Modal.Body>
          </Tab>
          <Tab eventKey="contact" title="Tiền án tiền sự">
          <Modal.Header closeButton>
              <Modal.Title>Tiền án tiền sự</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Thời gian</th>
                  <th>Loại hình phạt</th>
                  <th>Lý do</th>
                </tr>
              </thead>
              {/* <tbody>
                {props.user.TienAnTienSu.map((el,index) => {
                 return ( 
                 <tr key={index}>
                  <td>{el.time}</td>
                  <td>{el.type}</td>
                  <td>{el.reason} </td>
                </tr>)
                })}
                
              </tbody> */}
              </Table>
              </Modal.Body>
          </Tab>
        </Tabs>
      </Modal>
    </>
  );
};

export default ModalUserInfo;
