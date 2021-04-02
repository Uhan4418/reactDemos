import React from 'react';
import moment from "moment";
import { DatePicker } from "antd";
import styles from './index.less'

interface PropsType {
  onChange: (values: any) => void;
  format?: string;
  hideShowTime?: boolean;
  ranges?: any;
  disabledRangeTime?: any;
  styleType?:string;
  defaultValue?: any;
  key?:string
}

const rangeFormat = {
  '今天': [moment().startOf('day'), moment()],
  '本周': [moment().startOf('week'), moment().endOf('week')],
  '本月': [moment().startOf('month'), moment().endOf('month')],
}
const showTimeFormat = {
  hideDisabledOptions: true,
  defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
}

const renderDefault = ( defaultValue: moment.MomentInput[] , dateFormat: any ) : any => {
  return defaultValue?.[0] ? [ moment( defaultValue[0], dateFormat ), moment( defaultValue[1], dateFormat ) ] : null
}

const QueryRangePicker: React.FC<PropsType> = (props) => {

  const { format, hideShowTime, ranges, styleType, defaultValue, key } = props;

  const dateFormat = format || 'YYYY-MM-DD HH:mm:ss';

  return <div className={`${styleType === 'newStyle'? styles.newDatePicker: ''}`}>
    {
      styleType !== 'newStyle'? (
        <DatePicker.RangePicker
          key={key}
          defaultValue={renderDefault(defaultValue, dateFormat) }
          disabledDate={ props.disabledRangeTime }
          showTime={ !hideShowTime &&  showTimeFormat}
          format={ dateFormat }
          onChange={ (dates, dateStrings) => {
            props.onChange({startTime: dateStrings[0], endTime: dateStrings[1]})
          } }
          ranges={ ranges ||  rangeFormat}
        />
      ): (
        <DatePicker.RangePicker
          key={key}
          defaultValue={renderDefault(defaultValue, dateFormat) }
        disabledDate={ props.disabledRangeTime }
        showTime={ !hideShowTime && showTimeFormat }
        format={ dateFormat }
        onChange={ (dates, dateStrings) => {
          props.onChange({startTime: dateStrings[0], endTime: dateStrings[1]})
        } }
          ranges={ ranges || rangeFormat }
        suffixIcon={ <span className={styles.suffixIcon} /> }
      />
      )
    }
  </div>
};

export default QueryRangePicker;
