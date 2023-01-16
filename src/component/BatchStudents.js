import React from 'react'
import { StudentState } from '../context/Context';
import TableData from './TableData'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners';

const BatchStudents = () => {

    // do not need this if we fix getstudents apis and fill the batch array. we can reuse the student list component

    const { students, setStudents, error, loading, setEditStudent } = StudentState()

    const tableHeadings = ['First Name', 'Last Name', 'Email', 'Phone', 'Address']

    console.log(students)

    // const filteredStudents = students.filter

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

                        <TableData students={students} />

                    </table>)}

            </div>
        </div>
  )
}

export default BatchStudents
