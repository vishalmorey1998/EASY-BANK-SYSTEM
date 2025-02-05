import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

function Enquiry() {
  const{register,handleSubmit,reset,setValue,formState:{errors}}=useForm()

  const[AadharCard,setAadharCard]=useState();
  const[PanCard,setPanCard]=useState();
  const[Photo,setPhoto]=useState();
  const[JoiningLetter,setJoiningLetter]=useState();
  const[SalarySlip,setSalarySlip]=useState();

  function onCreateAccount(data)
  {
     const formdata=new FormData();
     formdata.append('aData',JSON.stringify(data))
     formdata.append('aAdharCard',AadharCard)
     formdata.append('aPanCard',PanCard)
     formdata.append('aPhoto',Photo)
     formdata.append('aJoinLetter',JoiningLetter)
     formdata.append('aSalarySlip',SalarySlip)

   console.log(data) 
   axios.post(`http://localhost:9091/accountDetail/createAccountCustomer`,formdata)
   .then(res=>{
    if(res.status===201)
    { 
      alert("data saved successfully")
    }
      
   })
   .catch(error=>console.log(error.message))
  }
      
    
    
  return (
    <div className='d-flex justify-content-center '>
        <div className='w-50 border border-danger mt-3 p-2 bg-warning shadow-lg p-3 mb-5  rounded'>
        <h1 className=' text-center text-primary'>
          Customer  Enquiry Form
        </h1>
        <form onSubmit={handleSubmit(onCreateAccount)}>

        <div className='mt-2  '>
            <label className='form-label'> <b>Account Type:</b></label>
            <select className="form-select"  {...register('accountType')}>
               <option disabled>Open this select AC type</option>
               <option value="SAVINGS">Saving</option>
               <option value="CURRENT">Current</option>
               <option value="SALARY">Salary</option>
            </select>
            </div>
            <div className='mt-2  '>
            <label className='form-label'> <b>Account Holder Name :</b></label>
            <input className='form-control border border-dark text-center' type='text'  placeholder='Enter FullName' {...register('accountHolderDetails.accountHolderName')}></input>
            </div>


            <div className='mt-2'>
            <label className='form-label'><b>Account Holder Address :</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter Address' {...register('accountHolderDetails.accountHolderAddress')}></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Account Holder Email :</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter Email' {...register('accountHolderDetails.accountHolderEmail')}></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Account Holder ContactNumber :</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter ContactNo' {...register('accountHolderDetails.accountHolderContactNumber')}></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Account Holder DateOfBirth :</b></label>
            <input className='form-control border border-dark text-center' type='date'  placeholder='Enter DateofBirth' {...register('accountHolderDetails.accountHolderDateOfBirth')}></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Account Holder Age:</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter Age' {...register('accountHolderDetails.accountholderAge')}></input>
            </div>
            <div className='mt-2'>
              <label className='form-label'><b>Select Gender :</b></label> <br/>

              <input type='radio' name='gender' {...register('accountHolderDetails.accountHolderGender')} value="MALE"/>Male <br/>
              <input type='radio' name='gender' {...register('accountHolderDetails.accountHolderGender')} value="FEMALE"/>Female <br/>
              <input type='radio' name='gender' {...register('accountHolderDetails.accountHolderGender')} value="OTHER"/>Other <br/>


            </div>
            <div>
                <label >Select AadharCard</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setAadharCard(events.target.files[0])}></input>
                </div>
<div>
                <label >Select PanCard</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setPanCard(events.target.files[0])}></input>
                </div>
                <div>
                <label >Select Photo</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setPhoto(events.target.files[0])}></input>
                </div>
<div>
                <label >Select Joining Letter</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setJoiningLetter(events.target.files[0])}></input>
                </div>

                <div>
                <label >Select SalarySlip</label>
                <input type='file' className='border border-black form-control '
                onChange={events=>setSalarySlip(events.target.files[0])}></input>
                </div>
            

           
                 <div className='mt-2'>
                    <button className='btn btn-success'> Submit</button>

                 </div>
        </form>
        </div>
        

    </div>
  )
}

export default Enquiry