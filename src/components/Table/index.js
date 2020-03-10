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
    getDataAction(10000);
  }
  setSort = value => {
    this.props.sortData(value);
  };

  //   setFilter = value => this.props.filterMovies(value);

  //   setFilterBy = value => this.props.filterMoviesBy(value);

  columnsOut = ["Name", "e-mail", "Phone"].map((item, key) => {
    return <Header key={key + item} column={item} fnClick={this.setSort} />;
  });
  render() {
    const { items, status } = this.props;
    return (
      <React.Fragment>
        <div className="table">
          <div className="columns">{this.columnsOut}</div>
          <div className="content">
            {status === "received" ? (
              <List items={items} />
            ) : (
              <span className="spinner">fetching data...</span>
            )}
          </div>
        </div>
        {/* <SearchPanel
          filterMoviesBy={this.setFilterBy}
          filterMovies={this.setFilter}
        />
        <SortingPanel setSortMovies={this.setSortMovies} /> */}
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.dataReducer.data, //state.request.data,
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
