import React,{useState,useEffect} from 'react'
import { Button,Form, FloatingLabel, Container} from 'react-bootstrap';
import axios from 'axios'
import { Store } from 'react-notifications-component';
import {
  useLocation,
  useHistory
} from "react-router-dom";

function UpdateUser() {
  const [studentid , setStudentID] = useState("")
  const [studentname , setStudentName] = useState("")
  const [studentclass, setStudentClass] = useState("")
  const [Year , setYear] = useState("")
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };

  //接收函数
  useEffect(() => {
      //做个判断别没收到报错
      if (history.location.data) {
          //打印看看
          console.log(history.location.data[0])
          setStudentID(history.location.data[0].SID);
          setStudentClass(history.location.data[0].Class);
          setStudentName(history.location.data[0].SName);
          setYear(history.location.data[0].Year);
      }
  }, [])


  const handleSubmit =(event)=> {
    
    const data = {studentid:studentid,studentname:studentname, class:studentclass, year:Year}
    console.log(data)
    fetch("http://127.0.0.1:5000/update", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    history.push("/home");
   
    
  }
        return (
            <div >
                <Container>
                <Form id="UserForm"   onSubmit = {handleSubmit}>
                  <Form.Group >
                  <Form.Label className="text-info"><h4>Add Student</h4></Form.Label>
                  <br/>
                    <FloatingLabel
                      controlId="floatingInput"
                      label="Student ID"
                      className="mb-3"
                      >
                      <Form.Control value= {studentid} type="text" name= 'studentid' placeholder="name@example.com" disabled onChange={(e) => setStudentID(e.target.value) }/>
                  </FloatingLabel>
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Student Name"
                      className="mb-3"
                      >
                      <Form.Control value= {studentname}type="text"  name= 'studentname' placeholder="name@example.com" onChange={(e) => setStudentName(e.target.value) }/>
                  </FloatingLabel>
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Class"
                      className="mb-3"
                      >
                      <Form.Control value= {studentclass} type="text" name= 'class' placeholder="name@example.com" onChange={(e) => setStudentClass(e.target.value) }/>
                  </FloatingLabel>

                  <FloatingLabel
                      controlId="floatingInput"
                      label="Year"
                      className="mb-3"
                      >
                      <Form.Control value= {Year} type="text" name= 'year' placeholder="name@example.com" onChange={(e) => setYear(e.target.value) }/>
                  </FloatingLabel>

                  
                      <br/>
                      <br/>
                      <Button className="bg-info" variant="primary" type="submit">
                              Submit
                      </Button>
                    </Form.Group>
                  
                </Form>
                </Container>
            </div>
            
  
  
            );
  


}




export default UpdateUser;