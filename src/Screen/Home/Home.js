import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native'
import {
  Container,
  Toast
} from 'native-base'

import { addProduct, updateProduct, reduceProduct, removeProduct } from '../../Redux/Actions'
import { connect } from 'react-redux'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData() {
    let data = [
      {
        id: 1,
        nama: 'Mie Instan',
        harga: 3000
      },
      {
        id: 2,
        nama: 'Bimoli',
        harga: 20000
      },
      {
        id: 3,
        nama: 'Tepung',
        harga: 4000
      }
    ]
    this.setState({
      data: data
    })
  }

  renderProduct() {
    if (this.state.data.length > 0) {
      return this.state.data.map((data) => {
        return (
          <View key={data.id} style={{ marginHorizontal: 20, paddingHorizontal: 20, paddingVertical: 20, marginVertical: 20, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 1, borderColor: 'grey', borderRadius: 10 }}>
            <View>
              <Text>{data.nama}</Text>
              <Text>{data.harga}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.addProduct(data)}
                style={{ backgroundColor: 'blue', justifyContent: 'center', paddingHorizontal: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white' }}>Tambah</Text>
              </TouchableOpacity>
              <View style={{ justifyContent: 'center', paddingHorizontal: 10 }}>
                <Text>{this.renderValueProduct(data)}</Text>
              </View>
              <TouchableOpacity
                onPress={() => this.reduceProduct(data)}
                style={{ backgroundColor: 'red', justifyContent: 'center', paddingHorizontal: 10, borderRadius: 5 }}>
                <Text style={{ color: 'white' }}>Kurang</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      })
    }
  }

  addProduct(data) {
    let foundIndex = this.props.cart.product.findIndex(cartData => cartData.id === data.id)
    if (foundIndex === -1) {
      data.jumlah = 1
      this.props.addProduct(data)
    } else {
      let payload = { id: data.id, harga: data.harga }
      this.props.updateProduct(payload)
    }
  }

  reduceProduct(data) {
    if (this.props.cart.product.length === 0) {
      return (
        Toast.show({
          text: 'Keranjang anda masih kosong',
          buttonText: 'Okay'
        })
      )
    } else {
      let foundIndex = this.props.cart.product.findIndex(cartData => cartData.id === data.id)
      if (foundIndex === -1) {
        return (
          Toast.show({
            text: 'Product ini belum ada di keranjang anda',
            buttonText: 'Okay'
          })
        )
      } else {
        if (this.props.cart.product[foundIndex].jumlah - 1 > 0) {
          let payload = { id: data.id, harga: data.harga }
          this.props.reduceProduct(payload)
        } else {
          let payload = { id: data.id, harga: data.harga }
          this.props.removeProduct(payload)
        }
      }
    }
  }

  renderValueProduct(data) {
    let foundIndex = this.props.cart.product.findIndex(cartData => cartData.id === data.id)
    if (foundIndex !== -1) {
      return this.props.cart.product[foundIndex].jumlah
    } else {
      return 0
    }
  }

  render() {
    return (
      <Container>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Toko si Dia</Text>
          {this.renderProduct()}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20 }}>
            <View style={{ justifyContent: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Total {this.props.cart.total}</Text>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}
              style={{ padding: 10, backgroundColor: 'green', borderRadius: 10 }}>
              <Text style={{ fontSize: 15, color: 'white' }}>Lihat Keranjang</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value.value,
    cart: state.cart.cart
  }
}

export default connect(
  mapStateToProps, { addProduct, updateProduct, reduceProduct, removeProduct }
)(HomeScreen)