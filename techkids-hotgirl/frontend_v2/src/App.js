import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { Component } from 'react';
import axios from './axios';
import MainContent from './components/MainContent'

import NavBar from './components/NavBar';


const Link = (props) => <a href={props.children} target="_blank"> {props.children}</a>


class App extends Component {
  state ={
    posts: [],
    searchString: ""
  };

  componentDidMount(){
    axios
      .get("/api/post/")
      .then(data => {
        // console.log(data.data)
        this.setState({posts: data.data.data}, () => {
           console.log(this.state.posts[0].image);
        })
        
      })
      .catch(err => console.log(err))

  }

  _onSearchChange = text => this.setState({searchString: text})

  _onLogin = () => {
    console.log("ok");
    axios
      .post("/api/auth/login", {
        username: "vinh11",
        password: "213456"
      })
      .then(response =>{ 
        this.setState({
          username: response.data.user.username,
          id: response.data.user._id
        })
        // console.log(this.state.username)
      }
        // console.log("ok")
      )
      .catch(err => console.error(err))
  }

  render() {
    const displayedImages = this.state.posts.filter(post => post.title.includes(this.state.searchString))
    // console.log(this.state.username)
    return (
      // <div style={{backgroundColor: "#FF0000"}}></div>
      <div className="App">
        <NavBar 
          _onSearchChange = {this._onSearchChange} 
          username = {this.state.username} 
          _onLogin = {this._onLogin}/>
        <MainContent posts = {displayedImages}/>
        
      </div>
    );
  }
}

export default App;