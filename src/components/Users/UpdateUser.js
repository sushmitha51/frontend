import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UpdateUser() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    id: "",
    newspaper: "",
    year: "",
    averagedailycirculation: "",
  });

  const { id, newspaper, year,averagedailycirculation } = user;

  useEffect(() => {
    loadUser();
  }, []);

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put("http://localhost:8080/updateNews", user);
      navigate("/");
    } catch (error) {
      console.error("Update request failed:", error);
      // Handle the error or display an appropriate message to the user
    }
  };

  const loadUser = async () => {
    try {
      const result = await axios.get("http://localhost:8080/fetchnews");
      setUser(result.data);
    } catch (error) {
      console.error("Load request failed:", error);
      // Handle the error or display an appropriate message to the user
    }
  };

  return (
    <div className='container p-5 'style={{ backgroundImage: 'url("https://w0.peakpx.com/wallpaper/370/202/HD-wallpaper-newspaper-ball-glass-silver-macro.jpg")', backgroundSize: 'cover' }}>
   <div className="row">
        <div className="col-md-4 offset-md-4 border rounded p-4 mt-5 shadow">
          <h2 className="text-center m-4">Update User</h2>
          <form onSubmit={onSubmit}>
          <div className="mb-3">
              <label htmlFor="id" className="form-label">
                NewsId
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your id"
                name="id"
                value={id}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cname" className="form-label">
                NewsPaperName
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your newspaper"
                name="newspaper"
                value={newspaper}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">
                NewsPaper Year
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your NewsPaperYear"
                name="year"
                value={year}
                onChange={onInputChange}
              />
              </div>
               <div className="mb-4">
              <label htmlFor="average" className="form-label">
                AverageDailyCirculation
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your average"
                name="averagedailycirculation"
                value={averagedailycirculation}
                onChange={onInputChange}
              />
            </div>
            <button type="submit" className="btn btn-outline-secondary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}