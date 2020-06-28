import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-burger-app-cdd33.firebaseio.com/' 
});

export default instance;