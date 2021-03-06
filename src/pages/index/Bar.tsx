import React, { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
// import "./index.less";

export default class Bar extends Component {
  componentDidMount() {
    const defautOption = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          showBackground: true,
          backgroundStyle: {
            color: "rgba(220, 220, 220, 0.8)",
          },
        },
      ],
      tooltip: { 
        trigger: 'axis',
        formatter: (dates) => {
          return dates.map(item => `${item.axisValue}: ${item.data}`).join('\n')
        }
      }
    };
    this.barChart.refresh(defautOption);
  }

  barChart: any;

  refBarChart = (node) => (this.barChart = node);

  render() {
    return (
      <View style={{ height: 300 }} className='bar-chart'>
        <EChart onClick={() => { console.log('???') }} ref={this.refBarChart} canvasId='bar-canvas' />
      </View>
    );
  }
}
