import React, { useEffect, useState } from 'react'
import CustomerHeader from '../tempalte/CustomerHeader'
import ViewCustomer from '../Customer/ViewCustomer';
import CustomerSideNav from '../includes/CustomerSideNav';
import { Route, Routes } from 'react-router-dom';

function CustomerLayout()
 {
    const[customer,setCustomer]=useState({});

    const getCurrentCustomer =()=>
    {
        console.log("Hello")
      const customer_json =sessionStorage.getItem("customer");
      const customer=JSON.parse(customer_json);
      setCustomer(customer);
      console.log(customer)
    }
    useEffect(getCurrentCustomer,[]);
  
    return (
      <div>
       <CustomerHeader customer={customer}/>
       <div className='row'>
        <div className=' col col-3'>
        <CustomerSideNav />
        </div>
        <div className='col col-9'>
        <Routes>
                  
                    <Route path="view_customer" element={<ViewCustomer/>}/>
                    
  
    </Routes>
  
        </div>
       </div>
     
      </div>
    )
}

export default CustomerLayout