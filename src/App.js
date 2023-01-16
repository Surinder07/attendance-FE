import './App.css';
import AddStudent from './component/AddStudent';
import StudentList from './component/StudentList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage';
import Navbar from './component/Navbar';
import EditStudent from './component/EditStudent';
import EnrollRegister from './component/EnrollRegister';
import AddBatch from './component/AddBatch';
import Batches from './component/Batches';

function App() {

   return (
      <>
         <BrowserRouter>
            <Navbar/>
               <Routes>
                  <Route exact path="/" element={<HomePage />}></Route>
                  <Route path="/studentList" element={<StudentList />}></Route>
                  <Route path="/addStudent" element={<AddStudent />}></Route>
                  <Route path="/editStudent" element={<EditStudent />}></Route>
                  <Route path="/addbatch" element={<AddBatch />}></Route>
                  <Route path="/enrollRegister" element={<EnrollRegister />}></Route>
                  <Route path="/batches" element={<Batches />}></Route>

               </Routes>
               
            
         </BrowserRouter>

      </>
   );
}

export default App;
