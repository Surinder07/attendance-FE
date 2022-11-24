                                                      


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


