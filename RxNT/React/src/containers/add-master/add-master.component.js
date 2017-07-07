import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import SpinnerComponent from '../../uicomponents/spinner/spinner.component';
import AddMasterComponent from '../../components/add-master/add-master.component';

class AddMasterContainerComponent extends Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
			<div>
					{this.props.loading && <SpinnerComponent/>}
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12 tdTopAlign">
								<div className="pull-right mainHeaderButtons">
									<Link to="/search"><input type="button" className="btnAllYellow pull-right" value="Cancel" /></Link>
									<Link to="/search"><input type="button" className="btnAllGreen pull-right" value="Save" /></Link>
								</div>
						</div>
					</div>
					<section>
						<AddMasterComponent />
					</section>
					<div className="row">
						<div className="col-md-12 col-sm-12 col-xs-12 tdTopAlign">
								<div className="pull-right mainHeaderButtons">
									<Link to="/search"><input type="button" className="btnAllYellow pull-right" value="Cancel" /></Link>
									<Link to="/search"><input type="button" className="btnAllGreen pull-right" value="Save" /></Link>
								</div>
						</div>
					</div>
			</div>
		);
	}
}

AddMasterContainerComponent.propTypes = {
	loading: PropTypes.bool
};

const mapStateToProps = (store) => {
  return {
		loading: store.applicationReducer.loading
  };
};

export default connect(mapStateToProps)(AddMasterContainerComponent);
