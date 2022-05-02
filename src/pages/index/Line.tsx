import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
// import "./index.less";

export default class Bar extends Component {
  componentDidMount() {
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };
    this.Chart.refresh(option);
  }

  Chart: any;

  refChart = (node) => (this.Chart = node);

  render() {
    return (
      <View style={{ height: 300 }} className='chart'>
        <EChart onClick={() => { console.log('???') }} ref={this.refChart} canvasId='line-canvas' />
      </View>
    );
  }
}
