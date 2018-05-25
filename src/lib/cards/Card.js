import React from "react";
import CountDown from "./CountDown";

const Card = props => {
  return (
    [
      <div className="text-center">
        <img src={props.card.imgUrl} className="img-fluid" alt="" />
        <a href="">
          <div className="mask" />
        </a>
      </div>,
      <div className="card-body">
        {props.currentPosition === 0 && (
          <h4
            className="card-title"
            style={{
              color: "black"
            }}
          >
            {props.card.name}
          </h4>
        )}
        {props.currentPosition > 0 && <CountDown name={props.card.name} />}
        <div className="flex-row">
          {props.currentPosition > 0 && (
            <button
              onClick={props.previous}
              type="button"
              className="btn btn-outline-primary waves-effect"
            >
              {" "}
              Previous
            </button>
          )}
          {props.currentPosition < props.cardsSize - 1 && (
            <button
              type="button"
              onClick={props.next}
              className="btn btn-outline-primary waves-effect"
            >
              Next
            </button>
          )}
        </div>
      </div>
    ]
  );
};
export default Card;
