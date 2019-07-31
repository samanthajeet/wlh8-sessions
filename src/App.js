import React, {Component} from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = { 
    username: '',
    input: ''
   }

   handleChange(e){
     this.setState({
       input: e
     })
   }

   login = async () => {
     const username = await axios.post('/api/points')
     this.setState({username: username.data})
   }

  render() { 
    return ( 
      <div className="App">
        <h1>login here</h1>
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" placeholder="username"/>
        <button>login</button>
      </div>
     );
  }
}
 
export default App;