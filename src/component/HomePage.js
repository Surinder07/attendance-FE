import React from 'react'
import homeImage from '../Images/homeimg.jpg'
import BatchStudents from './BatchStudents'
import Footer from './Footer'


const HomePage = () => {
    return (
        <div className='flex flex-col'>
            <div className='w-full h-100 overflow-hidden '>
                <img src={homeImage} alt='' className='w-full h-full' />
            </div>
            <div className='flex items-center justify-center w-full h-auto overflow-hidden '>
            <BatchStudents />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default HomePage
