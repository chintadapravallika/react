import { Component } from "react";
import DenominationItem from "../DenominationItem";

import "./index.css";

class CashWithdrawal extends Component {
  state = { CashWithdraw: this.props.denominationsList, balance: 1150 };
  amountDecrease = (id) => {
     const selectDenomination = this.state.CashWithdraw.find(
       (item) => item.id === id
     );
     if (selectDenomination && this.state.balance >= selectDenomination.value) {
    this.setState((prevState) => ({
     balance: prevState.balance - selectDenomination.value,
      }));
    }
  };

  render() {
    const {CashWithdraw, balance } = this.state;

    return (
      <div className="main">
        <div className="maincontainer">
          <div className="name">
            <h2 className="heading2">p</h2>
            <h1 className="heading1">Pravallika</h1>
          </div>
          <div className="sub">
            <h2>Your Balance</h2>
            <div>
              <h1 className="balance">{balance}</h1>
              <p>IN RUPEES</p>
            </div>
          </div>
          <div className="container">
            <h1>withdraw</h1>
            <p>CHOODE SUM (IN RUPEES)</p>

            <div className="withDraw">
              {
                
                CashWithdraw.map((eachItem) => (
                <DenominationItem
                  key={eachItem.id}
                  denomination={eachItem}
                  amountDecrease={this.amountDecrease}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CashWithdrawal;
