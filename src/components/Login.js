import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { authenticate } from "./user/apiCore";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account, setAccount] = useState([]);
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    loadData();
  }, []);
  async function loadData() {
    const data = await axios.get("http://localhost:3003/account");
    setAccount(data.data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const acc = account.find((obj) => {
      return obj.email === email && obj.password === password;
    });
    if (acc) {
      authenticate(acc);
      navigate("/Home", { replace: true });
    }else{
      alert("Tài khoản sai!");
    }
    
  };
  return (
    <section>
      <div className="container">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              onChange={(e) => handleChangeEmail(e)}
              type="email"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onChange={(e) => handleChangePassword(e)}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Login;
