import React from "react";
const classNames = require("classnames");

const Row = ({ item, handleSelect, selected, allSelected }) => {
  const rowClass = classNames({
    row: true,
    selected: selected[item.id] || allSelected
  });
  return (
    <div className={rowClass}>
      <input
        onChange={e => handleSelect(e)}
        type="checkbox"
        name={item.id}
        checked={allSelected}
      ></input>
      <div className="cell" style={{ width: "auto" }}>
        {item.id}
      </div>
      <div className="cell">{item.name}</div>
      <div className="cell">{item.email}</div>
      <div className="cell">{item.phone}</div>
      <div className="cell">{item.date.toLocaleString()}</div>
      <div className="cell" style={{ width: "auto" }}>
        {item.age}
      </div>
    </div>
  );
};
export default Row;
