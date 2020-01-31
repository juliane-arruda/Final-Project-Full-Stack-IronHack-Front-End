import React, { Component } from 'react';



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };


  }
  render() {

    return (
      <div className="Home">
        <h1>I cat your pet</h1>

       


      </div>
    )
  }
}

export default Home;
