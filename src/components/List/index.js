import React from "react";
import Row from "../Row";
import PropTypes from "prop-types";
//import style from "./MoviesList.css";

function List(props) {
  const { items } = props;
  const itemsList = items.map((item, key) => {
    const RowProps = { item, key };
    return <Row {...RowProps} />;
  });

  return <div className="table">{itemsList}</div>;
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
