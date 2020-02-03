import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {
  Container,
} from 'native-base'
import { color } from '../../Assets/Style/ColorList'

class ProfileScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ paddingBottom: 20 }}>
            <Text style={{ color: color.fontColor }}>Profile</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{ backgroundColor: color.themaColor, paddingVertical: 10, paddingHorizontal: 30, borderRadius: 5 }}>
            <Text style={{ color: color.whiteColor }}>Home</Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}

export default ProfileScreen