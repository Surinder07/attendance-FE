import React from 'react'
import { Link } from 'react-router-dom'

const BatchTableData = ({ batches }) => {

    console.log(batches)

  return (
    <>
      <tbody className='bg-white'>
                            {batches.map((batch) => (
                                <tr key={batch.batchId}>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{batch?.batchName }</div>
                                    </td>
                                    <td className='px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{batch?.duration }</div>
                                    </td>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                        <div className='text-sm text-gray-500 flex items-center justify-center'>{batch?.instructor}</div>
                                    </td>
                                    <td className=' px-6 py-4 whitespace-nowrap'>
                                    <Link to ='/studentList'>
                                    <div className='text-sm text-gray-500 flex items-center justify-center'>Students</div>
                                    </Link>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
    </>
  )
}

export default BatchTableData
