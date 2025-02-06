import React, { useEffect, useState } from 'react'
import ProfileNav from '../tempalte/ProfileNav';
import SideNav from '../includes/SideNav';
import { Route, Routes } from 'react-router-dom';
import AddEmployee from '../Pages/employee/AddEmployee';
import ViewEmployee from '../Pages/employee/ViewEmployee';
import ViewApplication from '../Pages/ViewApplication';

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
      <SideNav employeeType={user.employeeType}/>
      </div>
      <div className='col col-9'>
      <Routes>
                
                  <Route path="add_employee" element={<AddEmployee/>}/>
                  <Route path="view_employee" element={<ViewEmployee/>}/>
                  <Route path="view_application" element={<ViewApplication/>}/>

  </Routes>

      </div>
     </div>
   
    </div>
  )
}

export default UserLayout