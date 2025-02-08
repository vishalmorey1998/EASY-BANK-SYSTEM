import React from 'react'
import { Link } from 'react-router-dom'



function CustomerHeader({customer})
 {
   


  return (
   <>
   <div className='bg-primary p-2 d-flex justify-content-between'>
       <div className='d-flex'>                         
          <img src={`data:image/jpeg;base64,${customer.accountHolderDetails && customer.accountHolderDetails.accountHolderPhoto}`}
              width={'100px'} style={{border:'2px solid white',borderRadius:'180px'}}/>
              <div >
                  <h1 className='fs-4 text-white'>Name:{`${customer.accountHolderDetails && customer.accountHolderDetails.accountHolderName}`}</h1>
              </div>
      </div>
        
      <div className='mt-3'>
      <Link className='btn btn-danger' to={'/'}>LogOut</Link>
      </div>
    </div>
   </>
  )
}

export default CustomerHeader