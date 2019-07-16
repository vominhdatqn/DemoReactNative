import React, { Component } from 'react'
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import {toggleIsAdding} from '../redux/actionCreators'
 class Header extends Component {
  render() {
      const {header} = styles;
    return (
      <View style={header}>
       <Text />
        <Text>My Word</Text>
      <TouchableOpacity onPress={()=>this.props.toggleIsAdding()}>
      <Text>ADD</Text>
      </TouchableOpacity>
      </View>
    )
  }
}
export default connect(null,{toggleIsAdding})(Header);
const styles = StyleSheet.create({
    header:{
        flex:1,
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20
    }
})
