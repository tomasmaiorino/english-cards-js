import React from "react";
import Load from './../Load';

const Result = props => {
  //console.log(props.result);
  return (
    <div className="col-md-8">
      {props.showLoad && <Load />}
      {props.result.map(v => {
        return (
          <div>
            <h6 className="mb-3" style={{
              textAlign: 'left'
            }} ><strong>{v.type}</strong></h6>
            <ul>
              {v.content.map(c => {
                return <li style={{
                  textAlign: 'left'
                }}>{c}</li>
              })};
          </ul>
          </div>
        );
      })}
    </div>

  );
};
export default Result;
