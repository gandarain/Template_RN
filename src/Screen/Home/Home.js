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

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ paddingBottom: 10 }}>
            <Text style={{ color: color.fontColor }}>Home</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between', paddingVertical: 10 }}>
            <TouchableOpacity>
              <Text>Hello</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Hello</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}
            style={{ backgroundColor: color.themaColor, paddingVertical: 10, paddingHorizontal: 30, borderRadius: 5 }}>
            <Text style={{ color: color.whiteColor }}>Profile</Text>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}

export default HomeScreen