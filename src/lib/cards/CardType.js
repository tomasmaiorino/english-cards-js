import React from "react";
import Card from "./Card";

class CardType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPosition: 0
    };
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    this.setState({
      currentPosition: this.state.currentPosition - 1
    });
    // console.log(this.state.currentPosition);
  }

  next() {
    this.setState({
      currentPosition: this.state.currentPosition + 1
    });
    // console.log(this.state.currentPosition);
  }

  render() {
    if (!this.props.type) {
      return null;
    }
    const card = this.props.type.cards[this.state.currentPosition];
    return (
      <div className="card" key={Math.random} >
        <Card
          key={Math.random}
          previous={this.previous}
          next={this.next}
          card={card}
          currentPosition={this.state.currentPosition}
          cardsSize={this.props.type.cards.length}
        />
      </div>
    );
  }
}
export default CardType;
