import React, { Component } from 'react'
import {
  Text,
  ActivityIndicator,
} from 'react-native'
import {
  Container,
} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import StatusBar from '../../Assets/Component/StatusBar'
import { color } from '../../Assets/Style/ColorList'

class SplashScreen extends Component {
  static navigationOptions = () => ({ header: null })
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home')
    }, 3500)
  }

  render() {
    return (
      <Container>
        <StatusBar />
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[color.themaColor, color.subThemaColor]} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
          <ActivityIndicator size="large" color="white" />
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'white' }}>Loading</Text>
        </LinearGradient>
      </Container>
    )
  }
}

export default SplashScreen