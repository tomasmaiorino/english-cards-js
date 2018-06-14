import React from "react";
import ReactDom from "react-dom";

class CountDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 3,
      timer: 0
    };
    this.countDown = this.countDown.bind(this);
    this.cardNameAction = this.cardNameAction.bind(this);
  }

  countDown() {
    if (this.state.counter === 1) {
      clearInterval(this.state.timer);
      this.setState({
        counter: this.state.counter - 1
      });
    } else {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  componentDidMount() {
    this.setState({
      counter: 3,
      timer: setInterval(this.countDown, 1000)
    });
  }

  cardNameAction() {
    document.getElementById('searchWord').focus();
    document.getElementById('searchWord').value = this.props.name;
  }

  render() {
    return (
      <div>
        {this.state.counter >= 1 && (
          <p className="card-text" style={{ color: "#4285F4" }}>
            {this.state.counter}
          </p>
        )}
        {this.state.counter === 0 && (
          <p className="card-text" style={{ cursor: 'pointer' }}
            onClick={this.cardNameAction}>{this.props.name} <i className="fa fa-search"></i></p>
        )}
      </div>
    );
  }
}
export default CountDown;
