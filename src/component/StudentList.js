import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import studentService from '../services/studentService';


const StudentList = () => {

    const navigate = useNavigate();

    const [loading, setloading] = useState(true)
    const [students, setstudent] = useState([null]);

    useEffect(() => {
     
        const fetchData = async() => {
            setloading(true);
            try {
                const response = await studentService.getStudents();
                setstudent(response.data)
            } catch (error) {
                console.log(true);
            }
            setloading(false);
        };
        fetchData();
    }, []);
    

  return (
    <div className='container mx-auto my-8'>
       
          <div className="h-12">
              <button 
              onClick={() => navigate("/addStudent")}
              className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                  Add Student
              </button>
          </div>
          <div className='flex shadow border-b'>
              <table className='min-w-full'>
                  <thead className='bg=gray-50'>
                      <tr>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>First Name</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Last Name</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Email</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Phone</th>
                          <th className='text-left font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Address</th>
                          <th className='text-right font-medim text-gray-500 uppercase tracking-wider py-3 px-6'>Action</th>
                      </tr>
                  </thead>
                  {!loading && (
                  <tbody className='bg-white'>
                      
                          {students.map ((student) => (
                          <tr>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500'>{student?.firstName||'Surinder'}</div>
                                    </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500'>{student?.lastName||'Singh'}</div>
                                    </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500'>{student?.email||'surinder@gmail.com'}</div>
                                    </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500'>{student?.phone||'123534343'}</div>
                                    </td>
                                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500'>{student?.address||'Toronto'}</div>
                                    </td>
                                    <td className='text-right px-6 py-4 whitespace-nowrap font-medium text-sm'>
                                        <a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                                        <a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Delete</a>
                                    </td>
                          </tr>
                        
                     ))}
                      
                  </tbody>
                  )}
              </table>

          </div>
    </div>
  )
}

export default StudentList