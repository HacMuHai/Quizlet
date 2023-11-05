import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native';

export default function DangNhap() {
    return (
        <View style={styles.container}>
            <Text style={{ width: 228, height: 49, marginTop: 15, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 18, fontWeight: 400 }}>
                Đăng nhập nhanh bằng
            </Text>
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
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
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', marginTop: 20, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
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
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', marginTop: 20, borderWidth: 1, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
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
                style={{ width: '90%', height: 40, marginLeft: '5%', marginTop: 20, borderBottomWidth: 1, borderColor: '#F0F0EF' }}
                placeholder='Nhập tên người dùng của bạn'
                placeholderTextColor={'#F0F0EF'}
            />
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Email hoặc tên người dùng
            </Text>
            <TextInput
                style={{ width: '90%', height: 40, marginLeft: '5%', marginTop: 20, borderBottomWidth: 1, borderColor: '#F0F0EF' }}
                placeholder='Nhập mật khẩu của bạn'
                placeholderTextColor={'#F0F0EF'}
            />
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Mật khẩu
            </Text>
            <View style={{ flexDirection: 'row', width: '80%', marginLeft: '10%', marginTop: 20, justifyContent: 'center' }}>
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
            >
                <Text
                    style={{ width: 149, height: 30, fontSize: 22, fontWeight: 'bold', textAlign:'center', color:'#FFFFFF' }}
                >
                    Đăng nhập
                </Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#545D7B',
        // alignItems: 'center',
    },
});