import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';


function Preview() {

    const  { register , handleSubmit , setValue ,reset , formState:{errors}}  =  useForm();
    const [panCard,setPancard] =useState();
    const [aadhar,setAadhaar]  =useState();
    const [photo,setPhoto] = useState();
    const [joiningLetter,setJoiningLetter]  =useState();
    const [salarySlip,setSalarySlip] = useState();

    const {id}=useParams();
    
    const getEmployee=()=>{
      axios.get(`http://localhost:9091/accountDetail/singlecustomerdata/${id}`)
            .then(res=>{
              console.log(res)
                        
              const ref=["accountNumber","accountType","currentBalance","accountStatus"];
              for(let prop in res.data)
              {
           
                if(ref.includes(prop))
                {
                  setValue(prop ,res.data[prop])
                }
                else if(prop=== "accountHolderDetails")
                {
                    setPancard(res.data[prop].accountHolderPanCard)
                    setAadhaar(res.data[prop].accountHolderAdharCard)
                    setPhoto(res.data[prop].accountHolderPhoto)
                    setJoiningLetter(res.data[prop].accountHolderJoiningLatter)
                    setSalarySlip(res.data[prop].accountHolderSalarySlip)
                    console.log(1)
                }
               
              }
            }).catch(error=>{}
              
            )
    } 

    
    useEffect(getEmployee , [] );

         
   
return (

    <div className=' bg-secondary-subtle d-flex justify-content-center'>
        <div>

            <h1 className='fs-3 text-center'> Preview Account </h1>
            <form>
                <div>
            <label className='form-label'> <b>Account Number:</b></label>
            <input className='form-control border border-dark text-center' type='text' disabled
                                                {...register('accountNumber')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Type :</b></label>
            <input className='form-control border border-dark text-center' type='text' disabled
                                                {...register('accountType')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Current Balance:</b></label>
            <input className='form-control border border-dark text-center' type='number' disabled
                                                {...register('currentBalance')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Status:</b></label>
            <input className='form-control border border-dark text-center' type='text' disabled
                                                {...register('accountStatus')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account HolderId:</b></label>
            <input className='form-control border border-dark text-center' type='number' disabled
                                                {...register('accountHolderDetails.accountHolderId')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Holder Name:</b></label>
            <input className='form-control border border-dark text-center' type='text' disabled
                                                {...register('accountHolderDetails.accountHolderName')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Holder Address:</b></label>
            <input className='form-control border border-dark text-center' type='text' disabled
                                                {...register('accountHolderDetails.accountHolderAddress')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Holder Email:</b></label>
            <input className='form-control border border-dark text-center' type='text' disabled
                                                {...register('accountHolderDetails.accountHolderEmail')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Holder ContactNumber:</b></label>
            <input className='form-control border border-dark text-center' type='number' disabled
                                                {...register('accountHolderDetails.accountHolderContactNumber')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Holder DateOfBirth:</b></label>
            <input className='form-control border border-dark text-center' type='date' disabled
                                                {...register('accountHolderDetails.accountHolderDateOfBirth')}></input>
            </div>

            <div>
            <label className='form-label'> <b>Account Holder Age:</b></label>
            <input className='form-control border border-dark text-center' type='number' disabled
                                                {...register('accountHolderDetails.accountholderAge')}></input>
            </div>

              <div>
                  <label className='form-control-label'>Pan Card</label>
                <img src={`data:image/png;base64,${panCard}`}  alt="Pancard image not found"
                    className='border border-black m-2' width={'100px'}/>
                                                   
                
                </div>
      
            <div>
                  <label className='form-control-label'>Aadhar Card</label>
                <img src={`data:image/png;base64,${aadhar}`}  alt="Aadhaar image not found"
                    className='border border-black m-2' width={'100px'}/>
                                                   
                
                </div>

                <div>
                  <label className='form-control-label'>Photo</label>
                <img src={`data:image/png;base64,${photo}`}  alt="Photo image not found"
                    className='border border-black m-2' width={'100px'}/>
                                                   
                
                </div>

                <div>
                  <label className='form-control-label'>Joining Letter</label>
                <img src={`data:image/png;base64,${joiningLetter}`}  alt="Joining Letter image not found"
                    className='border border-black m-2' width={'100px'}/>
                                                   
                
                </div>

                <div>
                  <label className='form-control-label'>salary Slip</label>
                <img src={`data:image/png;base64,${salarySlip}`}  alt="salary slip image not found"
                    className='border border-black m-2' width={'100px'}/>
                                                   
                
                </div>

                <div className='text-center'>
                <div >
                <button className=' btn btn-primary'>Active </button>
                </div> <br>
                
                </br>

                <div>
                <button className=' btn btn-danger'> Reject</button>
                </div>
            </div>
            </form>
          


        </div>
    </div>


    
  )
}

export default Preview