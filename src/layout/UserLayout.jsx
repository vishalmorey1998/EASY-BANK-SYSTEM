import React, { useEffect, useState } from 'react'
import ProfileNav from '../tempalte/ProfileNav';
import SideNav from '../includes/SideNav';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from '../Pages/employee/AddEmployee';
import ViewEmployee from '../Pages/employee/ViewEmployee';

function UserLayout() {
  const[user,setUser]=useState({});

  const getCurrentUser =()=>
  {
    const user_json =sessionStorage.getItem("user");
    const user=JSON.parse(user_json);
    setUser(user);
  }
  useEffect(getCurrentUser,[]);

  return (
    <div>
     <ProfileNav user={user}/>
     <div className='row'>
      <div className=' col col-3'>
      <SideNav userType={user.userType}/>
      </div>
      <div className='col col-9'>
  <Routes>
      <Route path='add_employee' element={<AddEmployee/>}/> 
      <Route path='view_employee' element={<ViewEmployee/>}/>

  </Routes>

      </div>
     </div>
   
    </div>
  )
}

export default UserLayout