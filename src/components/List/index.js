import React from "react";
import Row from "../Row";
import PropTypes from "prop-types";

function List(props) {
  const { items } = props;
  const itemsList = items.map((item, key) => {
    const RowProps = { item, key };
    return <Row {...RowProps} />;
  });

  return <div className="content">{itemsList}</div>;
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
