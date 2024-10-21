import React, {Component} from 'react';
import './index.css';

class LettersCalculator extends Component{
 state={
       count:0,inputValue:" "
 }
 handleChange = (event)=>{
    const value=event.target.value
    this.setState({
      inputValue:value,
      count:value.length
    })
 }

  render(){ 
     const {count,inputValue}= this.state
  return (
    <div className="container">
      <div className='sub'>
      <h1>Calculate the Letters you enter</h1>
      <p>Enter the phrase</p>
        <input
          type="text" placeholder="Calculate"
          value={inputValue}
          onChange={this.handleChange}
        />
        <p className='para'>No. of letters: {count}</p>
        </div>
        <div>
        <img src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' alt='avatar'/>
        </div>
      </div>
  );
  }
}
export default LettersCalculator;