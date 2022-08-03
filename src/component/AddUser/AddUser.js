import React,{useState} from 'react'
import { Button,Form, FloatingLabel, Container} from 'react-bootstrap';
import axios from 'axios'
import { Store } from 'react-notifications-component';
import {
  useLocation,
  useHistory
} from "react-router-dom";

function AddUser() {
  const [studentid , setStudentID] = useState("")
  const [studentname , setStudentName] = useState("")
  const [studentclass, setStudentClass] = useState("")
  const [Year , setYear] = useState("")
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/home" } };
  const handleSubmit =async(event)=> {
    
    const data = {studentid:studentid,studentname:studentname, class:studentclass, year:Year}
    // await axios.post('http://127.0.0.1:5000/add', {data})
    // .then(function (response)
    // {
      // if(response.statusText =="OK"){
        window.location.push("/home")
      //   Store.addNotification({
      //   title: "Congratulation",
      //   message: "Add Successful  !!!",
      //   type: "success",
      //   insert: "top",
      //   container: "top-right",
      //   animationIn: ["animate__animated", "animate__fadeIn"],
      //   animationOut: ["animate__animated", "animate__fadeOut"],
      //   dismiss: {
      //       duration: 5000,
      //       onScreen: true
      //   }
      //   })
      // }else{
      //   Store.addNotification({
      //     title: "Worning",
      //     message: "Create Fail !!!",
      //     type: "danger",
      //     insert: "top",
      //     container: "top-right",
      //     animationIn: ["animate__animated", "animate__fadeIn"],
      //     animationOut: ["animate__animated", "animate__fadeOut"],
      //     dismiss: {
      //         duration: 5000,
      //         onScreen: true
      //     }
      //     })
      // }
    // })
    
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
                      <Form.Control type="text" name= 'studentid' placeholder="name@example.com" onChange={(e) => setStudentID(e.target.value) }/>
                  </FloatingLabel>
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Student Name"
                      className="mb-3"
                      >
                      <Form.Control type="text"  name= 'studentname' placeholder="name@example.com" onChange={(e) => setStudentName(e.target.value) }/>
                  </FloatingLabel>
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Class"
                      className="mb-3"
                      >
                      <Form.Control type="text" name= 'class' placeholder="name@example.com" onChange={(e) => setStudentClass(e.target.value) }/>
                  </FloatingLabel>

                  <FloatingLabel
                      controlId="floatingInput"
                      label="Year"
                      className="mb-3"
                      >
                      <Form.Control type="text" name= 'year' placeholder="name@example.com" onChange={(e) => setYear(e.target.value) }/>
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




export default AddUser;