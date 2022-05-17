import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
// import "./index.less";

export default class Bar extends Component {
  componentDidMount() {
    const option = {
      tooltip: {
        trigger: 'axis',
        renderMode: 'richText',
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: { show: false },
        axisTick: { show: false, alignWidthLabel: true },
      },
      yAxis: {
        type: 'value',
        position: 'right',
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
        },
      ],
    }
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
