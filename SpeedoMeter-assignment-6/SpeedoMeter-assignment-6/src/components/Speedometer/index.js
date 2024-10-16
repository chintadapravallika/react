import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {
    speed: 0,
  }

  accelerate = () => {
    this.setState(prevState => {
      if (prevState.speed < 200) {
        return {speed: prevState.speed + 10}
      }
      return null
    })
  }

  applyBrake = () => {
    this.setState(prevState => {
      if (prevState.speed > 0) {
        return {speed: prevState.speed - 10}
      }
      return null
    })
  }

  render() {
    const {speed} = this.state

    return (
      <div className="main">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="mph"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speed"
        />
        <p className="para">Speed is {speed}mph</p>
        <h2 className="min">Min Limit is 0mph, Max Limit is 200mph </h2>

        <div className="button">
          <button type="button" className="rate" onClick={this.accelerate}>
            Accelerate
          </button>
          <button type="button" className="break" onClick={this.applyBrake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
