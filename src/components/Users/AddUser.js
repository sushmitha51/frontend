import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => { 
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await axios.get("http://localhost:8080/fetchnews");
      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteNews/${id}`);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div className='container p-5'style={{ backgroundImage: 'url("https://w0.peakpx.com/wallpaper/370/202/HD-wallpaper-newspaper-ball-glass-silver-macro.jpg")', backgroundSize: 'max' }}>
    
      <div className='py-4'>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">ID</th>
              <th scope="col">NEWSPAPER</th>
              <th scope="col">YEAR</th>
              <th scope="col">AVERAGEDAILYCIRCULATION</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id}>
                <th scope="row">{index + 1}</th>
                <td>{user.id}</td>
                <td>{user.newspaper}</td>
                <td>{user.year}</td>
                <td>{user.averagedailycirculation}</td>
                <td>
               
                    <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/updateuser/`}
                  >
                    Update
                  </Link>
                  <button
  className="btn btn-danger mx-2"
  onClick={() => deleteUser(user.cid)}
>
  Delete
</button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}