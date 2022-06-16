import React from "react";
import Barchart from "./Barchar";
import { Row, Col, ListGroup, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { DatePicker } from "@y0c/react-datepicker";
// import calendar style
// You can customize style by copying asset folder.

const BySex = () => {
  const onChange = (date) => {
    // Day.js object
    console.log(date);

    // to normal Date object
    console.log(date.toDate());
  };
  return (
    <>
      <div className="container">
        <Row>
          <Col md={3}>
            <ListGroup as="ul">
              <ListGroup.Item as="li">
                <NavLink exact to="/Statistics/Bysex">
                  Thống kê theo giới tính
                </NavLink>
              </ListGroup.Item>
              <ListGroup.Item as="li">
                <NavLink exact to="/Statistics/ByCrimeSituation">
                  Thống kê theo tình hình tội phạm
                </NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={9}>
            <h1 style={{ textAlign: "center" }}>Thống kê theo giới tính</h1>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <span>Thời gian từ:</span>
                    <DatePicker onChange={onChange} />
                  </Col>
                  <Col>
                    <span>Đến</span>
                    <DatePicker onChange={onChange} />
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
            <Barchart></Barchart>
            <Row>
              <Col>
                <div style={{ textAlign: "center" }}>
                  {" "}
                  <Button className="btn btn-primary">Tạo báo cáo</Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default BySex;
