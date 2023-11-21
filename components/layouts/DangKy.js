import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Pressable } from 'react-native';
import DatetimePicker from '@react-native-community/datetimepicker'
import { CheckBox } from 'react-native-elements';
import { Octicons } from '@expo/vector-icons';



export default function DangKy() {
    // handle select date of birth
    const [showDatePicker, setShowDatePicker] = useState(false); // Trạng thái để kiểm soát việc hiển thị DateTimePicker
    const [selectedDate, setSelectedDate] = useState(new Date());  // Trạng thái để lưu ngày được chọn
    const [dateOfBirth, setDateOfBirth] = useState(''); // Trạng thái để hiển thị ngày sinh trong TextInput

    const handleIconPress = () => {
        // Xử lý khi người dùng nhấn vào biểu tượng thông tin
        setShowDatePicker(true); // Hiển thị DateTimePicker
    };

    const handleDateChange = (event, selected) => {
        if (selected) {
            setShowDatePicker(false); // Ẩn DateTimePicker sau khi chọn
            setSelectedDate(selected);
            const formattedDate = selected.toLocaleDateString(); // Định dạng ngày thành chuỗi
            setDateOfBirth(formattedDate); // Cập nhật giá trị ngày sinh vào TextInput
        }
    };

    // handle checkbox
    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = (value) => {
        if (value !== checked) {
            setChecked(value);
        }
    }


    return (
        <ScrollView style={styles.container}>
            <Text style={{ width: 228, height: 49, marginTop: 15, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 18, fontWeight: 400 }}>
                Đăng kí nhanh bằng
            </Text>
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', borderWidth: 1, borderColor:'gray', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
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
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', marginTop: 10, borderWidth: 1, borderColor:'gray', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../imgs/google.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </View>
                <Text
                    style={{ height: '100%', marginTop: 10, marginLeft: 20, color: '#FFFFFF', fontFamily: null, fontSize: 20, fontWeight: 500 }}

                >
                    Tiếp tục với Google
                </Text>
            </View>
            <View style={{ flexDirection: 'row', width: '90%', marginLeft: '5%', marginTop: 10, borderWidth: 1, borderColor:'gray', borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                    <Image
                        source={require('../imgs/apple.png')}
                        style={{ width: 32, height: 32 }}
                    />
                </View>
                <Text
                    style={{ height: '100%', marginTop: 15, marginLeft: 10, color: '#FFFFFF', fontFamily: null, fontSize: 20, fontWeight: 500 }}

                >
                    Đăng nhập bằng Apple
                </Text>
            </View>
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 20, fontSize: 20, fontWeight: 500, color: '#FFFFFF' }}
            >
                hoặc tạo 1 tài khoản
            </Text>
            <View
                style={{ width: '90%', height: 40, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: '5%', marginTop: 10, borderBottomWidth: 1, borderColor: '#F0F0EF' }}
            >
                <TextInput
                    style={{ width: '90%', height: '100%', marginTop: 0, fontSize: 24, color:'white' }}
                    placeholder='Chọn ngày sinh của bạn'
                    placeholderTextColor={'#F0F0EF'}
                    value={dateOfBirth}
                />
                <Pressable
                    style={{ width: '10%', height: '100%', marginBottom: 15, marginTop: 20, justifyContent: 'center', alignItems: 'center' }}
                    onPress={handleIconPress}
                >
                    <Octicons name="info" size={30} color="white" />
                </Pressable>
            </View>

            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Ngày sinh
            </Text>
            {/* Hiển thị DateTimePicker */}
            {showDatePicker && (
                <DatetimePicker
                    value={selectedDate}
                    mode="date"
                    onChange={handleDateChange}
                />
            )}
            <TextInput
                style={{ width: '90%', height: 40, marginLeft: '5%', marginTop: 10, borderBottomWidth: 1, borderColor: '#F0F0EF', fontSize: 24, color: 'white' }}
                placeholder='example@email.com'
                placeholderTextColor={'#F0F0EF'}
            />
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Email
            </Text>
            <TextInput
                style={{ width: '90%', height: 40, marginLeft: '5%', marginTop: 10, borderBottomWidth: 1, borderColor: '#F0F0EF', fontSize: 24, color: 'white' }}
                placeholder='Tạo mật khẩu của bạn'
                placeholderTextColor={'#F0F0EF'}
            />
            <Text
                style={{ width: '90%', marginLeft: '5%', marginTop: 2, fontSize: 14, fontWeight: 400, color: '#F0F0EF' }}
            >
                Mật khẩu
            </Text>
            <Text
                style={{ width: '90%', marginLeft: '4.5%', marginTop: 10, fontSize: 14, fontWeight: 500, color: '#F0F0EF' }}
            >
                Bạn là giáo viên?
            </Text>
            <View style={{ flexDirection: 'row' }}>
                <CheckBox
                    checked={checked}
                    onPress={() => toggleCheckbox(true)}
                    title={"Phải"}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                    containerStyle={{ backgroundColor: '#2F3856', borderWidth: 0 }}
                    titleProps={{ style: { color: '#FFFFFF', fontSize: 20, fontWeight: 700, marginLeft: 10 } }}
                    checkedColor='#FFFFFF'
                    uncheckedColor='#FFFFFF'
                />
                <CheckBox
                    checked={!checked}
                    onPress={() => toggleCheckbox(false)}
                    title={"Không"}
                    iconType="material-community"
                    checkedIcon="checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                    containerStyle={{ backgroundColor: '#2F3856', borderWidth: 0 }}
                    titleProps={{ style: { color: '#FFFFFF', fontSize: 20, fontWeight: 700, marginLeft: 10 } }}
                    checkedColor='#FFFFFF'
                    uncheckedColor='#FFFFFF'
                />
            </View>
            <Text
                style={{ width: '90%', marginTop: 0, marginLeft: '5%', fontSize: 16, fontWeight: 500, color: '#E5E6EA', textAlign: 'center' }}
            >
                Bằng việc đăng kí, bạn chấp thuận
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
                    style={{ width: 149, height: 30, fontSize: 22, fontWeight: 'bold', textAlign: 'center', color: '#FFFFFF' }}
                >
                    Đăng ký
                </Text>
            </Pressable>
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