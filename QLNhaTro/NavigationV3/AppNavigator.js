import React, { Component } from 'react';
import {
createStackNavigator,
createAppContainer,
createBottomTabNavigator,
createMaterialTopTabNavigator,
createDrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import ComA from '../components/ComA.js';
// import ComB from '../components/ComB.js';
// import ComC from '../components/ComC.js';

// const AppNavigator = createStackNavigator({
// 	ComA:ComA,
// 	ComB:ComB,
// 	ComC:ComC,
// });

// export default createAppContainer(AppNavigator);

import Home from '../src/screen/Home';
import Course from '../src/screen/Course';
import Health from '../src/screen/Health';
// const TabScreen = createMaterialTopTabNavigator(
//   {
//     Home: { screen: Home },
// 		Course: { screen: Course },
// 		Health: { screen: Health },
//   },
//   {
//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#ffcdd2',
//       inactiveTintColor: '#F8F8F8',
//       style: {
//         backgroundColor: '#0067a7',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: '#87B56A',
//         borderBottomWidth: 2,
//       },
//     },
//   }
// );
 
// const StackMain = createStackNavigator({
//   TabScreen: {
//     screen: TabScreen,
//     navigationOptions: {
//       headerStyle: {
//         backgroundColor: '#FFFFFF',
//       },
//       headerTintColor: '#004DCF',
//       title: 'Smart Edu',
//     },
//   },
// });
// const TabMain =  createAppContainer(StackMain);
// const Main = createDrawerNavigator({
// 	Home: { screen: TabScreen },
// })
// export default Main;
const DashboardTabNavigator = createMaterialTopTabNavigator(
  {
    Home: {
			screen: Home,
			navigationOptions: {
				tabBarLabel: 'Trang Chủ',
			}
		},
    Course: {
			screen: Course,
			navigationOptions: {
				tabBarLabel: 'Đăng Ký Khóa Học',
			}
		},
    Health: {
			screen: Health,
			navigationOptions: {
				tabBarLabel: 'Thông Tin Bé',
			}
		}
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
				headerTitle: routeName,
				headerTintColor: '#007bff',
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="sort"
						size={30}
						color={'#ff9800'}
          />
        )
      };
    }
  }
);
const AppDrawerNavigator = createDrawerNavigator(
	{
		Dashboard: {
			screen: DashboardStackNavigator,
			navigationOptions: {
				drawerLabel: 'Trang Chủ',
			}
		}, 
}, {
			headerTintColor: '#004DCF',
      title: 'Smart Edu',
}
);
export default Main = createAppContainer(AppDrawerNavigator);