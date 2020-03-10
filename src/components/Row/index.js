import React from "react";

const Row = ({ item }) => {
  const style = {
    display: "flex",
    flexBasis: "100%",
    justifyContent: "space-between"
  };
  return (
    <div className="row" style={style}>
      <div className="cell">{item.name}</div>
      <div className="cell">{item.email}</div>
      <div className="cell">{item.phone}</div>
    </div>
  );
};
export default Row;
