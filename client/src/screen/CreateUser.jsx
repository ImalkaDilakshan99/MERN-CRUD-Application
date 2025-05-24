import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function CreateUser() {

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const[age,setAge] = useState();

  //use navigate for redirect the homepage when click the submit button
  const navigater = useNavigate();

  const submit= (e) => {
    //Stop the refresh when click the submit button
    e.preventDefault();
    axios.post('http://localhost:5000/createUser',{name:name,age:age,email:email})
    .then(res=>{
      console.log(res);
      navigater('/');
    })
    .catch(err => {console.log(err)});
  }
  


  return (
    <div>
      <form onSubmit={submit}>
        <input type="text" placeholder='Enter Name' onChange={(e)=> setName(e.target.value)}/>
        <input type="text" placeholder='Enter Email' onChange={(e)=> setEmail(e.target.value)} />
        <input type="text" placeholder='Enter Age' onChange={(e)=> setAge(e.target.value)} />
        <button className="bg-blue-950 text-white font-bold px-5 py-3 m-2 rounded-lg" type="submit">Create Account</button>
      </form>
    </div>
  )
}

export default CreateUser