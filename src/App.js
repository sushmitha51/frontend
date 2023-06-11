import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Layout/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import UpdateUser from './components/Users/UpdateUser';
import AddUser from './components/Users/AddUser';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
function App() {
  return (
    <div className="App">
     
        <Navbar />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/adduser" element={<AddUser />} />
          <Route exact path="/updateuser/" element={<UpdateUser />} />
          <Route exact path="/" element={<LoginPage />}/>
          <Route exact path="/SignupPage" element={<SignupPage />}/>
        </Routes>
      
    </div>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import SignupPage from './components/SignupPage';
//  function App() {
//   return (
//   <div className="App">
//      <SignupPage />
//      </div>
//    );
//     }
// export default App;
