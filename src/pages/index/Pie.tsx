import React, { Component } from 'react'
import { View } from '@binance/mp-components'
import { EChart } from 'echarts-taro3-react'

export default class UiChartPie extends Component {
  componentDidMount() {
    const option = {
      title: {
        text: 'Referer of a Website',
        subtext: 'Fake Data',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'horizontal',
        left: 'center',
        top: 'bottom',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }

    this.Chart.refresh(option)
  }

  Chart: any

  refChart = (node) => (this.Chart = node)

  render() {
    return (
      <View style={{ height: 300 }} className="chart">
        <EChart
          onClick={() => {
            console.log('???')
          }}
          ref={this.refChart}
          canvasId="pie-canvas"
        />
      </View>
    )
  }
}
