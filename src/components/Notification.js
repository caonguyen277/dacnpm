import React, { useState } from "react";
import { Form, Row, Col, Button, Modal } from "react-bootstrap";
import NotifiModal from "./Notification/NotifiModal";

import "../css/Notification.css";
const Notification = () => {
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    const Noti = {
      email : email,
      title : title,
      content : content
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Gửi thông báo</h1>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Tiêu đề
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  type="text"
                  placeholder="Tiêu đề"
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalPassword"
            >
              <Form.Label column sm={2}>
                Nội dung
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  onChange={(e) => setContent(e.target.value)}
                  style={{ height: "200px" }}
                  as="textarea"
                  placeholder="Nội dung ..."
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Col sm={{ span: 10, offset: 2 }}>
                <NotifiModal
                  handleSubmit={handleSubmit}
                  Header={"Thông báo"}
                  Content={"Bạn có muốn gửi thông báo"}
                />
              </Col>
            </Form.Group>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Notification;
