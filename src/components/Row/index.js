import React from "react";

const Row = ({ item }) => {
  const style = {
    display: "flex",
    flexBasis: "100%",
    justifyContent: "space-between"
  };
  return (
    <div className="row" style={style}>
      <div>{item.name}</div>
      <div>{item.website}</div>
      <div>{item.email}</div>
      <div>{item.phone}</div>
    </div>
  );
};
export default Row;
