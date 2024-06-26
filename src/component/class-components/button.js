import { Component } from "react";
import { Card } from "../../component/card/card.js";

class ButtonComponentClass extends Component {
  state = {
    text1: "subscribe",
    text2: "subscribe",
    isSubscribe: true,
  };

  subscribeHandler = () => {
    console.log("button clicked");

    this.setState({
      isSubscribe: !this.state.isSubscribe,
    },()=>{ }
  );
    console.log(this.state.isSubscribe, "outside the setState");
  };

  render() {
    return (
      <>
        <button onClick={this.subscribeHandler}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>

        {this.state.isSubscribe ? (
          <>
            <h2>Thanks for subscribing, enjoy the prenium content</h2>
            <Card />
          </>
        ) : (
          <h2>Please subscribe to access the premium content</h2>
        )}
      </>
    );
  }
}

export default ButtonComponentClass;

//inheritence : acquiring properties and methods parent class
