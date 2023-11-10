import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';


export default function App() {
    const [search, setSearch] = useState('')

    const arr = [{}, {}, {}, {}, {}, {}, {}]

    return (
        <View style={[styles.container, { gap: 30 }]}>
            {/* view 1: Header */}
            <View style={{ height: 130 }}>
                <View style={{ flex: 4, backgroundColor: '#2F3857' }}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                        <Text style={{ fontSize: 32, fontWeight: 'bold', color: '#FFF' }}>Quizlet</Text>
                        <View style={{ flexDirection: 'row', gap: 10 }}>
                            <TouchableOpacity style={{ width: 110, height: 38, backgroundColor: '#FFCC23', borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 14, fontWeight: 700 }}>Nâng cấp</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Image
                                    style={{ height: 28, width: 24 }}
                                    source={require('../imgs/bell.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', gap: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D9D9D9', borderRadius: 25, paddingLeft: 15, paddingRight: 15, marginLeft: 15, marginRight: 15 }}>
                        <Image
                            style={{ flex: 1, height: 24, width: 24, resizeMode: 'contain', tintColor: '#555E7A' }}
                            source={require('../imgs/search.png')}
                        />
                        <TextInput
                            value={search}
                            onChangeText={setSearch}
                            placeholder='Học phần, sách giáo khoa, câu hỏi'
                            style={{ flex: 10, height: 30, fontSize: 16, fontWeight: 400 }}
                        />
                        <Image
                            style={{ flex: 1, height: 24, width: 24, resizeMode: 'contain' }}
                            source={require('../imgs/camera.png')}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: '#2F3857', borderBottomLeftRadius: '100%', borderBottomRightRadius: '100%', marginTop: -1, }} />
            </View>

            {/* View 2: Các học phần */}
            <View style={{ gap: 10, justifyContent: 'space-between' }}>

                <View style={{ height: 35, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' }}>Các học phần</Text>
                    <TouchableOpacity style={{ width: 110, height: 38, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 700, color: '#302EAC' }}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <FlatList
                        ref={null}
                        data={[{}, {}, {}, {}]}
                        horizontal={true}
                        pagingEnabled={true}
                        renderItem={({ item, index }) => {

                            return (
                                <TouchableOpacity
                                    style={{ height: 140, width: 325, borderWidth: 5, borderRadius: 25, borderColor: '#555E7A', marginRight: 20 }}
                                >
                                    <Text style={{color:'white'}}></Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>

            {/* View 3: Thư mục */}
            <View style={{ gap: 10, justifyContent: 'space-between' }}>

                <View style={{ height: 35, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' }}>Thư mục</Text>
                    <TouchableOpacity style={{ width: 110, height: 38, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 700, color: '#302EAC' }}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <FlatList
                        data={[{}, {}]}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={{ height: 105, width: 345, borderWidth: 5, borderRadius: 25, borderColor: '#555E7A', marginRight: 20 }}
                                >

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>

            <View style={{ gap: 10, justifyContent: 'space-between', marginBottom: 30 }}>

                <View style={{ height: 35, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' }}>Các học phần</Text>
                    <TouchableOpacity style={{ width: 110, height: 38, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, fontWeight: 700, color: '#302EAC' }}>Xem tất cả</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginLeft: 20 }}>
                    <FlatList
                        data={[{}, {}]}
                        horizontal={true}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={{ height: 140, width: 345, borderWidth: 5, borderRadius: 25, borderColor: '#555E7A', marginRight: 20 }}
                                >

                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0A082D',
    },
});
