import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

import { color } from '../../Assets/Style/ColorList'
import StatusBar from '../../Assets/Component/StatusBar'

class Header extends Component {
  static navigationOptions = () => ({ header: null })
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View>
        <StatusBar />
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={[color.themaColor, color.subThemaColor]}
          style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: color.whiteColor, fontSize: 20 }}>Home</Text>
        </LinearGradient>
      </View>
    )
  }
}

export default Header