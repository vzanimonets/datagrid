import React from "react";
import List from "../List";
// import SortingPanel from "../SortingPanel/SortingPanel";
// import SearchPanel from "../SearchPanel/SearchPanel";

import * as actions from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

class Browse extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  componentDidMount() {
    const { getDataAction } = this.props;
    getDataAction();
  }

  //   setFilter = value => this.props.filterMovies(value);

  //   setFilterBy = value => this.props.filterMoviesBy(value);
  //   setSortMovies = value => this.props.sortMovies(value);

  render() {
    const { items, status } = this.props;
    return (
      <React.Fragment>
        {/* <SearchPanel
          filterMoviesBy={this.setFilterBy}
          filterMovies={this.setFilter}
        />
        <SortingPanel setSortMovies={this.setSortMovies} /> */}
        {status === "received" ? <List items={items} /> : "waiting..."}
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
    getDataAction: bindActionCreators(actions.getDataAction, dispatch)
    // filterMovies: bindActionCreators(actions.filterMovies, dispatch),
    // filterMoviesBy: bindActionCreators(actions.filterMoviesBy, dispatch),
    // sortMovies: bindActionCreators(actions.sortMovies, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
