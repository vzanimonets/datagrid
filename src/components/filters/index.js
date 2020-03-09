import React from "react";
const Filter = ({ field, onClick }) => {
  return <button onClick={onClick}>{field}</button>;
};
Filter.defaultProps = {
  onClick: () => {}
};
export default Filter;
