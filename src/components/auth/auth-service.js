import axios from 'axios';

class AuthService {

  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API,
      withCredentials: true
    })
  }

  signup(username, password, email, role, petName, petDescription, imageUrl, petLocation, petDate, breed, type) {
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
        breed,
        type,
      })
      .then(response =>  response.data
        // this.service.get(`/pet/search/${response.data.aNewPet._id}`)
        //   .then(res => 
        //     res
        //   )
      
    )
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

  search(id) {
    return this.service.get(`/pet/search/${id}`)
    .then(response => response.data)

  }

  logout() {
    return this.service.get('/logout')
    .then(response => response.data)
  }
}

export default AuthService;
