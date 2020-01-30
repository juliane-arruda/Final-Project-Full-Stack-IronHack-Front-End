import axios from 'axios';

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: process.env.REACT_APP_API,
      withCredentials: true
    })
  }

  signup(username, password, email, role) {
    return this.service.post('/signup', {
        username,
        password,
        email,
        role
      })
      .then(response => response.data)
  }

  login(username, password) {
    return this.service.post('/login', {
        username,
        password
      })
      .then(response => response.data)
  }

}

export default AuthService;