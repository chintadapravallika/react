import { Component } from 'react';
import './index.css'
 
class RandomNumberGenerator extends Component{
    state = {
        count:0
    }
    generate = () =>{
        const randomNum = Math.floor(Math.random() * 100)
        this.setState({count:randomNum})
    }
    render(){
        const{count} = this.state
        return(
            <div className='main'>
                <div className='sub'>
                <h1 className='heading'>Random Number</h1>
                <p className='para'>Generate a random number in the range of 0 to 100</p>
                <button type='button' className='button' onClick={this.generate}
                >Generate
                </button>
                <p className='para1'>{count}</p>
                </div>
            </div>
        )
    }
}
export default RandomNumberGenerator