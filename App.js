import React, { Component } from 'react';
import './App.css';


/*class App extends Component {
  
  constructor(){
    super()
    this.state = {
      count: 0
    }
    this.handleClick = this.handleClick.bind(this)
    this.decreaseCount = this.decreaseCount.bind(this)
  }

  handleClick(){
    this.setState(prevState =>{

      return{
       count : prevState.count + 1
      }    
    })
    
  }

  decreaseCount(){
    this.setState(prevState =>{

      return{
        count : prevState.count - 1
      }
    })

  }

  render() {
    
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click!</button>
        <button onClick={this.decreaseCount}>Click minus</button>
      </div>
    );
  }
}*/

class App extends Component{

  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){

    setTimeout(() =>{
      this.setState({
        isLoading: false

      })
    }, 1500)
  }

  render(){
    return(
        <div>
          {this.state.isLoading ? <h1>Loading...</h1> : <Conditional/>}
        </div>
      )
  }

}

//conditional rendering


/*class App extends Component{

  constructor(){
    super()
    this.state = {
        isLoggedIn:false

    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){

    this.setState(prevState => {
      return{
        
        isLoggedIn: !prevState.isLoggedIn
      }

    })
  }

return(){
  let buttontxt = this.state.isLoggedIn ? "Logged out" : "Logged in"
  return(
      <div>
        {
          <button onClick={this.handleClick}>{buttontxt}</button>
        }

      </div>
    )
}

}
*/
export default App;



