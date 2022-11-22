import React, { useState, useEffect } from 'react'
import studentService from '../services/studentService';

const AddStudent = () => {

    const [student, setStudent] = useState({
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        phone:'',
        address:""

    });
    const [formValues, setFormValues] = useState(student);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) =>{
        const value = e.target.value;
        setFormValues({ ...formValues, [e.target.name]: value});
    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
        if (!values.firstName) {
          errors.firstName = "FirstName is required!";
        }
        if (!values.lastName) {
            errors.lastName = "LastName is required!";
          }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.phone) {
          errors.phone = "Phone is required";
        } else if (values.phone.length < 4) {
          errors.phone = "phone must be more than 4 characters";
        } else if (values.phone.length > 10) {
          errors.phone = "phone cannot exceed more than 10 characters";
        }
        if (!values.address) {
            errors.address = "Address is required!";
          }
        return errors;
      };
    

    

    const saveStudent = (e) => {
        
        e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    };


    const resetInputField = () => {
      setFormValues("");
    };

  return (
    <form >
    <div className="flex max-w-2xl shadow mx-auto border-b">
                <div className="px-8 py-8">
                    <div className="font-thin text-2xl tracking-wider">
                        <h1>Add New Student</h1>
                    </div>

                    <div className="items-center justify-center  h-14 w-full">

                        <label className="block">
                            First Name
                        </label>
                        <input 
                        type="text" 
                        name = "firstName"
                        value = {formValues.firstName}
                        onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <p>{formErrors.firstName}</p>
                    
                    <div className="items-center justify-center  h-14 w-full my-4">

                        <label className="block">
                            Last Name
                        </label>
                        <input type="text"
                               name = "lastName"
                               value={formValues.lastName} 
                               onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <p>{formErrors.lastName}</p>

                    <div className="items-center justify-center  h-14 w-full my-4">

                        <label className="block">
                            Email
                        </label>
                        <input type="email" 
                               name = "email"
                               value={formValues.email}
                               onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <p>{formErrors.email}</p>
                    <div className="items-center justify-center  h-14 w-full my-4">

                        <label className="block">
                            Phone
                        </label>
                        <input type="phone" 
                               name = "phone"
                               value={formValues.phone}
                               onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <p>{formErrors.phone}</p>
                    <div className="items-center justify-center  h-14 w-full">

                        <label className="block">
                            Address
                        </label>
                        <input type="address" 
                               name = "address"
                               value={formValues.address}
                               onChange={(e) => handleChange(e)}
                        className='h-10 w-96 border mt-2 px-2 py-2'></input>
                    </div>
                    <p>{formErrors.address }</p>

                    <div className="items-center justify-center  h-14 w-full my-4 space-x-4 pt-4">
                        <button  
                        onClick={saveStudent} 
                        className='rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6'>
                            SAVE
                        </button>
                        <button className='rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6' onClick={resetInputField}>
                            CLEAR
                        </button>
                    </div>

    </div>
    </div>
    </form>
  )
}

export default AddStudent