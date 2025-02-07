import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function AddEmployee() 
{

       const {register , handleSubmit ,setValue , reset , formState:{errors}}  =    useForm()
                         const [empImage ,setEmpImage]      =useState();
                         const [empPan , setEmpPan]=useState();
                         const [empAadaar , setEmpAadhar] = useState();
              

                         const [user,setUser]=useState([])
                          const navigate=useNavigate();
                         function saveData(data)
                         {
                          const formdata=new FormData();
                          formdata.append('data',JSON.stringify(data));
                         
                          formdata.append('epancard',empPan);
                          formdata.append('eAadhar',empAadaar);
                          formdata.append('eImage',empImage);
                         
                         axios.post('http://localhost:9096/employee/add-employee',formdata)
         .then(res=>
         {
            if(res.status===201)
            {
                alert("Employee Saved Data")
                navigate('view_employee')
            }
         }
         ).catch(error=>
         {
            console.log(error);
         }
         )


}


  return (
    <div >
      <div>
        <h1 className='text-center'>Add Employee</h1>
      </div>
      <div>
        <form onSubmit={handleSubmit(saveData)}>
        <div className='mt-2  '>
            <label className='form-label'> <b>Employee Name :</b></label>
            <input className='form-control border border-dark text-center' type='text'  placeholder='Enter FullName' 
                                                {...register('employeeName')}></input>
            </div>

            <div className='mt-2'>
                <select     {...register('employeeDesignation')} >
                      <option defaultChecked={true}>Select Designation</option>
                      <option value="CRM">Customer Relationship Execative</option>
                      <option value="OE">Opertional Execative</option>
                      <option value="AH">Account Head</option>
                      <option value="CM">Cash Manegar</option>
                      <option value="BRANCH_HEAD">BRANCH_HEAD</option>
                </select>
            </div>

            <div className='mt-2  '>
            <label className='form-label'> <b>Employee Address :</b></label>
            <input className='form-control border border-dark text-center' type='text'  placeholder='Enter Address' {...register('employeeAddress')}></input>
            </div>

            <div className='mt-2  '>
            <label className='form-label'> <b>Employee Mobile NO :</b></label>
            <input className='form-control border border-dark text-center' type='number'  placeholder='Enter Mobile No' {...register('employeeMobileno')}></input>
            </div>

            <div className='mt-2  '>
            <label className='form-label'> <b>Employee Branch Name :</b></label>
            <input className='form-control border border-dark text-center' type='text'  placeholder='Enter Branch' {...register('employeeBranchname')}></input>
            </div>

            <div className='mt-2  '>
            <label className='form-label'> <b>Employee Email :</b></label>
            <input className='form-control border border-dark text-center' type='text'  placeholder='Enter email' {...register('employeeEmail')}></input>
            </div>

           
            <div className='mt-2'>
                <select     {...register('isActive')}      >
                      <option defaultChecked={true}>Select  Employee Active Status</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                      <option value="Closed">Closed</option>
                      <option value="contract">contract</option>
                      <option value="retired">retired</option>
                </select>
            </div>

            <div>

             </div>



             

            <div className='mt-2'>
                <label >Select Employee Image</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setEmpImage(events.target.files[0])}></input>
                </div>

                <div className='mt-2'>
                <label >Select Employee Pancard</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setEmpPan(events.target.files[0])}></input>
                </div>

                <div className='mt-2'>
                <label >Select Employee Aadhar</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setEmpAadhar(events.target.files[0])}></input>
                </div>
            
                <div className='justify-content-center'>
                    <button className='btn btn-success w-25 mt-3'>Submit</button>
                </div>


        </form>
      </div>
    </div>
  )
}

export default AddEmployee