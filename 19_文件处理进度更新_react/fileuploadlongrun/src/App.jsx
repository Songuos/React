import React, { Component } from 'react'
import { DatePicker } from 'antd';

const { RangePicker } = DatePicker;

export default class App extends Component {

    render() {
        return (
            <div>
                App...
                <DatePicker />
                <RangePicker renderExtraFooter={() => 'extra footer'} showTime />
            </div>
        )
    }
}
