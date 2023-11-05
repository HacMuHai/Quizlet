import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Switch, Pressable, ScrollView } from 'react-native';




export default function CaiDat() {

    // handle switch
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

    return (
        <ScrollView style={styles.container}>
            <View style={{ width: '100%', height: 97, flexDirection: 'row', backgroundColor: '#2F3857', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={{ width: 145, height: 35, fontSize: 16, fontWeight: 500, color: '#FFFFFF' }}
                    >
                        Loại tài khoản
                    </Text>
                    <Text
                        style={{ width: 100, height: 16, fontSize: 16, fontWeight: 400, color: '#BEC9CD' }}
                    >
                        Miễn phí
                    </Text>
                </View>
                <Pressable
                    style={{ width: 199, height: 44, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 20, backgroundColor: '#FCCD1B' }}
                >
                    <Text
                        style={{ width: 171, height: 23, fontSize: 16, fontWeight: 700, textAlign: 'center' }}
                    >
                        Nâng cấp: dùng thử
                    </Text>
                </Pressable>
            </View>
            <View style={{ width: '100%', height: 212, marginTop: 30, backgroundColor: '#2F3857' }}>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', borderBottomWidth: 1, borderColor: '#596281', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '87%' }}>
                        <Text
                            style={{ width: 68, height: 25, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Email
                        </Text>
                        <TextInput
                            style={{ height: 25 }}
                            placeholder='hoaihiep@gmail.com'
                            placeholderTextColor={'#BEC9CD'}
                        />
                    </View>
                    <View style={{ width: '13%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', borderBottomWidth: 1, borderColor: '#596281', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '87%' }}>
                        <Text
                            style={{ width: 145, height: 25, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Tên người dùng
                        </Text>
                        <TextInput
                            style={{ height: 25 }}
                            placeholder='hoaihiep32'
                            placeholderTextColor={'#BEC9CD'}
                        />
                    </View>
                    <View style={{ width: '13%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', borderBottomWidth: 1, borderColor: '#596281', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '87%' }}>
                        <Text
                            style={{ width: 145, height: 25, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Thêm mật khẩu
                        </Text>
                    </View>
                    <View style={{ width: '13%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 103, marginTop: 30, backgroundColor: '#2F3857', justifyContent: 'center' }}>
                <View style={{ width: '92%', height: 100, marginLeft: '8%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '80%', height: '100%', justifyContent: 'center' }}>
                        <Text
                            style={{ width: 306, height: 25, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Lưu học phần để học ngoại tuyến
                        </Text>
                        <Text
                            style={{ width: 250, height: 25, fontSize: 16, fontWeight: 400, color: '#BEC9CD' }}
                        >
                            8 học phần mới học gần đây nhất
                        </Text>
                        <Text
                            style={{ width: 250, height: 25, fontSize: 16, fontWeight: 400, color: '#BEC9CD' }}
                        >
                            của bạn sẽ được tự động tải xuống
                        </Text>
                    </View>
                    <View style={{ width: '20%', marginLeft: 0 }}>
                        <Switch
                            style={{ height: 30 }}
                            trackColor={{ false: '#767577', true: '#4254FE' }}
                            thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                            ios_backgroundColor="#FFFFFF"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                        />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 119, marginTop: 30, backgroundColor: '#2F3857' }}>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', borderBottomWidth: 1, borderColor: '#596281', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 10, marginLeft: 10 }}>
                        <Text
                            style={{ width: 145, height: 35, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Thông báo đầy
                        </Text>
                    </View>
                    <View style={{ width: '15%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, width: '92%', marginLeft: '8%', justifyContent: 'center' }}>
                    <View style={{ width: '80%', justifyContent: 'center' }}>
                        <Text
                            style={{ width: 170, height: 25, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Hiệu ứng âm thanh
                        </Text>
                    </View>
                    <View style={{ width: '20%', marginLeft: 0 }}>
                        <Switch
                            style={{ height: 30 }}
                            trackColor={{ false: '#767577', true: '#4254FE' }}
                            thumbColor={isEnabled1 ? '#FFFFFF' : '#FFFFFF'}
                            ios_backgroundColor="#FFFFFF"
                            onValueChange={toggleSwitch1}
                            value={isEnabled1}
                        />
                    </View>
                </View>

            </View>
            <View style={{ width: '100%', height: 119, marginTop: 30, backgroundColor: '#2F3857' }}>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', borderBottomWidth: 1, borderColor: '#596281', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 10, marginLeft: 10 }}>
                        <Text
                            style={{ width: 145, height: 35, fontSize: 16, fontWeight: 400, color: '#FFFFFF' }}
                        >
                            Trung tâm hổ trợ
                        </Text>
                    </View>
                    <View style={{ width: '15%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', borderBottomWidth: 1, borderColor: '#596281', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 10, marginLeft: 10 }}>
                        <Text
                            style={{ width: 145, height: 35, fontSize: 16, fontWeight: 'bold', color: '#dc143c' }}
                        >
                            Xóa tài khoản
                        </Text>
                    </View>
                    <View style={{ width: '15%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
            </View>
            <View style={{ width: '100%', height: 60, marginTop: 30, backgroundColor: '#2F3857' }}>
                <View style={{ width: '92%', height: 60, marginLeft: '8%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 10, marginLeft: 10 }}>
                        <Text
                            style={{ width: 145, height: 35, fontSize: 16, fontWeight: 'bold', color: '#1e90ff' }}
                        >
                            Đăng xuất
                        </Text>
                    </View>
                    <View style={{ width: '15%', marginLeft: 10 }}>
                        <Image
                            source={require('../imgs/right-arrow.png')}
                            style={{ width: 24, height: 24 }}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A082D',
        // alignItems: 'center',
    },
});