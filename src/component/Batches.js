import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import studentService from '../services/studentService'
import BatchTableData from './BatchTableData'

const Batches = () => {

    const [batches, setBatches] = useState([])
    const [loading, setloading] = useState(false)
    const [error, setError] = useState(null)

    const tableHeadings = ['Batch Name', 'Duration', 'Instructor', 'Enrolled Students']
    

    useEffect(() =>{
        const fetchData = async () =>{
             setloading(true)
          try{
              const response = await studentService.getBatches();
              setBatches(response.data)
              setloading(false)
          }
          catch(error){
              setloading(false)
              setError(error)
          }
        }
        fetchData();
        
      }, [])

  return (
    <div className='container mx-auto my-8 w-screen h-screen'>

            <div className="h-12">
                <Link to='/addBatch'><button
                    className="rounded bg-slate-600 text-white px-6 py-2 font-semibold">
                    Add Batch
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

                        <BatchTableData batches={batches} />

                    </table>)}

            </div>
        </div>
  )
}

export default Batches
