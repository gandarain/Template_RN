import React, { Component } from 'react'
import {
  Text,
  View
} from 'react-native'
import {
  Container,
} from 'native-base'
import { color } from '../../Assets/Style/ColorList'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: color.fontColor }}>Home</Text>
        </View>
      </Container>
    )
  }
}

export default HomeScreen