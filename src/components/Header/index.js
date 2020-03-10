import React from "react";
const Header = ({ column, onClick }) => {
  return <div onClick={onClick}>{column}</div>;
};
Headers.defaultProps = {
  onClick: () => {},
  column: ""
};
export default Header;
