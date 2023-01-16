import axios from "axios";

const STUDENT_API_BASE_URL = "http://3.137.206.69:8085/students/addStudent"
const STUDENT_API_GET_BASE_URL = "http://3.137.206.69:8085/students/allStudents"
const STUDENT_API_UPDATE_URL = "http://3.137.206.69:8085/students/updateStudent"
const BATCH_API_BASE_URL = "http://3.137.206.69:8085/batch/allBatches"
const ENROLLMENT_REGISTER_BASE_URL = "http://3.137.206.69:8085/enrollment/enrollStudent"
const BATCH_API_POST_BASE_URL = "http://3.137.206.69:8085/batch/addBatch"

class studentService{

    saveStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }
    getStudents(){
        return axios.get(STUDENT_API_GET_BASE_URL);
    }
    saveEditStudent(student){
        return axios.post(STUDENT_API_UPDATE_URL, student)
    }
    deleteStudents(students, id){
        return axios.delete(STUDENT_API_GET_BASE_URL,students.filter(student=>{
            return student.studentId === id
        }))
    }
    getBatches() {
        return axios.get(BATCH_API_BASE_URL)
    }
    enrollRegister(data) {
        return axios.post(ENROLLMENT_REGISTER_BASE_URL, data )
    }
    addBatch(batch) {
        return axios.post(BATCH_API_POST_BASE_URL, batch)
    }
}

export default new studentService();
