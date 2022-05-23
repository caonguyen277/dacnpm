import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import NotifiModal from "./Notification/NotifiModal";
const Request = () => {
  const [profilecode, setProfilecode] = useState("");
  const [profile, setProfile] = useState({});
  const [alert,setAlert] = useState(false);
  const handleSubmit = async () => {
    const req = await axios.get(`http://localhost:3003/profile`, {
      params: { code: profilecode },
    });
    const data = req.data;
    console.log(data);
    if(data.length < 1){
        setProfile({});
        setAlert(true);
    }else{
        setAlert(false);
        setProfile(data[0]);
    }
  };
  return (
    <section>
      <div className="container">
        <h1 style={{ textAlign: "center",marginBottom:"50px" }}>Yêu cầu lên cơ quan cấp trên</h1>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Tiêu đề
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="text" placeholder="Hồ sơ cần xác minh" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={2}>
                  Mô tả
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    style={{ height: "200px" }}
                    as="textarea"
                    placeholder="Nhập mô tả ..."
                  />
                </Col>
              </Form.Group>
            </Form>
          </div>
          <div className="col-md-6 col-sm-12">
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Mã số hồ sơ
                </Form.Label>
                <Col sm={5}>
                  <Form.Control
                    onChange={(e) => {
                      setProfilecode(e.target.value);
                    }}
                    type="text"
                    placeholder="Nhập mã"
                  />
                </Col>
                <Col sm={4}>
                  <Button onClick={handleSubmit} className="btn btn-primary">
                    Dữ Liệu
                  </Button>
                </Col>
              </Form.Group>
                    {alert && 
                    <Row>
                        <h6 style={{color:"red"}}>Mã hồ sơ không tìm thấy</h6>
                    </Row> }
                    
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Họ tên
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    value={profile.name || ""}
                    disabled
                    type="text"
                    placeholder=""
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Giấy tờ
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    value={profile.documents || ""}
                    disabled
                    type="text"
                    placeholder=""
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Đề nghị lúc
                </Form.Label>
                <Col sm={9}>
                  <Form.Control
                    value={profile.suggestedDate || ""}
                    disabled
                    type="text"
                    placeholder=""
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3}>
                  Tải tài liệu lên
                </Form.Label>
                <Col sm={9}>
                  <Form.Control type="file" placeholder="Hồ sơ cần xác minh" />
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
        <div style={{textAlign:"center", marginTop: "100px"}}>
                      <NotifiModal Header = {"Thông Báo"} Content = {"Xác nhận gửi !"}/>
          </div>
      </div>

    </section>
  );
};

export default Request;
