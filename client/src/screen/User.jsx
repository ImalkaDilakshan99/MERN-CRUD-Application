import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UpdateUser from "./UpdateUser";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  //delete user
  const handleDelete = (id) => {
    axios.delete('http://localhost:5000/deleteUser/' +id)
    .then((res) => {
      window.location.reload();
    })
    .catch((err) => console.error(err));
  }

  return (
    <div className='p-5'>
      <table className="w-[70vw] bg-slate-100 text-center">
        <tr className="bg-red-500">
          <th>Email</th>
          <th>Name</th>
          <th>Age</th>
          <th>Action</th>
        </tr>

        {users.map((user) => (
          <tr className="p-3">
            <td className="p-3">{user.name}</td>
            <td className="p-3">{user.email}</td>
            <td className="p-3">{user.age}</td>
            <td>
              <Link className="bg-blue-900 text-white font-bold px-5 py-3 m-2 rounded-lg" to={`/update/${user._id}`}>
                Update
              </Link>
              <button className="bg-red-900 text-white font-bold px-5 py-3 m-2 rounded-lg" onClick={(e) => handleDelete(user._id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default User;
