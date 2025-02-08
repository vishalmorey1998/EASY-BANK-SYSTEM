import React from 'react'
import { Link } from 'react-router-dom'
const basepath="/customerlayout"

function CustomerSideNav() 
{

    
  return (
    <div className='bg-dark text-white mynav '>
    {
        <Link className='btn btn-info'>View</Link>
       
    }
 </div>

  )
}

export default CustomerSideNav