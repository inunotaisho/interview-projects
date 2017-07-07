import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { DateField, Calendar, Footer } from 'react-date-picker';
import './date-picker.component.scss';

class DateInputComponent extends Component{
  constructor(props) {
       super(props);
   }

   render() {
       let {field} = this.props;

       return (
         <DateField onChange={field.onChange}
               dateFormat="MM/DD/YYYY"
               collapseOnDateClick="true"
               updateOnDateClick="true"
               defaultValue={field.initialValue}>
               <Calendar >
                <Footer clearButton={false} />
               </Calendar>
          </DateField>
          );

   }
 }

 DateInputComponent.propTypes = {
  field: PropTypes.object.isRequired
};

export default DateInputComponent;
