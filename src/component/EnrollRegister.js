import React, { useEffect, useState } from 'react'
import { StudentState } from '../context/Context'
import studentService from '../services/studentService'


const EnrollRegister = () => {

    const [allBatches, setAllBatches] = useState([])
    const [studentId, setStudentId] = useState('')
    const [batchId, setBatchId] = useState('')
    const { students } = StudentState()

    useEffect(() =>{
        const data = async() =>{
            try{
                const batches = await studentService.getBatches()
                setAllBatches(batches.data)
            }
            catch(error){
                console.log(error)
            }
        }
        data()
    }, [])

    console.log(allBatches)

    const registerStudent = () =>{
        const data = {
            studentId: studentId.toString(), 
            batchId: batchId.toString()
        }
        studentService.enrollRegister(data)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }

  return (
    <div>
        {/* {allBatches.map(batch =>{
            return <div key={batch.batchId} className='flex gap-4'>
                <h1>{batch.batchId}</h1>
                <h1>{batch.batchName}</h1>
                <h1>{batch.batchNumber}</h1>
                </div>
        })} */}
        <select onChange ={(e) => setBatchId(e.target.value)}>
            <option>Select course</option>
            {allBatches.map(batch =>{
                return <option key={batch.batchId} 
                value={batch.batchId}
                >{batch.batchName}</option>
            })}
        </select>
        <div>
        <select onChange ={(e) => setStudentId(e.target.value)}>
            <option>Select Student</option>
            {students.map(student =>{
                return <option key={student.studentId} 
                value={student.studentId}
                >{student.firstName} {student.lastName}</option>
            })}
        </select>
        </div>
        <div>
            <button onClick ={registerStudent}>Add</button>
        </div>
    </div>
  )
}

export default EnrollRegister
