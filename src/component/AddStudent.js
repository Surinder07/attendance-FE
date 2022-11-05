import React, { useState } from 'react'
import studentService from '../services/studentService';

const AddStudent = () => {

    const [student, setStudent] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: ""

    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setStudent({ ...student, [e.target.name]: value});
    };

    const saveStudent = (e) => {
        
        studentService.saveStudent(student)
        .then((response) => {
            console.log(response)

        }).catch((error) => {
            console.log(error);
        })
    }

  return (
    <div className="flex max-w-2xl shadow mx-auto border-b">
                <div className="px-8 py-8">
                    <div className="font-thin text-2xl tracking-wider">
                        <h1>Add New Student</h1>
                    </div>

                    <div className="items-center justify-center  h-14 w-full">

                        <label className="block">
                            First Name
                        </label>
                        <input 
                        type="text" 
                        name = "firstName"
                        value = {student.firstName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    
                    <div className="items-center justify-center  h-14 w-full">

                        <label className="block">
                            Last Name
                        </label>
                        <input type="text"
                               name = "lastName"
                               value={student.lastName} 
                               onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>

                    <div className="items-center justify-center  h-14 w-full">

                        <label className="block">
                            Email
                        </label>
                        <input type="email" 
                               name = "emailId"
                               value={student.emailId}
                               onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>

                    <div className="items-center justify-center  h-14 w-full my-4 space-x-4 pt-4">
                        <button  
                        onClick={saveStudent} 
                        className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                            SAVE
                        </button>
                        <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6'>
                            CLEAR
                        </button>
                    </div>

    </div>
    </div>
  )
}

export default AddStudent