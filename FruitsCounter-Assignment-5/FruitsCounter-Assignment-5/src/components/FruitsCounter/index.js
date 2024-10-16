import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onIncrementMangoes = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }

  onIncrementBananas = () => {
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1 className="heading">
            Bob ate {mangoesCount} mangoes {bananasCount} bananas
          </h1>

          <div className="fruitsContainer">
            <img
              className="kk"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mangeos"
            />
            <img
              className="kk"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="bananas"
            />
          </div>

          <div className="buttonsContainer">
            <button
              type="button"
              className="mg"
              onClick={this.onIncrementMangoes}
            >
              Eat Mangoes
            </button>
            <button
              type="button"
              className="mg"
              onClick={this.onIncrementBananas}
            >
              Eat bananas
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
