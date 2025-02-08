import React, { useEffect, useState } from 'react'
import axios from 'axios';



function ViewCustomer()
 {

    const[customer,setCustomer]=useState([]);

    const getAllCustomer =()=>
        {
      
          axios.get("http://localhost:9091/accountDetail/allAccountCustomer")
                .then(res=>
                {
                  if(res.status===200)
                  {
                    setCustomer(res.data)
                  }
                }
                )
                .catch(error=>alert(error.message));
                
                
        }
        useEffect(getAllCustomer,[])

  return (
    <div className='mt-2'>
    <h1 className='text-center text-success'>View All Customer Details</h1>
    <table className='bg-secondary table table-hover mt-3'>

      <thead>
        <th className='text-center'>AccountHolderId</th>
        <th className='text-center'>AccountHolderName</th>
        <th className='text-center'>AccountHolderAddress</th>
        <th className='text-center'>AccountHolderEmail</th>
        <th className='text-center'>AccountHolderContactNumber</th>
        <th className='text-center'>AccountHolderDateOf Birth</th>
        <th className='text-center'>AccountholderAge</th>
        <th className='text-center'>AccountHolderGender</th>
        <th className='text-center'>AccountHolderAdharCard</th>
        <th className='text-center'>AccountHolderPanCard</th>
        <th className='text-center'>AccountHolderPhoto</th>
        <th className='text-center'>AccountholderJoiningLatter</th>
        <th className='text-center'>AccountHolderSalarySlip</th>




        
      </thead>
      <tbody>
{       
customer.map((empl,index)=><tr key={index}>

<td>{empl.accountHolderDetails.accountHolderId}</td>
<td>{empl.accountHolderDetails.accountHolderName}</td>
<td>{empl.accountHolderDetails.accountHolderAddress}</td>
<td>{empl.accountHolderDetails.accountHolderEmail}</td>
<td>{empl.accountHolderDetails.accountHolderContactNumber}</td>
<td>{empl.accountHolderDetails.accountHolderDateOfBirth}</td>
<td>{empl.accountHolderDetails.accountholderAge}</td>
<td>{empl.accountHolderDetails.accountHolderGender}</td>

<td>
  <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.accountHolderDetails.accountHolderAdharCard}`} width={'80px'}/>
</td>
<td>
  <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.accountHolderDetails.accountHolderPanCard}`} width={'80px'}/>
</td>
<td>
  <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.accountHolderDetails.accountHolderPhoto}`} width={'80px'}/>
</td>
<td>
  <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.accountHolderDetails.accountHolderJoiningLatter}`} width={'80px'}/>
</td>
<td>
  <img alt='Image not Found' src={`data:image/jpeg;base64,${empl.accountHolderDetails.accountHolderSalarySlip}`} width={'80px'}/>
</td>
</tr>)

}




      </tbody>
    </table>
  </div>
  )
}

export default ViewCustomer


// private long accountHolderId; 
//  private String accountHolderName; //Pratik M NArkhedde
//  private String accountHolderAddress;
//  private String	accountHolderEmail;
//  private String	accountHolderContactNumber;
//  private String userName;
//  private String password;
//  @JsonFormat(pattern = "yyyy-mm-dd")
//  private Date accountHolderDateOfBirth;
//  private int accountholderAge;
 
//  @Enumerated(EnumType.STRING)
//  private	AccountHolderGender	accountHolderGender;  // MALE,FEMALE,OTHER
 
//  @Lob
//  @Column(length = 999999999)
//  private	byte[]	accountHolderAdharCard;
//  @Lob
//  @Column(length = 999999999)
//  private	byte[]	accountHolderPanCard;
//  @Lob
//  @Column(length = 999999999)
//  private	byte[]	accountHolderPhoto;
//  @Lob
//  @Column(length = 999999999)
//  private	byte[]	accountHolderJoiningLatter;  //Optional
//  @Lob
//  @Column(length = 999999999)
//  private	byte[]	accountHolderSalarySlip;    //Optional