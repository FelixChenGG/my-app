
import React,{useState,useEffect} from 'react'
import { Button,Card, Table,Pagination} from 'react-bootstrap'
import axios from 'axios'
import {
    useLocation,
    useHistory
  } from "react-router-dom";

// const addItem=(props)=>{
//     for(var i=0 ; i <= props.records; i++){
//         <Pagination.Item>{i}</Pagination.Item>
//     }
// }


// function Paginations({ postsPerPage, totalPosts, paginate }) {

//     const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }
//   console.log(postsPerPage, totalPosts, paginate )
//   return (
//     <nav>
//       <Pagination>
//         {pageNumbers.map(number => (
//           <Pagination.Item key={number}>
//             <a onClick={() => paginate(number)} href='!#' className='page-link'>
//               {number}
//             </a>
//             </Pagination.Item>
//         ))}
//       </Pagination>
//     </nav>
//   );
// }



function Home() {
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postsPerPage] = useState(10);
    const [records, setRecords] = useState([0]);
        useEffect(() => {
            fetch('http://127.0.0.1:5000/home', 
            {
                
                method: "GET", 
                headers: {
                    'Content-Type': 'application/json',
                    
                    'Access-Control-Allow-Origin': '*',
                }})
            .then(res => res.json())
            .then(data => setRecords(data))
            
        }, []);
    // // Get current posts
    // const indexOfLastPost = currentPage * postsPerPage;
    // const indexOfFirstPost = indexOfLastPost - postsPerPage;
    // const currentPages = records.slice(indexOfFirstPost, indexOfLastPost)
    
    // // Change page
    // const paginate = pageNumber => setCurrentPage(pageNumber);

   //setRecords(data)
    const deleteUrl=async(SID)=>{
        await axios.get('http://127.0.0.1:5000/delete/'+SID)
        .then(function (response)
        {
            window.location.reload();

        })
    }

    let history = useHistory();
    let location = useLocation();
    const updateUrl=async(SID)=>{
        // await axios.get('http://127.0.0.1:5000/delete/'+SID)
        // .then(function (response)
        // {
        //     window.location.reload();

        // })
    }
    
    let { from } = location.state || { from: { pathname: "/add" } };
//    console.log(records[0])
        return (
        <>  <Card style={{ width: '100%' }}>
                    <Card.Header className='bg-white'>Member</Card.Header>
                    <Card.Body className='bg-white'>

                         <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Class</th>
                                <th>Year</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {records.map(record =>(
                                
                                <tr>
                                <td>{record.SID}</td>
                                <td>{record.SName}</td>
                                <td>{record.Class}</td>
                                <td>{record.Year}</td>
                                <td><Button onClick={(e) => deleteUrl(record.SID)}>Delete</Button>&nbsp;
                                <Button onClick={(e) => history.replace(from)}>Update</Button></td>
                                </tr>
                                ))}
                            </tbody>  
                        </Table>
                    </Card.Body>
                    <Card.Footer className='bg-white' >
                    {/* <Paginations
                        postsPerPage={postsPerPage}
                        totalPosts={currentPage.length}
                        paginate={paginate}
                    /> */}
                    </Card.Footer>
                    </Card></>
    )

}



export default Home;