import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import Logo from '../component/Logo';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');
export default class Home extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <View style={{ height: 200, marginVertical: 10, marginHorizontal: 18 }}>
          <Image
            source={{ uri: 'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/Logo.png' }}
            style={{ width: '100%', height: '100%', borderRadius: 20 }}
            resizeMode='cover'
          />
        </View>
        <Text style={{ color: '#ff0000', fontSize: 16, fontFamily: 'System', textAlign: 'left',  marginHorizontal: 18 }}>Thời gian làm việc :</Text>
        <View style={{ flexDirection: 'row',  marginHorizontal: 18 }}>
          <View style={{ marginTop: 10, marginBottom: 20 }}>
            <Image
              source={{ uri: 'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/alarmf1c3.png' }}
              style={{ width: 77, height: 77 }}
              resizeMode='cover'
            />
            <Text style={{ fontWeight: '700', fontSize: 15, color: '#5c5c5c' }}>
              Thứ Hai - Thứ 7
                </Text>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#feba35' }}>
              7:00 AM - 5:00 PM
                </Text>
          </View>

          <View style={{ marginTop: 10, marginBottom: 20, marginLeft: 30 }}>
            <Image
              source={{ uri: 'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/call_usf1c3.png' }}
              style={{ width: 77, height: 77 }}
              resizeMode='contain'
            />
            <Text style={{ fontWeight: '700', fontSize: 15, color: '#5c5c5c' }}>
              Đăng ký nhập học
                </Text>
            <Text style={{ fontWeight: '700', fontSize: 14, color: '#feba35' }}>
              0971865994
                </Text>
          </View>
        </View>

        <View style={{ backgroundColor: '#EAB9CA',  }}>
          <Text style={{textAlign: 'center', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
            Học mà chơi, chơi mà học
            </Text>
          <Text style={{ marginHorizontal: 18, paddingVertical: 20, color: '#666', fontSize: 15, fontFamily: 'System', textAlign: 'center' }}>
            Chúng tôi mang đến trương trình giáo dục tiên tiến nhất, được cập nhật thường xuyên nhằm phát triển kỹ năng toàn diện cho trẻ.
            </Text>

          <View style={{ flexDirection: 'row', marginHorizontal: 18, justifyContent: 'space-between', alignItems: 'center',  }}>
            <Logo text={"Thực đơn cho bé"}  images={'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/thucdonchobe.png'}/>
            <Logo text={"Chương trình học"} images={'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/thucdonchobe.png'}/>
          </View>
          <View style={{ flexDirection: 'row', marginHorizontal: 18, justifyContent: 'space-between', alignItems: 'center',  }}>
            <Logo text={"Hoạt động ngoại khóa"}   images={'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/thucdonchobe.png'}/>
            <Logo text={"Giải trí cho bé"}  images={'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/thucdonchobe.png'}/>
          </View>
          </View>
          <View style={{ marginVertical: 20 }}>
          <Text style={{textAlign: 'left', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
            Giới thiệu
            </Text>
            <Text style={{ marginHorizontal: 18, paddingVertical: 20, color: '#666', fontSize: 15, fontFamily: 'System', textAlign: 'left' }}>
								Mẫu giáo Smart Edu là gì ? 
                                Sứ mệnh của trường Smart Edu là cung cấp một chương trình giáo dục chất lượng cao từ cấp mầm non, tiểu học đến trung
                                học phổ thông dựa trên những triết lý và thực tiễn giáo dục của Canada nhằm đáp ứng sự mong đợi của quý vị phụ
                                huynh đến từ nhiều quốc gia nhưng vẫn phù hợp với quy định giáo dục ở từng địa phương.
                            
            </Text>
            <TouchableOpacity style={{ marginHorizontal: 18, marginVertical: 30, backgroundColor: '#0d72ba', width: 64, height: 20, borderRadius: 10, alignItems: 'center' }}>
                <Text style={{ color:'white', fontWeight: '600', fontSize: 12 }}>Khám phá</Text>
            </TouchableOpacity>
           <View style={{ marginHorizontal: 18, justifyContent: 'center', alignItems: 'center' }}>
           <Image 
            source={{ uri: 'http://www.maugiaosmartedu.com//TeamplateUser/Logo-Icon/gioithieu3.jpg' }}
            style={{ height: 250, width: '100%', borderRadius: 30 }}
            resizeMode='cover'
            />
           </View>
          
          </View>
          <Text style={{  marginHorizontal: 18,textAlign: 'left', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
           Tin tức Học Viện Mầm Non
            </Text>
            <Text style={{  marginHorizontal: 18,textAlign: 'left', color: '#0d72ba', fontSize: 16, fontFamily: 'System', fontWeight: '700', paddingVertical: 20, }}>
           SmartEDU
            </Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
