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


                                                            ADD NEW HOME PAGE :


import React from "react";
import './home.css';




function Home()
{
    const myStyle={
        backgroundImage: 
 "url('https://i.imgur.com/YDwNPZg.jpg')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'40px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        justifyContent:"right"
    };
   
    return(
       <div>
      <div style={myStyle} >
        
              <h1 style={{textAlign:"Center", marginTop:"0", padding:80}}>Welcome to STudent Attendence System </h1> 
                         
              </div>
             
              <div class="footer wow fadeIn" data-wow-delay="0.3s">
                            <div class="footer-contact">
                                <h3>Office Contact</h3>
                                <p><i class="fa fa-map-marker-alt"></i>123 Street, Ontario, Canada</p>
                                <p><i class="fa fa-phone-alt"></i>+012 345 67890</p>
                                <p><i class="fa fa-envelope"></i>info@example.com</p>
                             
                        </div>
                            
                    
                
                <div class=" footer-menu">
                    <div class="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
            
                <div class=" copyright">
                     <p>&copy; <a href="#">Student Attendence System</a>, All Right Reserved.</p>
                        
					</div>
                    </div>
                    </div>
            
    </div>


 


 );
}
export default Home;


