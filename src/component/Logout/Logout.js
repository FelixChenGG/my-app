import React,{useState,useEffect} from 'react'
import { Button,Form, FloatingLabel, Container} from 'react-bootstrap';
import axios from 'axios'
import { Store } from 'react-notifications-component';
import {
  useLocation,
  useHistory
} from "react-router-dom";

function Logout() {
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


  const handleOnclick =(event)=> {
    
    localStorage.clear();
    window.location.reload();
    
  }
        return (
            <div >
                <Container>
               
                      <Button className="bg-info" variant="primary" type="submit" onClick={handleOnclick}>
                              Logout
                      </Button>
                </Container>
            </div>
            
  
  
            );
  


}




export default Logout;