import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import ModalDetailRequestList from "./ModalDetailRequestList";
import ModalBookRequestList from "./ModailBookRequestList";
const RequestList = () => {
  const [detailRequest, setDetailRequest] = useState([]);
  useEffect(() => {
    loadDetailRequest();
  }, []);
  const loadDetailRequest = async () => {
    const res = await axios.get("http://localhost:3003/lichhen");
    if (res.status === 200) {
      setDetailRequest(res.data);
    } else {
      console.log("Lỗi");
    }
  };
  return (
    <>
      <section>
        <div className="container">
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Danh sách yêu cầu lịch hẹn
          </h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Họ tên công dân</th>
                <th>Vấn đề cần giải quyết</th>
                <th>Chi tiết</th>
                <th>Đặt lịch</th>
              </tr>
            </thead>
            <tbody>
              {detailRequest.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.content}</td>
                  <td>
                    <ModalDetailRequestList detail = {item}/>
                  </td>
                  <td>
                   <ModalBookRequestList detail = {item}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </section>
    </>
  );
};

export default RequestList;
