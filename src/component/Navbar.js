import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import userimage from '../Images/userimg.jfif'

const Navbar = () => {

  const [openUser, setOpenUser] = useState(false)

  return (
    <div className="flex justify-between items-center bg-gray-800">
      <div className="h-16 pl-4 flex items-center justify-center">
        <Link to='/' className="text-white font-bold ">Student Attendance System</Link>
      </div>
      <div className='flex'>
        <ul className='flex gap-4 px-4 items-center justify-center text-white'>
          <Link to='/studentList'><li>Students</li></Link>
          <Link to='/lessons'><li>Lessons</li></Link>
          <Link to='/batches'><li>Batches</li></Link>
          <Link to='/enrollRegister'><li>Enroll</li></Link>
        </ul>
        <div className='flex items-center justify-center pr-4'
          onClick={() => setOpenUser(!openUser)}>
          <img className='w-4 rounded-full' src={userimage} />
        </div>
      </div>
      {openUser && <div className='w-20 h-20 rounded-md bg-white absolute right-4 top-10'>
         <ul>
          
          <li>Login</li>
         </ul>
      </div>
      }
    </div>
  )
}

export default Navbar