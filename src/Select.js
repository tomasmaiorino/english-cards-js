import React from "react";

const Select = props => {
  return (
    <select
      onChange={props.onchange}
      value={props.selected}
      className={props.classname}
      id={props.id}
    >
      {props.options.map(o => {
        return <option key={o.value} value={o.value}>{o.name}</option>;
      })}
    </select>
  );
};

export default Select;
