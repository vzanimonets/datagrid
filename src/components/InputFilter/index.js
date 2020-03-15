import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

function InputFilter({ onFilter, placeholder }) {
  return (
    <input
      className="search"
      placeholder={placeholder}
      type="text"
      onChange={e => onFilter(e.target.value)}
    />
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    onFilter: bindActionCreators(actions.filterData, dispatch)
  };
}

InputFilter.propTypese = {
  placeholder: PropTypes.string,
  filterQuery: PropTypes.string,
  onNameFilter: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(InputFilter);
