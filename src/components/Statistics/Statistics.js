import React from "react";
import Barchart from "./Barchar";
import { Row, Col, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../css/Statistics.css"
import "../../css/Statistics.scss"
const Statistics = () => {
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
            <h1 style={{textAlign:"center"}}>Chọn loại cần thống kê</h1>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Statistics;
