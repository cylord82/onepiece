import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import './MyHighchart.less';

const options = {
  title: {
    text: 'My stock chart',
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

class MyHighchart extends Component {
  render() {
    return (
      <div className="MyHighchart">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
        />
      </div>
    );
  }
}

export default MyHighchart;
