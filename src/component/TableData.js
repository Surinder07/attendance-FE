import React from 'react'
import { Link } from 'react-router-dom'

const TableData = ({ students, deleteEntry, editEntry}) => {
  return (
    <>
      <tbody className='bg-white'>
                            {students.map((student) => (
                                <tr key={student.studentId}>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{student?.firstName || 'Surinder'}</div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{student?.lastName || 'Singh'}</div>
                                    </td>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{student?.email || 'surinder@gmail.com'}</div>
                                    </td>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{student?.phone || '123534343'}</div>
                                    </td>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{student?.address || 'Toronto'}</div>
                                    </td>
                                    <td className=' px-6 py-4 whitespace-nowrap font-medium text-sm'>
                                        <Link to='/editStudent'>
                                            <button 
                                            className='text-indigo-600 hover:text-indigo-800 px-4 bg-transparent'
                                            onClick={() => editEntry(student.studentId)}
                                            >
                                                Edit 
                                            </button>
                                        </Link>
                                        <button
                                            className='text-indigo-600 hover:text-indigo-800 px-4 bg-transparent'
                                            onClick={() => deleteEntry(student.studentId)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
    </>
  )
}

export default TableData
