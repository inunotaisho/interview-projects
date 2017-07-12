import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';

import * as samplePage1Actions from './actions';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import './search-master.component.scss';

class SearchMasterComponent extends Component{

  constructor(props) {
    super(props);
    this.navigateToDetails = this.navigateToDetails.bind(this);
    this.IdFormatter = this.IdFormatter.bind(this);
  }

  componentWillMount() {
    this.props.actions.load();
  }

  navigateToDetails() {
      alert('Developement in progress');
  }

  IdFormatter(cell, row) { // eslint-disable-line no-unused-vars
   return (
     <Link to="/new">{cell}</Link>
   );
 }

  render(){

    let selectRowProp = {
                          mode: "checkbox",
                          bgColor: "#CAE1FF"
                        };

    const options = {
                      page: 1,  // which page you want to show as default
                      sizePerPageList: [ 5, 10, 20 ], // you can change the dropdown list for size per page
                      sizePerPage: 5,  // which size per page you want to locate as default
                      pageStartIndex: 1, // where to start counting the pages
                      paginationSize: 5,  // the pagination bar size.
                      prePage: "<", // Previous page button text
                      nextPage: ">", // Next page button text
                      firstPage: "<<", // First page button text
                      lastPage: ">>", // Last page button text
                    };

    return(
        <div>
            <div className="table">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Search Patients</h4>
                    </div>
                </div>
            </div>
            <div className="table tab-content">
              {this.props.loading && <SpinnerComponent/>}
              <div className="row">
                <BootstrapTable selectRow={selectRowProp} minHeight="300px" data={this.props.data} pagination={true} options={options}>
                    <TableHeaderColumn dataField="id" dataFormat={this.IdFormatter} headerAlign="center" editable={false} isKey ={true} dataSort={true} >Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="name" headerAlign="center" editable={false} filter={{type: 'TextFilter', delay: 50}} >Name</TableHeaderColumn>
                    <TableHeaderColumn dataField="email" headerAlign="center" editable={false}  >Email</TableHeaderColumn>
                </BootstrapTable>
              </div>
            </div>
        </div>
    );
  }
}

SearchMasterComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

SearchMasterComponent.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: state.searchMasterReducer.data,
    loading: state.searchMasterReducer.loading
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(samplePage1Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchMasterComponent);
