import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import "../css/Home.css";
import {Table, Form, Row, Col } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import ModalUserInfo from "./ModalUserInfo";
import { apiLoadUsers } from "./API";
const Home = () => {
  const [users, setUser] = useState([]);
  const [obj, setObj] = useState({
    name: "",
    city: "",
  });
  const [input, setInput] = useState("");
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const data = await apiLoadUsers();
    setUser(data.reverse());
  }

  const handleChangeName = (e) => {
    setObj({
      ...obj,
      name: e.target.value,
    });
  };
  const handleChangeAddress = (e) => {
    setObj({
      ...obj,
      city: e.target.value,
    });
  };
  const handleChangeInput = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <section>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Hồ sơ công dân</h1>
          <div style={{ textAlign: "center" }} className="row mb-2">
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Row>
                <Col sm={2}>
                  <Form.Label>Huyện</Form.Label>
                </Col>
                <Col sm={10}>
                  <Form.Select
                    onChange={(e) => handleChangeName(e)}
                    aria-label="Default select example"
                  >
                    {/* <option>Tất cả</option>
                    {users.map((user, index) => (
                      <option key={index} value={user.name}>
                        {user.name}
                      </option> */}
                    {/* ))} */}
                  </Form.Select>
                </Col>
              </Row>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Row>
                <Col sm={1}>
                  <Form.Label>Xã</Form.Label>
                </Col>
                <Col sm={11}>
                  <Form.Select
                    onChange={(e) => handleChangeAddress(e)}
                    aria-label="Default select example"
                  >
                    {/* <option>Tất cả</option>
                    {users.map((user, index) => (
                      <option key={index} value={user.nation}>
                        {user.nation}
                      </option>
                    ))} */}
                  </Form.Select>
                </Col>
              </Row>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div>
                <div>
                  <span>
                    <FaSearch />
                  </span>
                  <input
                    onChange={(e) => handleChangeInput(e)}
                    type="search"
                    id="search"
                    placeholder="Theo mã, tên, địa chỉ..."
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <NavLink className="btn btn-primary" exact to="/user/AddUser">
                Dữ Liệu
              </NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>CMND</th>
                    <th>Giới Tính</th>
                    <th>Ngày Sinh</th>
                    <th>Chi Tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user, index) => (
                    <tr key={index}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.cmnd}</td>
                      <td>{user.sex}</td>
                      <th>{user.date.slice(0,10)}</th>
                      <td>
                        <NavLink
                          to={`user/${user.id}`}
                          exact="true"
                          className=" m-2 btn btn-primary"
                        >
                          Relative
                        </NavLink>
                        <ModalUserInfo allUser={users} user={user} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
