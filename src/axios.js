// axios is an alternative to fetch api in js and is widely used to interact with api calls
import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/challenge-25608/us-central1/api" // the api {cloud function} URL
});

export default instance;