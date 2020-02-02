import React, { Component } from 'react'
import {
  StatusBar
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {
  responsiveHeight,
} from 'react-native-responsive-dimensions'

import { color } from '../Style/ColorList'

class StatusBarComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={[color.themaColor, color.subThemaColor]}
        style={{paddingBottom: responsiveHeight(4.5)}}>
        <StatusBar translucent={true} backgroundColor={'transparent'} />
      </LinearGradient>
    )
  }
}

export default StatusBarComponent