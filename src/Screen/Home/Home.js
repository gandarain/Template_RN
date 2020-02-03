import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {
  Container,
  Icon
} from 'native-base'
import { color } from '../../Assets/Style/ColorList'

import { incrementValue, decrementValue } from '../../Redux/Actions'
import { connect } from 'react-redux'

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
            <Text style={{ color: color.fontColor }}>{this.props.value}</Text>
          </View>
          <View style={{ flexDirection: 'row', width: '20%', justifyContent: 'space-between', paddingVertical: 10 }}>
            <TouchableOpacity
              onPress={() => this.props.incrementValue()}
              style={{ backgroundColor: 'blue', borderRadius: 20, padding: 5 }}>
              <Icon type='MaterialCommunityIcons' name='plus' style={{ color: color.whiteColor }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.decrementValue()}
              style={{ backgroundColor: 'red', borderRadius: 20, padding: 5 }}>
              <Icon type='MaterialCommunityIcons' name='minus' style={{ color: color.whiteColor }} />
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

const mapStateToProps = (state) => {
  return {
    value: state.value.value
  }
}

export default connect(
  mapStateToProps, { incrementValue, decrementValue }
)(HomeScreen)