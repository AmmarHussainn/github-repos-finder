import React,{Component}from 'react';
import UserForm from './components/User'
import axios from 'axios';
import './App.css';

// https://api.github.com/users/john
class App extends Component {
  state={
    repos : null
  }
     getUser = (e) => {
    e.preventDefault();
    const user = e.target.elements.username.value;
   axios.get(`https://api.github.com/users/${user}`)
   .then((res) =>{
    
     const repos = res.data.public_repos;
     console.log(repos);

     this.setState({repos});
     
   })
    
  }
render(
  
){
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='App-title'>HTTP Calls in React</h1>
       
      </header>
      <UserForm className="Web" getUser = {this.getUser}/>
      {this.state.repos ? <p className="para">Number of Repos:{this.state.repos}</p>: <p className="para">Please Enter a username</p>}
    </div>
  );
}

}
export default App;
