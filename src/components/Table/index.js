import React from "react";
import List from "../List";
import Header from "../Header";

// import SortingPanel from "../SortingPanel/SortingPanel";
// import SearchPanel from "../SearchPanel/SearchPanel";

import * as actions from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./table.css";

class Table extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  componentDidMount() {
    const { getDataAction } = this.props;
    getDataAction(1000);
  }
  setSort = value => {
    this.props.sortData(value);
  };

  //   setFilter = value => this.props.filterMovies(value);

  //   setFilterBy = value => this.props.filterMoviesBy(value);

  render() {
    const { items, status, sort } = this.props;
    const style = {
      backgroundColor: "#FAFAFA",
      bordeTop: "1px solid",
      margin: 0
    };
    return (
      <React.Fragment>
        <div className="table">
          <div className="columns">
            {[
              { name: "Id", sortKey: "id" },
              { name: "Name", sortKey: "name" },
              { name: "e-mail", sortKey: "email" },
              { name: "Phone", sortKey: "phone" },
              { name: "Age", sortKey: "age" }
            ].map((item, key) => (
              <Header
                key={key + item}
                column={item}
                sort={sort}
                fnClick={this.setSort}
              />
            ))}
          </div>
          <div className="content">
            {status === "received" ? (
              <List items={items} />
            ) : (
              <span className="spinner">waiting...</span>
            )}
          </div>
          <p style={style}>
            <b>total:</b> {items.length} <b>sort:</b>
            {sort.sortKey}:{sort.dir}
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
    // filterMovies: bindActionCreators(actions.filterMovies, dispatch),
    // filterMoviesBy: bindActionCreators(actions.filterMoviesBy, dispatch),
    sortData: bindActionCreators(actions.sortData, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
