import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

function Login() {

  const {register,handleSubmit,setValue,reset,formState:{errors}}=useForm();
const navigate=useNavigate();

    function onLogin(auth)
    {
if(auth.isCustomer)
{
  alert("Enquiry Service")
}
else{
  axios.get(`http://localhost:9096/employee/employee-login/${auth.employeeUsername}/${auth.employeePassword}`)
         .then(res=>{
         if(res.status===200)
         {
          sessionStorage.setItem("user",JSON.stringify(res.data));
          navigate('/userlayout')
         }
         })
         .catch(error=>alert(error.response.data))
}
    }











  return (
    <div className='d-flex  justify-content-center '>
        <div className='w-50 border border-dark mt-5 bg-danger-subtle shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
        <h2 className='text-center text-primary'>Login Here</h2>
            <form onSubmit={handleSubmit(onLogin)}>
                <div className='mt-2'>
                   <label className='form-label'> <b> Enter UserName:</b></label>
               
                  <input type='text'className=' text-center border border-info form-control'{...register('employeeUsername')} ></input>
                 
                </div>
                <div className='mt-2'>
                   <label className='form-label'> <b> Enter Password:</b></label>
               
                  <input type='password'className=' text-center border border-info form-control'{...register('employeePassword')} ></input>
                 
                </div>
                <div className='mt-2 me-5  mb-2'>
                   <label className='form-label'> <b> I am Customer:</b></label>
               
                  <input type='checkbox'className='  border border-info form-check-input' {...register('isCustomer')} ></input>
                 
                </div>
                <div className='text-center mt-2 mb-2'>
                   <button className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login