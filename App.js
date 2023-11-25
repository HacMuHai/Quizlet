import { StyleSheet, Text, View,Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DangNhap from './components/layouts/DangNhap';
import DangKy from './components/layouts/DangKy';
import CaiDat from './components/layouts/CaiDat';
import HocPhan from './components/layouts/HocPhan';
// import LopHoc from './components/layouts/LopHoc';
import bottomTab from './components/layouts/bottomTab';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='bottomTab'>
          <Stack.Screen name="DangNhap" component={DangNhap} options={{ headerShown: false }} />
          <Stack.Screen name="DangKy" component={DangKy} options={{ headerShown: false }} />
          <Stack.Screen name="CaiDat" component={CaiDat} options={{ headerShown: false }} />
          <Stack.Screen name="HocPhan" component={HocPhan} options={{ headerShown: false }} />
          {/* <Stack.Screen name="LopHoc" component={LopHoc} options={{ headerShown: false }} /> */}
          <Stack.Screen name="bottomTab" component={bottomTab} options={{ headerShown: false }} />
        
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
