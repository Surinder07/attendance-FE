import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 flex items-center justify-center">
      <Link to='/' className="text-white font-bold flex items-center justify-center">Student Attendance System</Link>
      </div>
    </div>
  )
}

export default Navbar