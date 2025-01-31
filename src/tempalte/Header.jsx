import React from 'react'
import { Link, Route } from 'react-router-dom'


function Header() {
  return (
<nav className='bg bg-success d-flex justify-content-between p-1 fs-3 text-light' >
     <i className="bi bi-bank text-danger fs-2"></i>
   <h1 className=''style={{fontFamily:'cursive',textShadow:'0px 10px 10px 0px dark' }}> Easy-Finance-Sytem</h1>

<div className='d-flex justify-content-between p-2 w-50'>
  <Link className='btn btn-light me-3 ' to={'/about'}>About</Link>
  <Link className='btn btn-light me-3' to={'/enquiry'}>Enquiry</Link>
  <Link className='btn btn-light me-3 ' to={'/login'}>Login</Link>
  <Link className='btn btn-light me-3' to={'/our-service'}>OurService</Link>
  

</div>
</nav>
  )
}

export default Header