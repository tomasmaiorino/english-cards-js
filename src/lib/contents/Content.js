import React from 'react';


const Content = (props) => {

  if (!props.content.isVisible) {
    return null;
  }
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: props.content.content }}></div>
      <div className="row">
        <div className="col-md-6">
          {props.currentPosition !== 0 && (
            <button onClick={props.previousAction} className="btn btn-outline-primary waves-effect" type="button">Previous</button>
          )}
        </div>
        <div className="col-md-6 text-right">
          {props.currentPosition !== props.contentLength - 1 && (
            <button onClick={props.nextAction} className="btn btn-outline-primary waves-effect" type="button">Next</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Content;
