
 import {Component} from 'react'
 import './index.css'
 class Counter extends Component{
    state = {count:0}
    onIncrement = () => {
        this.setState(prevState =>({
            count:prevState.count+1,
        }))
    }
    onDecrement = () =>{
        this.setState(prevState =>({
            count:prevState.count-1,
        }))
    }

    render(){
        const {count} = this.state
    return(
        <div className = 'container'>
            <h1 className='heading'>Counter</h1>
            <p className='para'>{count}</p>
            <div>
                <button className='in' onClick={this.onIncrement }>Increase</button>
                <button className='in' onClick={this.onDecrement }>Decrease</button>
            </div>
        </div>
        )
    }
 }

 export default Counter