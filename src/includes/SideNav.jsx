import React from 'react'
import { Link } from 'react-router-dom'
const basepath="/userlayout"

const Options={

  ADMIN:[

    {label:'Add Employee',path:basepath+"/add_employee" },
    { label:'View Employee',path:basepath+"/view_employee"},
    // {label:'App Statatics', path:basepath+"/app_info"}
    
  ],
  CRM:[
    {label:'View Application', path:basepath+"/view_application"}
  ],
  OE:[]
}


function SideNav({employeeType}) {

  
  return (
    <div className='bg-dark text-white mynav '>
      
       {
         employeeType && Options[employeeType].map((option,index)=> (
            <Link key={index} className='btn btn-light'
                  to={option.path}>{option.label}</Link>
        ))
       }
    </div>
  )
}

export default SideNav