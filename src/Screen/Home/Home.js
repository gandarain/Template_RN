import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import {
  Container,
} from 'native-base'

import StatusBar from '../../Assets/Component/StatusBar'
import Header from '../../Assets/Component/Header'
import { color } from '../../Assets/Style/ColorList'

class HomeScreen extends Component {
  static navigationOptions = () => ({ headerShown: false })
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <StatusBar />
        <Header />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: color.fontColor }}>Home</Text>
        </View>
      </Container>
    )
  }
}

export default HomeScreen