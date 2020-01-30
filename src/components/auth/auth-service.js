import axios from 'axios';

class AuthService {

    constructor() {
        this.service = axios.create({
            baseURL: process.env.REACT_APP_API,
            withCredentials: true
        })
    }
    
    signup(username, password, email, role, petName, petDescription, imageUrl, petLocation, petDate) {
        return this.service.post('/signup', {
            username,
            password,
            email,
            role,
            petName,
            petDescription,
            imageUrl,
            petLocation,
            petDate,
        })
        .then(response => response.data)
    }

    handleUpload(theFile) {
        // console.log('file in service: ', theFile)
        return this.service.post('/upload', theFile)
          .then(res => res.data)
          .catch(error => console.log(error));
      }

    login(username, password) {
        return this.service.post('/login', {
            username,
            password
        })
        .then(response => response.data)
        }



    AddPet(petName, petDescription, imageUrl, petLocation, petDate) {
        return this.service.post('/add-pet', {
            petName,
            petDescription,
            imageUrl,
            petLocation,
            petDate
            })
            .then(response => response.data)
        }


export default AuthService;

