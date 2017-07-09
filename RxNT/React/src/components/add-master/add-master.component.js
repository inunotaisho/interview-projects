import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as samplePage2Actions from './actions';
import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import './add-master.component.scss';

class AddMasterComponent extends Component{

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.load();
  }

  render(){
    return(
        <div>
            <div className="table">
                <div className="row">
                    <div className="col-md-4">
                        <h4>Add Patients</h4>
                    </div>
                </div>
            </div>
            <div className="table tab-content">
              {this.props.loading && <SpinnerComponent/>}
              <div className="row">
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <input type="text" placeholder="Enter Patient Name" />
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4">
                  <input type="email" placeholder="Enter Patient Email Address" />
                </div>
              </div>
            </div>
        </div>
    );
  }
}

AddMasterComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

AddMasterComponent.contextTypes = {
    router: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: state.addMasterReducer.data,
    loading: state.addMasterReducer.loading
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(samplePage2Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMasterComponent);
