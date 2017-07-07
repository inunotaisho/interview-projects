import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as timerActions from './actions';

class TimerComponent extends Component {
  constructor(props){
    super(props);
    this.setTime = this.setTime.bind(this);
  }

  componentWillMount(){
    this.setTime();
  }

  componentDidMount(){
    setInterval(() =>{
        this.setTime();
    },1000);
  }

  setTime(){
    let currentdate = new Date();
    let hours = currentdate.getHours();
    if( hours >= 24 ) {
      hours -= 24;
    }
    if( hours < 0   ) {
      hours += 12;
    }
    hours = hours + "";
    if( hours.length == 1 ) {
      hours = "0" + hours;
    }
    let minutes = currentdate.getMinutes();
    minutes = minutes + "";
    if( minutes.length == 1 ) {
      minutes = "0" + minutes;
    }
    let time = {
      hours: hours,
      minutes: minutes
    };
    this.props.actions.updateTimer(time);
  }

  render() {
    return(
      <div className="timer">
        <span className="city-time"><b>{this.props.hours}:{this.props.minutes}</b></span>
      </div>
    );
  }
}

TimerComponent.propTypes = {
  actions: PropTypes.object.isRequired,
  hours:PropTypes.string,
  minutes:PropTypes.string,
  UTCOffset:PropTypes.string
};

const mapStateToProps = (store) => {
  return {
    hours:store.timerReducer.hours,
    minutes:store.timerReducer.minutes
  };
};

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(timerActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimerComponent);
