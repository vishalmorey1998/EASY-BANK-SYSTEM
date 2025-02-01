import axios from 'axios';
import React, { useEffect, useState } from 'react'

function ViewEmployee() {
  const[employee,setEmployee]=useState([]);

  const getAllEmployee =()=>
  {

    axios.get("http://localhost:9096/employee/get-employee")
          .then(res=>
          {
            if(res.status===200)
            {
              setEmployee(res.data)
            }
          }
          )
          .catch(error=>alert(error.message));
          
          
  }
  useEffect(getAllEmployee,[])
  return (
    <div className='mt-2'>
      <h1 className='text-center text-success'>View All Employee Details</h1>
      <div>
      <form id="search-form">
  <input type="text" id="search-input" placeholder="Search..."/>
  <button id="search-button">Search</button>
</form>
      </div>
      <table className='bg-secondary table table-hover mt-3'>

        <thead>
          <th className='text-center'> Employee Id</th>
          <th className='text-center'>Employee Name</th>
          <th className='text-center'>Employee Degisnation</th>
          <th className='text-center'>Employee Address</th>
          <th className='text-center'>Employee Mobile No</th>
          <th className='text-center'>Employee BranchName</th>
          <th className='text-center'>Employee Email</th>
          <th className='text-center'>Employee Status</th>
          <th className='text-center'>Employee Tpye</th>
          <th className='text-center'>Employee Image</th>
          <th className='text-center'>Employee PanCard</th>
          <th className='text-center'>Employee AadharCard</th>

        </thead>
        <tbody>
{       
employee.map((empl,index)=><tr key={index}>

  <td>{empl.employeeId}</td>
  <td>{empl.employeeName}</td>
  <td>{empl.employeeDesignation}</td>
  <td>{empl.employeeAddress}</td>
  <td>{empl.employeeMobileno}</td>
  <td>{empl.employeeBranchname}</td>
  <td>{empl.employeeEmail}</td>
  <td>{empl.isActive}</td>
  <td>{empl.employeeType}</td>
  <td>
    <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.employeeImage}`} width={'80px'}/>
  </td>
  <td>
    <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.employeeAadhar}`} width={'80px'}/>
  </td>
  <td>
    <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.employeePancard}`} width={'80px'}/>
  </td>
</tr>)

}




        </tbody>
      </table>
    </div>
  )
}

export default ViewEmployee
// private int employeeId;
// 	private String employeeName;
// 	private String employeeDesignation;
// 	private String employeeAddress;
// 	private long employeeMobileno;
// 	private String employeeBranchname;
// 	private String employeeEmail;
// 	private String employeeUsername;
// 	private String employeePassword;
// 	@Enumerated(EnumType.STRING)
// 	private EmployeeEnum isActive;
// 	@Enumerated(EnumType.STRING)
// 	private EmployeeType employeeType;