import { StyleSheet, Text, View, Image } from 'react-native';

import ThuVien from './ThuVien';
import TrangChu from './TrangChu';
import LopHoc from './LopHoc';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';

export default function App({ navigation, route }) {

    const BottomTab = createBottomTabNavigator();
    const screens = ['TrangChu', "LoiGiai", "add", "ThuVien", "HoSO"]
    const start = route.params?.start || 0
    const sizeIcon = 40

    const Stack = createNativeStackNavigator();

    // const LibraryScreen = () => {
    //     return (
    //       <Stack.Navigator>
    //         <Stack.Screen name="ThuVien" component={ThuVien} />
    //         {/* <Stack.Screen name="LopHoc" component={LopHoc} /> */}
    //       </Stack.Navigator>
    //     );
    //   };
   
    return (
        <BottomTab.Navigator
            initialRouteName={screens[start]}
            screenOptions={{
                tabBarStyle: { backgroundColor: "#0A082D",borderTopWidth:3,height:65 },
                tabBarLabelStyle:{fontSize:14},
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: '#555E7A',
                tabBarIconStyle:{size:15}
            }}
        >
            <BottomTab.Screen
                name={screens[0]}
                component={TrangChu}
                options={{
                    headerShown: false,
                    title: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <View><Image style={{ height: sizeIcon, width: sizeIcon, resizeMode: 'contain', tintColor: color }} source={require('../imgs/search.png')} /></View>
                    )
                }} />

            <BottomTab.Screen
                name={screens[1]}
                component={TrangChu}
                options={{
                    headerShown: false,
                    title: 'Lời giải',
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}><Image style={{ height: sizeIcon, width: sizeIcon, resizeMode: 'contain', tintColor: color }} source={require('../imgs/book.png')} /></View>
                    )
                }} />

            <BottomTab.Screen
                name={screens[2]}
                component={TrangChu}
                options={{
                    headerShown: false,
                    title: '',
                    
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ alignItems: 'center', justifyContent: 'center'}}><Image style={{ height: sizeIcon+10, width: sizeIcon+10, resizeMode: 'contain', tintColor: color }} source={require('../imgs/add.png')} /></View>
                    )
                }} />

            <BottomTab.Screen
                name={screens[3]}
                component={ThuVien}
                options={{
                    headerShown: false,
                    title: 'Thư viện',
                    tabBarIcon: ({ color, size }) => (
                        <View><Image style={{ height: sizeIcon, width: sizeIcon, resizeMode: 'contain', tintColor: color }} source={require('../imgs/Folder.png')} /></View>
                    )
                }} />

            <BottomTab.Screen
                name={screens[4]}
                component={TrangChu}
                options={{
                    headerShown: false,
                    title: 'Hồ sơ',
                    tabBarIcon: ({ color, size }) => (
                        <View><Image style={{ height: sizeIcon, width: sizeIcon, resizeMode: 'contain', tintColor: color }} source={require('../imgs/face.png')} /></View>
                    )
                }} />
        </BottomTab.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
