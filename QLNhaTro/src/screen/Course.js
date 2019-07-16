import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import Logo from '../component/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
export default class Course extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 200, marginVertical: 10, marginHorizontal: 18 }}>
          <Image
            source={{ uri: 'http://www.maugiaosmartedu.com//images/course.jpg' }}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode='cover'
          />
        </View>
        <Text style={{textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
            Lớp Mầm
        </Text>
        <Text style={{ marginHorizontal: 18, color: '#666', fontSize: 15, fontFamily: 'System', textAlign: 'center' }}>
           Hoc Phí: 2000000 VNĐ
            </Text>
        <TouchableOpacity style={{ marginHorizontal: 18, marginVertical: 30, backgroundColor: '#0d72ba', height: 35, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color:'white', fontWeight: '600', fontSize: 12 }}>Đăng Ký</Text>
            </TouchableOpacity>
         
            <View style={{ height: 200, marginVertical: 10, marginHorizontal: 18 }}>
          <Image
            source={{ uri: 'http://www.maugiaosmartedu.com//images/course.jpg' }}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode='cover'
          />
        </View>
        <Text style={{textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
            Lớp Chồi
        </Text>
        <Text style={{ marginHorizontal: 18, color: '#666', fontSize: 15, fontFamily: 'System', textAlign: 'center' }}>
           Hoc Phí: 3000000 VNĐ
            </Text>
        <TouchableOpacity style={{ marginHorizontal: 18, marginVertical: 30, backgroundColor: '#0d72ba', height: 35, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color:'white', fontWeight: '600', fontSize: 12 }}>Đăng Ký</Text>
            </TouchableOpacity>

            <View style={{ height: 200, marginVertical: 10, marginHorizontal: 18 }}>
          <Image
            source={{ uri: 'http://www.maugiaosmartedu.com//images/course.jpg' }}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode='cover'
          />
        </View>
        <Text style={{textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
            Lớp Lá
        </Text>
        <Text style={{ marginHorizontal: 18, color: '#666', fontSize: 15, fontFamily: 'System', textAlign: 'center' }}>
           Hoc Phí: 3000000 VNĐ
            </Text>
        <TouchableOpacity style={{ marginHorizontal: 18, marginVertical: 30, backgroundColor: '#0d72ba', height: 35, borderRadius: 10, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color:'white', fontWeight: '600', fontSize: 12 }}>Đăng Ký</Text>
            </TouchableOpacity>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
