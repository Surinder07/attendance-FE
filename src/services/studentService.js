import axios from "axios";

const STUDENT_API_BASE_URL = "http://3.137.206.69:8085/students/addStudent"
const STUDENT_API_GET_BASE_URL = "http://3.137.206.69:8085/students/allStudents"


class studentService{

    saveStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }
    getStudents(){
        return axios.get(STUDENT_API_GET_BASE_URL);
    }
}

export default new studentService();