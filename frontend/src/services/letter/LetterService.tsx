import axios from "axios";

const API_URL = "http://localhost:8080/api/v1/letter";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";


class LetterService {

    getAllLetters(){
        return axios.get(API_URL)
    }
}

export default new LetterService();