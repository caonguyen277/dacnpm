import axios from "axios";
import React,{useState} from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    const [email,setEmail] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
        if(email && username && password){
        const newUser = {
            
            email: email,
            username:username,
            password: password,
            role: 0
        }
        // if(postUserAPI() === 200) {
        //     Navigate("/login");
        // }
        if(postUserAPI(newUser)){
          alert("Đã đăng ký thành công!");
          navigate("/Login");
        }
       
     }
    }
    const postUserAPI = async(data) =>{
        const res = await axios.post("http://localhost:3003/account",data);
        return res;
    }

  return (
    <section>
      <div className="container">
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default SignUp;
