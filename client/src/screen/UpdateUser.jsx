import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function UpdateUser() {

  const {id} = useParams();

  const [name,setName] = useState();
  const [email,setEmail] = useState();
  const[age,setAge] = useState();
  const navigater = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:5000/getUser/' + id)
    .then((res)=>{
      setName(res.data.name);
      setEmail(res.data.email);
      setAge(res.data.age);
    })
    .catch((err)=> console.error(err));
  },[])

  const update = (e) => {
    e.preventDefault();
    axios.put('http://localhost:5000/updateUser/'+id, {name:name,email:email,age:age})
    .then(res => {
      navigater('/');
    })
    .catch((err)=> console.error(err));
  }

  return (
    <div>
      <form onSubmit={update}>
        <input type="text" placeholder='Enter Email' value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='EnterName' value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder='Enter Age' value={age} onChange={(e) => setAge(e.target.value)}/>
        <button className='bg-blue-900 text-white font-bold px-5 py-3 m-2 rounded-lg' type="submit">Update Account</button>
      </form>
    </div>
  )
}

export default UpdateUser