import React,{useState} from 'react'
import { Button,Form, FloatingLabel, Container} from 'react-bootstrap';
import { Store } from 'react-notifications-component';
import {
  useLocation,
  useHistory
} from "react-router-dom";













function AddUser() {
  const [isNotStudentID,setIsNotStudentID] = useState(false) 
  const [isNotStudentName,setIsNotStudentName] = useState(false) 
  const [isNotStudentYear,setIsNotStudentYear] = useState(false) 
  const [studentid , setStudentID] = useState("")
  const [studentname , setStudentName] = useState("")
  const [studentclass, setStudentClass] = useState("")
  const [Year , setYear] = useState("")
  let history = useHistory();

  const CheckID=(props)=>{
    if (props.studentid <= 10) {
      setIsNotStudentID(false)
      return null;
    }else{
      setIsNotStudentID(true)
    }

    return (
      <div className="IDwarning">
        <h6 style={{ color: 'red' }}>The size was too large</h6>
      </div>
    );
  }

  const CheckName=(props)=>{
    if (props.studentname <= 25) {
      setIsNotStudentName(false)
        return null;
      }else{
        setIsNotStudentName(true)
      }
    return (
      <div className="Namewarning">
        <h6 style={{ color: 'red' }}>The size was too large</h6>
        
      </div>
    );
  }
  const CheckYear=(props)=>{
    console.log(parseInt(props.studentyear))
    if (parseInt(props.studentyear) >= 1990 && parseInt(props.studentyear) <= new Date().getFullYear()) {
        setIsNotStudentYear(false)
        return null;
      }else{
        setIsNotStudentYear(true)
      }
    return (
      <div className="Yearwarning">
        <h6 style={{ color: 'red' }}>Year not correct ! Year Format is YYYY </h6>
        
      </div>
    );
  }
 
 
  const handleSubmit =(event)=> {
    event.preventDefault();
    if(studentid === "" || studentname === "" || studentclass === "" || Year === "" || isNotStudentID || isNotStudentName || isNotStudentYear
        ){
        
        Store.addNotification({
          title: "Worning",
          message: "Create Fail !!!",
          type: "danger",
          insert: "top",
          container: "top-right",
          animationIn: ["animate__animated", "animate__fadeIn"],
          animationOut: ["animate__animated", "animate__fadeOut"],
          dismiss: {
              duration: 5000,
              onScreen: true
          }
          })
    }else{  
     
      const data = {studentid:studentid,studentname:studentname, class:studentclass, year:Year}
      
      fetch("http://127.0.0.1:5000/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    history.push("/home"); 
    Store.addNotification({
        title: "Congratulation",
        message: "Add Successful  !!!",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
            duration: 5000,
            onScreen: true
        }
        })
    }
    
    // await axios.post('http://127.0.0.1:5000/add', {data})
    // .then(function (response)
    // {
      // if(response.statusText =="OK"){
        
      
      // }else{
      
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

                  <CheckID studentid={studentid.length}/>

                  <FloatingLabel
                      controlId="floatingInput"
                      label="Student Name"
                      className="mb-3"
                      >
                      <Form.Control type="text"  name= 'studentname' placeholder="name@example.com" onChange={(e) => setStudentName(e.target.value) }/>
                  </FloatingLabel>

                  <CheckName studentname={studentname.length}/>
                
                  <Form.Select aria-label="CLass" onChange={(e) => {console.log("e.target.value", e.target.value);
                  setStudentClass(e.target.value)}}>
                                    <option >Choose Class</option>
                                    <option value="Class A" >Class A</option>
                                    <option value="Class B">Class B</option>
                                    <option value="Class C">Class C</option>
                                    <option value="Class E">Class E</option>
                  </Form.Select >

                  <br/>
                  <FloatingLabel
                      controlId="floatingInput"
                      label="Year"
                      className="mb-3"
                      >
                      <Form.Control type="text" name= 'year' placeholder="name@example.com" onChange={(e) => setYear(e.target.value) }/>
                  </FloatingLabel>
                  <CheckYear  studentyear={Year}/>
                  
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