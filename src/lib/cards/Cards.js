import React from "react";
import CardType from "./CardType";
import Load from "./../Load";
class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardTypes: []
    };
  }

  componentDidMount() {
    const CARD_SERVICE_URL =
      "https://fathomless-tundra-22713.herokuapp.com/api/v1/cards-type";
    fetch(CARD_SERVICE_URL)
      .then(result => result.json())
      .then(
        data => {
          if (data.length > 0) {
            data.map(c => {
              const card = {
                name: c.name,
                imgUrl: c.imgUrl
              };
              c.cards.unshift(card);
              return c;
            });
          }
          this.setState({
            cardTypes: data
          });
        },
        error => {
          this.setState({ isLoaded: false, error: error });
          console.log(error);
        }
      );
  }

  render() {
    if (!this.state.cardTypes) {
      return null;
    }
    const cardContents = this.state.cardTypes.map((c) => {
      return (
        <div className="col-lg-4 col-md-6 mb-4" key={c.id + c.name} >
          <CardType type={c} />
        </div>
      )
    });

    return (
      <section id="cards" className="text-center">
        <h2 className="mb-5 font-weight-bold">Vocabulary Cards</h2>
        {!this.state.cardTypes && <Load />}
        <div className="row">
          {cardContents}
        </div>
      </section>
    );
  }
}
export default Cards;
