import React from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader} from 'react-spinners';
import { StudentState } from '../context/Context';
import TableData from './TableData';

const StudentList = () => {

    const { students, setStudents, error, loading, setEditStudent } = StudentState()
    
    const tableHeadings = ['First Name', 'Last Name', 'Email', 'Phone', 'Address', 'Action']

    const deleteEntry = (id) => {
        //    axios.delete("http://3.137.206.69:8085/students/allStudents", students.filter(student => student.studentId === id))
        setStudents(students.filter(student => {
            return student.studentId !== id
        }))
    }

    const editEntry = (id) =>{
        setEditStudent(students.filter(student => {
            return student.studentId === id
        }))
    }
    console.log(students)

    return (
        <div className='container mx-auto my-8 w-screen h-screen'>

            <div className="h-12">
                <Link to='/addStudent'><button
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Student
                </button></Link>
            </div>

            <div className='flex items-center justify-center shadow border-b'>
                {loading ? (
                    <div className='flex items-center justify-center'>
                        <ClipLoader color="#36d7b7" />
                    </div>
                ) : error ? (
                    <div>
                        <p>{error.message}</p>
                    </div>) :
                    (<table className='min-w-full'>
                        <thead className='bg=gray-50'>
                            <tr>
                                {tableHeadings.map((_, i) => {
                                    return <th key={i} className='font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>{tableHeadings[i]}</th>
                                })}
                            </tr>
                        </thead>

                        <TableData students={students} deleteEntry={deleteEntry} editEntry={editEntry} />

                    </table>)}

            </div>
        </div>
    )
}

export default StudentList