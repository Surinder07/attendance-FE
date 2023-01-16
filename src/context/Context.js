import { createContext, useContext, useEffect, useState } from "react";
import studentService from "../services/studentService";

const Student = createContext()
export const StudentState = () =>{
    return useContext(Student)
}

const Context = ({ children }) => {

    const [students, setStudents] = useState([])
    const [error, setError] = useState(null)
    const [loading, setloading] = useState(false)
    const [editStudent, setEditStudent] = useState([{
        studentId: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    }])
  
    useEffect(() =>{
      const fetchData = async () =>{
           setloading(true)
        try{
            const response = await studentService.getStudents();
            setStudents(response.data)
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
        <Student.Provider value={{students, setStudents, error, loading, editStudent, setEditStudent}}>
            {children}
        </Student.Provider>
    )
}

export default Context

