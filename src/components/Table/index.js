import React from "react";
import List from "../List";
import Header from "../Header";

import * as actions from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./table.css";

class Table extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: {}
    };
  }
  componentDidMount() {
    const { getDataAction } = this.props;
    getDataAction(1000);
  }
  selectAll = e => {
    let selected = this.state.selected;
    if (e.target.checked) {
      selected[e.target.name] = e.target.checked;
    } else {
      selected = {};
    }
    this.setState({ selected });
  };
  handleSelect = e => {
    const selected = this.state.selected;
    selected[e.target.name] = e.target.checked;
    this.setState({ selected });
  };
  setSort = (multiple, sortKey) => {
    let sort = this.props.sort;

    if (multiple) {
      sort.push(sortKey);
    } else sort = [sortKey];
    this.props.sortData(sort);
  };

  render() {
    const { items, status } = this.props;
    const style = {
      backgroundColor: "#FAFAFA",
      bordeTop: "1px solid",
      margin: 0
    };
    return (
      <React.Fragment>
        <div className="table">
          <div className="columns">
            <input
              type="checkbox"
              name="allSelected"
              className="checkboxContainer"
              onChange={this.selectAll}
            />
            {[
              { name: "ID", sortKey: "id" },
              { name: "Name", sortKey: "name" },
              { name: "e-mail", sortKey: "email" },
              { name: "Phone", sortKey: "phone" },
              { name: "Registration", sortKey: "date" },
              { name: "Age", sortKey: "age" }
            ].map((item, key) => (
              <Header
                key={key + item}
                column={item}
                sort={this.props.sort}
                fnClick={this.setSort}
              />
            ))}
          </div>
          <div className="content">
            {status === "received" ? (
              <List
                items={items}
                handleSelect={this.handleSelect}
                selected={this.state.selected}
                allSelected={this.state.selected["allSelected"]}
              />
            ) : (
              <span className="spinner">waiting...</span>
            )}
          </div>
          <p style={style}>
            <b>total:</b> {items.length}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.dataReducer.data,
    sort: state.dataReducer.sort,
    status: state.dataReducer.status
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getDataAction: bindActionCreators(actions.getDataAction, dispatch),
    sortData: bindActionCreators(actions.sortData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
