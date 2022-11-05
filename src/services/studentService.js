import axios from "axios";

const STUDENT_API_BASE_URL = "http://localhost:8080/students/addStudent"

class studentService{

    saveStudent(student){
        return axios.post(STUDENT_API_BASE_URL, student);
    }
}

export default new studentService();