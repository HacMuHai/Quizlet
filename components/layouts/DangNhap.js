import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, ScrollView } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import React, { useState, useEffect } from 'react';


export default function DangNhap({ navigation, route }) {


    // useState cua email va mat khau
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    // Lay api
    const BASE_URL = 'https://pwqz9y-8080.csb.app/users'

    const [data, setData] = useState([])

    // config alert
    const toastConfig = {
        success: (props) => (
            <BaseToast
                {...props}
                style={{ borderLeftColor: 'green' }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 30, // Đặt kích thước chữ
                    fontWeight: '700', // Có thể thêm các thuộc tính kiểu khác tại đây
                    color: 'black'
                }}
                text2Style={{
                    fontSize: 15, // Đặt kích thước chữ
                    fontWeight: '500', // Có thể thêm các thuộc tính kiểu khác tại đây
                    color: 'green'
                }}
            />
        ),
        error: (props) => (
            <ErrorToast
                {...props}
                style={{ borderLeftColor: 'red' }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 30, // Đặt kích thước chữ
                    fontWeight: '700',
                    color: 'black'
                }}
                text2Style={{
                    fontSize: 15,
                    fontWeight: '500',
                    color: 'red'
                }}
            />
        ),
    };
    // xu li dang nhap
    function handleLogin() {
        if (!email || !password) {
            Toast.show({
                type: 'error', // Loại thông báo: 'success', 'error', 'info'
                text1: 'Lỗi', // Tiêu đề
                text2: 'Vui lòng nhập đầy đủ email và mật khẩu', // Nội dung
                position: 'top',
                topOffset: 10,
            });
            return;
        }

        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setData(json);

                const isSuccess = json.find(item => item.email === email && item.password === password);

                if (isSuccess) {
                    Toast.show({
                        type: 'success', // Loại thông báo: 'success', 'error', 'info'
                        text1: 'Thông báo', // Tiêu đề
                        text2: 'Đăng nhập thành công!', // Nội dung
                        position: 'top',
                        topOffset: 10,
                    });
                } else {
                    Toast.show({
                        type: 'error', // Loại thông báo: 'success', 'error', 'info'
                        text1: 'Lỗi', // Tiêu đề
                        text2: 'Đăng nhập thất bại!', // Nội dung
                        position: 'top',
                        topOffset: 10,
                    });
                }
            })
            .catch(error => {
                console.error(error);
                showMessage({
                    message: "Đã có lỗi xảy ra khi tương tác với API",
                    type: "danger",
                });
                Toast.show({
                    type: 'error', // Loại thông báo: 'success', 'error', 'info'
                    text1: 'Lỗi', // Tiêu đề
                    text2: 'Lỗi khi tương tác với API', // Nội dung
                    position: 'top',
                    topOffset: 10,
                });
            });
    }

    // function handleLogin() {
    //     fetch(BASE_URL)
    //         .then(response => response.json())
    //         .then(json => {
    //             setData(json)
    //             console.log(data)
    //             if (json.find(item => item.email === email && item.password === password)) {
    //                 console.log("dang nhap thanh cong!")
    //             } else {
    //                 console.log("dang nhap that bai!")
    //             }
    //         })
    //         .catch(error => console.error(error))

    // }

    return (
        <ScrollView style={styles.container}>
            <Text style={{ width: 228, height: 49, marginTop: 15, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 18, fontWeight: 400 }}>
                Đăng nhập nhanh bằng
            </Text>
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', borderWidth: 1, borderColor: 'gray', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../imgs/facebook.png')}
                        style={{ width: 32, height: 32 }}
                    />
                </View>
                <Text
                    style={{ height: '100%', marginTop: 15, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 20, fontWeight: 500 }}

                >
                    Tiếp tục với Facebook
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', marginTop: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../imgs/google.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </View>
                <Text
                    style={{ height: '100%', marginTop: 15, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 20, fontWeight: 500 }}

                >
                    Tiếp tục với Google
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', marginTop: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../imgs/apple.png')}
                        style={{ width: 32, height: 32 }}
                    />
                </View>
                <Text
                    style={{ height: '100%', marginTop: 15, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 20, fontWeight: 500 }}

                >
                    Đăng nhập bằng Apple
                </Text>
            </View>
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 20, fontSize: 20, fontWeight: 500, color: '#FFFFFF' }}
            >
                hoặc đăng nhập bằng email hoặc tên người dùng của bạn
            </Text>
            <TextInput
                style={{ width: '90%', height: 40, marginLeft: '5%', marginTop: 20, borderBottomWidth: 1, borderColor: '#F0F0EF', color: 'white', fontSize: 24 }}
                placeholder='Nhập tên người dùng của bạn'
                placeholderTextColor={'#F0F0EF'}
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Email hoặc tên người dùng
            </Text>
            <TextInput
                style={{ width: '90%', height: 40, marginLeft: '5%', marginTop: 20, borderBottomWidth: 1, borderColor: '#F0F0EF', color: 'white', fontSize: 24 }}
                placeholder='Nhập mật khẩu của bạn'
                placeholderTextColor={'#F0F0EF'}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Mật khẩu
            </Text>
            <TouchableOpacity
                style={{ width: '90%', height: 20, marginLeft: '5%', alignItems: 'flex-end' }}
                onPress={() => {
                    navigation.navigate('DangKy')
                }}
            >
                <Text
                    style={{ marginLeft: 5, fontSize: 16, fontWeight: 500, color: '#969EE7' }}
                >
                    chưa có tài khoản?
                </Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', width: '80%', marginLeft: '10%', marginTop: 10, justifyContent: 'center' }}>
                <Text
                    style={{ fontSize: 16, fontWeight: 500, color: '#F0F0EF' }}
                >
                    Quên
                </Text>
                <TouchableOpacity>
                    <Text
                        style={{ marginLeft: 5, fontSize: 16, fontWeight: 500, color: '#969EE7' }}
                    >
                        tên người dùng
                    </Text>
                </TouchableOpacity>

                <Text
                    style={{ marginLeft: 5, fontSize: 16, fontWeight: 500, color: '#F0F0EF' }}
                >
                    hoặc
                </Text>
                <TouchableOpacity>
                    <Text
                        style={{ marginLeft: 5, fontSize: 16, fontWeight: 500, color: '#969EE7' }}
                    >
                        mật khẩu
                    </Text>
                </TouchableOpacity>

                <Text
                    style={{ fontSize: 16, fontWeight: 500, color: '#F0F0EF' }}
                >
                    ?
                </Text>
            </View>
            <Text
                style={{ width: '90%', marginTop: 10, marginLeft: '5%', fontSize: 16, fontWeight: 500, color: '#E5E6EA', textAlign: 'center' }}
            >
                Bằng việc đăng nhập, bạn chấp thuận
            </Text>
            <View
                style={{ width: '95%', marginTop: 2, marginLeft: '2.5%', flexDirection: 'row', fontSize: 16, fontWeight: 500, color: '#F0F0EF', alignItems: 'center', justifyContent: 'center' }}
            >
                <Text
                    style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF', textAlign: 'center' }}
                >
                    Điều khoản dịch vụ
                </Text>
                <Text
                    style={{ fontSize: 14, fontWeight: 500, color: '#E5E6EA', textAlign: 'center', marginLeft: 5 }}
                >
                    và
                </Text>
                <Text
                    style={{ fontSize: 16, fontWeight: 500, color: '#FFFFFF', textAlign: 'center', marginLeft: 5 }}
                >
                    Chính sách quyền riêng tư
                </Text>
            </View>
            <Text
                style={{ width: '90%', marginTop: 2, marginLeft: '5%', fontSize: 16, fontWeight: 500, color: '#E5E6EA', textAlign: 'center' }}
            >
                của Quizlet
            </Text>
            <Pressable
                style={{ width: '90%', height: 49, marginLeft: '5%', marginTop: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4254FE' }}
                onPress={handleLogin}
            >
                <Text
                    style={{ width: 149, height: 30, fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                >
                    Đăng nhập
                </Text>
            </Pressable>
            <View style={{ height: 40 }} />
            {/* thông báo khi đăng kí */}
            <Toast ref={(ref) => Toast.setRef(ref)} config={toastConfig} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2F3856',
        // alignItems: 'center',
    },
});