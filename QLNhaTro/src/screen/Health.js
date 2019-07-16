import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import Logo from '../component/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
export default class Health extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={{ paddingVertical: 30, color: '#ff0000', fontSize: 18, fontFamily: 'System', textAlign: 'right', marginHorizontal: 35 }}>Thông tin cá nhân của bé</Text>
        <View style={{ height: 200, marginVertical: 10, marginHorizontal: 35 }}>
          <Image
            source={{ uri: 'http://www.maugiaosmartedu.com//images/course.jpg' }}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode='cover'
          />
        </View>
        <TouchableOpacity style={{ marginHorizontal: 35, backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Phạm Khắc Huy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ marginHorizontal: 35, backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Học sinh chăm chỉ</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ marginHorizontal: 18, marginTop: 30, backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Thông tin cơ bản</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginHorizontal: 18 }}>
          <Text style={{ textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700' }}>Họ và tên: </Text>
          <Text>Phạm Khắc Huy</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 18, }}>
          <Text style={{ textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700' }}>Ngày sinh: </Text>
          <Text> 1/1/1997 12:00:00 AM</Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 18, marginTop: 30, backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Giáo viên chủ nhiệm</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', marginHorizontal: 18 }}>
          <Text style={{ textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700' }}>Giáo viên: </Text>
          <Text>Nguyễn Thị Ngọc Thơ</Text>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 18,  }}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity style={{backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Ngày kiểm tra</Text>
            </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>12/12/2018</Text>
              <Text style={{ textAlign: 'center' }}>22/12/2018</Text>
              <Text style={{ textAlign: 'center' }}>22/12/2018</Text>
          </View>
          <View style={{ flex: 2}}>
            <TouchableOpacity style={{backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Cân nặng</Text>
            </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>12 kg</Text>
              <Text style={{ textAlign: 'center' }}>12,5 kg</Text>
              <Text style={{ textAlign: 'center' }}>13,5 kg</Text>
          </View>
          <View style={{flex: 1}}>
            <TouchableOpacity style={{backgroundColor: '#0d72ba', height: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Chiêu cao</Text>
            </TouchableOpacity>
              <Text style={{ textAlign: 'center' }}>1m</Text>
              <Text style={{ textAlign: 'center' }}>1m</Text>
              <Text style={{ textAlign: 'center' }}>1,05 m</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 20 }}>
        <View style={{ justifyContent: 'flex-start' }}>
        <TouchableOpacity style={{marginRight: 20, borderRadius: 5 ,backgroundColor: '#1db913', height: 35, width: 100, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Sức khỏe bé tốt</Text>
        </TouchableOpacity>
        </View>

        <View style={{ justifyContent: 'flex-end' }}>
        <TouchableOpacity style={{borderRadius: 5 ,backgroundColor: '#ff0000', height: 35, width: 134,alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ color: 'white', fontWeight: '600', fontSize: 12 }}>Sức khỏe bé chưa tốt</Text>
            </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
