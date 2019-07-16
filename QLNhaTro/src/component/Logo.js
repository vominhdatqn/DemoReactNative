import React, { Component, Fragment } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class Logo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { images, style, text } = this.props;
    return (
      <View style={[style, { flexDirection: 'column' }]}>
        <View style={{ width: 128, height: 128, borderRadius: 128, borderStyle: 'dotted', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 110, height: 110, borderRadius: 110, backgroundColor: '#1a91d6', justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: images }}
              style={{ height: 58, width: 77 }}
              resizeMode='cover'
            />
          </View>
        </View>
        <Text style={{ marginVertical: 20, fontSize: 18, fontFamily: 'System', color: '#0d72ba', fontWeight: '500' }}>{text}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
