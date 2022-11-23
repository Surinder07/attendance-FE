Original file 


import './App.css';
import Navbar from './component/Navbar';
import AddStudent from './component/AddStudent';
import StudentList from './component/StudentList';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <>
  <BrowserRouter>
     <Navbar/>
     <Routes>
        <Route index element = {<StudentList/>}></Route>
        <Route path="/" element={<StudentList/>}></Route>
        <Route path ="/StudentList" element={<StudentList/>}></Route>
        <Route path = "/addStudent" element={<AddStudent/>}></Route>

     </Routes>
  
     </BrowserRouter>

  </>
  );
}

export default App;



CHANGED FILE


import './App.css';
import Navbar from './component/Navbar';
import AddStudent from './component/AddStudent';
import Batches from './component/Batches';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from './component/Home';

function App() {
  return (
  <>
  <BrowserRouter>
  <div className="bg-gray-800">
      <div className="h-16 flex items-center">
      <p className="text-white font-bold">Student Attendance System</p>
      </div>
      <div classname = "nav" style={{
                    display:"flex",
                   background: 'bg-gray-800',
                    padding: '0px 2px 0px 1400px',
                    fontSize: '25px',
                    position: "relative",                   
                    alignItems: "left",
                    justifyContent: "space-auto",
                    maxWidth: "225px"

                    }}>
                      <li style={ {float: "right", display: "block", color: "black"}}>
                    <div style={{ margin: '5px' }}>
                        <NavLink to="/" style={({ isActive }) => ({ 
                            color: isActive ? 'Darkgray' : 'white' })}>
                            Home
                        </NavLink>
                    </div>
                    </li>
                     
               
               
                    <li style={ {float: "right", display: "block", color: "black"}}>
                    <div style={{ margin: '5px' }}>
                        <NavLink to="/Batches" style={({ isActive }) => ({ 
                            color: isActive ? 'Darkgray' : 'white' })}>
                            Batches
                        </NavLink>
                        </div>
                    </li>
                 
                    <li style={ {float: "right", display: "block", color: "black"}}>
                    <div style={{ margin: '5px' }}>
                        <NavLink to="/Instructors" style={({ isActive }) => ({ 
                            color: isActive ? 'Darkgray' : 'white' })}>
                            Instructors
                        </NavLink>
                        </div>
                    </li>
           
                        <li style={ {float: "right", display: "block", color: "black"}}>
                    <div style={{ margin: '5px' }}>
                        <NavLink to="/services" style={({ isActive }) => ({ 
                            color: isActive ? 'Darkgray' : 'white' })}>
                            Services
                        </NavLink>
                        </div>
                    </li>
              
      
    </div> 
    </div>
    
     <Navbar/>
     <Routes>
     <Route path="/Home" element={<Home/>}></Route>
        <Route index element = {<Home/>}></Route>
        
        <Route path ="/Batches" element={<Batches/>}></Route>
        <Route path = "/addStudent" element={<AddStudent/>}></Route>

     </Routes>
  
     </BrowserRouter>

  </>
  );
}

export default App;


