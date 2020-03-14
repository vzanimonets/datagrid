import React from "react";
import Row from "../Row";
import PropTypes from "prop-types";

function List(props) {
  const { items, handleSelect, selected, allSelected } = props;
  const itemsList = items.map((item, key) => {
    const RowProps = { item, key, handleSelect, selected, allSelected };
    return <Row {...RowProps} />;
  });

  return <div className="inner">{itemsList}</div>;
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default List;
