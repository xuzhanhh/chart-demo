import React, { Component } from 'react'
import { View, Text } from '@binance/mp-components'
import './index.scss'
import Bar from './Bar'
import Line from './Line'
import Pie from './Pie'
export default class Index extends Component {
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Bar />
        <Line />
        <Pie />
      </View>
    )
  }
}
