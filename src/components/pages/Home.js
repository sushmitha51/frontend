import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

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
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/deleteNews/${id}`);
      loadUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Id</th>
              <th scope="col">NewsPaper</th>
              <th scope="col">Year</th>
              <th scope="col">AverageDailyCirculation</th>
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
                    to={`/updateuser/${user.cid}`}
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
