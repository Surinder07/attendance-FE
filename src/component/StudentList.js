import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import studentService from '../services/studentService';
import TableData from './TableData';

const StudentList = () => {

    const [loading, setloading] = useState(true)
    const [students, setStudent] = useState([null]);
    const tableHeadings = ['First Name', 'Last Name', 'Email', 'Phone', 'Address', 'Action']

    useEffect(() => {
        const fetchData = async () => {
            setloading(true);
            try {
                const response = await studentService.getStudents();
                setStudent(response.data)
            } catch (error) {
                console.log(error);
            }
            setloading(false);
        };
        fetchData();
    }, []);

    const deleteEntry = (id) => {
    //    axios.delete("http://3.137.206.69:8085/students/allStudents", students.filter(student => student.studentId === id))
        setStudent(students.filter(student => {
            return student.studentId !== id
        }))
    }

    return (
        <div className='container mx-auto my-8'>

            <div className="h-12">
                <Link to='/addStudent'><button
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Student
                </button></Link>

            </div>
            <div className='flex shadow border-b'>
                <table className='min-w-full'>
                    <thead className='bg=gray-50'>
                        <tr>
                            {tableHeadings.map((_, i) => {
                                return <th key={i} className=' font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>{tableHeadings[i]}</th>
                            })}
                        </tr>
                    </thead>
                    {!loading && (
                        <TableData students= {students} deleteEntry={deleteEntry} />
                    )}
                </table>

            </div>
        </div>
    )
}

export default StudentList