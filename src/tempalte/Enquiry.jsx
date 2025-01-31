import React from 'react'

function Enquiry() {
  return (
    <div className='d-flex justify-content-center '>
        <div className='w-50 border border-danger mt-3 p-2 bg-warning shadow-lg p-3 mb-5  rounded'>
        <h1 className=' text-center text-primary'>
          Customer  Enquiry Form
        </h1>
        <form>
            <div className='mt-2  '>
            <label className='form-label'> <b>Enter Coustomer FullName :</b></label>
            <input className='form-control border border-dark text-center' type='text'  placeholder='Enter FullName'></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Enter Coustomer UserName :</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter UserName'></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Enter Coustomer Password :</b></label>
            <input className='form-control border border-dark text-center' type='password' placeholder='Enter Password'></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Enter Coustomer EmailId :</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter EmailId'></input>
            </div>
            <div className='mt-2'>
            <label className='form-label'><b>Enter Coustomer Mobile No :</b></label>
            <input className='form-control border border-dark text-center' type='text' placeholder='Enter Mobile No'></input>
            </div>
            <div className='mt-2'>
                <label className='form-label'> <b>Please Mention our Enquiry :</b></label> <br/>
                
               <input type='radio'  name='enquiry'/> login Regarding <br/>
               <input type='radio'  name='enquiry'/> Saving Account Regarding <br/>
               <input type='radio'  name='enquiry'/> Closing Account Regarding <br/>
                 </div>
                 <div className='mt-2 text-center'>
                    <button className='btn btn-success'> Submit</button>

                 </div>
        </form>
        </div>
        

    </div>
  )
}

export default Enquiry