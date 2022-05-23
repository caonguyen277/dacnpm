import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Table, Form } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ModalAppoinment from './ModalAppoinment';
import '../css/Yourownappointment.css';
const Yourownappointment = () => {
    const [lichhen,setLichhen] = useState([]);
    useEffect(() => {
        loadAppointment();
        
    },[]);
    const loadAppointment = async() =>{
        const req = await axios.get("http://localhost:3003/lichhen");
        setLichhen(req.data);
    }
  return (
    <section>
        <div className="container">
        <h1 style={{ textAlign: "center",marginBottom:"50px" }}>Lịch hẹn của bạn</h1>
        <div className="row">
            <div className="col-md-12">
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Mã số lịch hẹn</th>
                    <th>Thời giane</th>
                    <th>Tên công dân</th>
                    <th>Số điện thoại</th>
                    <th>Nội dung lịch hẹn</th>
                    <th>Trạng thái</th>
                    <th>Xử lý</th>
                  </tr>
                </thead>
                <tbody>
                  {lichhen.map((el, index) => (
                    <tr key={index}>
                      <th>{el.Stt}</th>
                      <td>{el.code}</td>
                      <td>{el.time}</td>
                      <td>{el.name}</td>
                      <td>{el.phone}</td>
                      <td>{el.content}</td>
                      {el.status ?  <td>Đã xử lý</td> :  <td>Chưa xử lý</td>}
                     
                      <td>
                        <ModalAppoinment lichhen = {el}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Yourownappointment