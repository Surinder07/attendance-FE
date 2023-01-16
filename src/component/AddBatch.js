import React, { useState } from 'react'
import studentService from '../services/studentService'

const AddBatch = () => {

    const [batch, setBatch] = useState({
        batchName: "",
        batchNumber: "",
        startDate: "",
        endDate: "",
        duration: "",
        instructor: ""
    })

    const handleChange = (e) => {
        const value = e.target.value
        setBatch({ ...batch, [e.target.name]: value })
    }

    const addBatch = (e) => {
        e.preventDefault()
        studentService.addBatch(batch)
            .then((response) => {
                console.log(response)

            }).catch((error) => {
                console.log(error);
            })
        setBatch({
            batchName: "",
            batchNumber: "",
            startDate: "",
            endDate: "",
            duration: "",
            instructor: ""
        })
    }


    return (

        <form className="flex items-center justify-center max-w-2xl shadow mx-auto border-b">
            <div className="px-8 py-8">
                <div className="flex items-center justify-center text-2xl tracking-wider">
                    <h1>Add Batch</h1>
                </div>

                <div className="items-center justify-center  h-14 w-full">
                    <label className="block">
                        Batch Name
                    </label>
                    <input
                        type="text"
                        name="batchName"
                        value={batch.batchName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>

                <div className="items-center justify-center  h-14 w-full my-4">

                    <label className="block">
                        Batch Number
                    </label>
                    <input type="text"
                        name="batchNumber"
                        value={batch.batchNumber}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>

                <div className="items-center justify-center  h-14 w-full my-4">

                    <label className="block">
                        Start Date
                    </label>
                    <input type="text"
                        name="startDate"
                        value={batch.startDate}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
                <div className="items-center justify-center  h-14 w-full my-4">

                    <label className="block">
                        End Date
                    </label>
                    <input type="text"
                        name="endDate"
                        value={batch.endDate}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
                <div className="items-center justify-center  h-14 w-full my-4">

                    <label className="block">
                        Duration
                    </label>
                    <input type="text"
                        name="duration"
                        value={batch.duration}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>
                <div className="items-center justify-center  h-14 w-full my-4">

                    <label className="block">
                        Instructor
                    </label>
                    <input type="text"
                        name="instructor"
                        value={batch.instructor}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                </div>

                <div className="items-center justify-center  h-14 w-full my-4 space-x-4 pt-4">
                    <button
                        onClick={addBatch}
                        className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                        Add
                    </button>

                </div>

            </div>
        </form>

    )
}

export default AddBatch
