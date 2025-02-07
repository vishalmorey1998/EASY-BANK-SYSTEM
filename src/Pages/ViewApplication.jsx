import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


function ViewApplication() {

    const[accountHolders,setAccountHolders]=useState([]);

    const getALLApplication =()=>{
        axios.get("http://localhost:9091/accountDetail/allAccountCustomer")
        .then(res=>
        {
            if(res.status===200)
            {
                setAccountHolders(res.data)
            }
        }
         )
         .catch(error=>alert(error.message));

    }
    useEffect(getALLApplication,[]);


  return (
    <div>
        <h1>Customer Data</h1>
        <div>
          
            <table className='text-center table table-hover mt-3'>
                <thead>
                <tr className='table-info'>

                    <th>accountNumber</th>
                    <th>accountHolderName</th>
                   <th>accountHolderDateOfBirth</th>
                     <th>accountHolderId</th>
                    <th>accountType</th>
                    <th>accountHolderAdharCard</th>
                    <th>accountStatus</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className='table-danger'>
                    {
                        accountHolders.map((ach,index)=> <tr key={index}>
                           
                            <td>{ach.accountHolderDetails.accountHolderId}</td>
                            <td>{ach.accountHolderDetails.accountHolderName}</td>
                            <td>{ach.accountHolderDetails.accountHolderDateOfBirth}</td>
                            <td>{ach.accountNumber}</td>
                            <td>{ach.accountType}</td>
                            <td>
                                <img alt='Image not found' src={`data:image/jpeg;base64,${ach.accountHolderDetails.accountHolderAdharCard}`} width={'80px'}/>
                            </td>
                            <td>{ach.accountStatus}</td>
                            <td>
                                {/* <button className='mt-2 bg bg-info' onClick={()=>preview(ach.accountNumber)}
                            

                            >Preview</button> */}

                            <Link className='btn btn-primary' to={`/userlayout/preview_application/${ach.accountNumber}`}>Preview</Link>
                          

                            </td>

                          
                        </tr>)

                    }
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ViewApplication