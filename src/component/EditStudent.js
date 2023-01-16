import React from 'react'
import { StudentState } from '../context/Context'
import studentService from '../services/studentService'
import { useNavigate } from 'react-router-dom'

const EditStudent = () => {
    const { editStudent, setEditStudent } = StudentState()
    const navigate = useNavigate()
    const handleChange = (e) => {
        e.preventDefault()
        setEditStudent(editStudent.map(student => {
            return { ...student, [e.target.name]: e.target.value }
        }))
    };

    const saveEditStudent = (e) => {
        e.preventDefault()
        studentService.saveEditStudent(editStudent[0])
            .then((response) => {
                console.log(response)
                alert('User saved successfully')
                navigate('/')
            }).catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            <form className="flex items-center justify-center max-w-2xl shadow mx-auto border-b">
                <div className="px-8 py-8">
                    <div className="flex items-center justify-center text-2xl tracking-wider">
                        <h1>Edit Student</h1>
                    </div>

                    <div className="items-center justify-center  h-14 w-full">
                        <label className="block">
                            First Name
                        </label>
                        <input
                            type="text"
                            name="firstName"
                            value={`${editStudent ? editStudent[0].firstName : ''}`}
                            onChange={(e) => handleChange(e)}
                            className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>

                    <div className="items-center justify-center  h-14 w-full my-4">

                        <label className="block">
                            Last Name
                        </label>
                        <input type="text"
                            name="lastName"
                            value={`${editStudent ? editStudent[0].lastName : ''}`}
                            onChange={(e) => handleChange(e)}
                            className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>

                    <div className="items-center justify-center  h-14 w-full my-4">

                        <label className="block">
                            Email
                        </label>
                        <input type="email"
                            name="email"
                            value={`${editStudent ? editStudent[0].email : ''}`}
                            onChange={(e) => handleChange(e)}
                            className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <div className="items-center justify-center  h-14 w-full my-4">

                        <label className="block">
                            Phone
                        </label>
                        <input type="tel"
                            name="phone"
                            value={`${editStudent ? editStudent[0].phone : ''}`}
                            onChange={(e) => handleChange(e)}
                            className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <div className="items-center justify-center  h-14 w-full">

                        <label className="block">
                            Address
                        </label>
                        <input type="address"
                            name="address"
                            value={`${editStudent ? editStudent[0].address : ''}`}
                            onChange={(e) => handleChange(e)}
                            className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>

                    <div className="items-center justify-center  h-14 w-full my-4 space-x-4 pt-4">
                        <button
                            onClick={saveEditStudent}
                            className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                            SAVE
                        </button>
                        
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditStudent
