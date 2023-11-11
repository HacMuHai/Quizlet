import { useEffect } from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native';


export default function App() {
    const [search, setSearch] = useState('')
    const BASE_URL = 'http://localhost:3000'
    const user = {
        "id": 201,
        "name": "Nguyen Van A",
        "email": "vana@example.com",
        "password": "hashed_password",
        "dob": "1990-01-01",
        "isGv": false
    }

    const arr = [{}, {}, {}, {}, {}, {}, {}]
    var [arrCourse, setCourse] = useState([])
    var [arrClass, setClass] = useState([])
    var [arrFolder, setFolder] = useState([])


    function getAPI() {
        fetch(`${BASE_URL}/courses`)
            .then(reponse => reponse.json())
            .then(data => {
                console.log('1 course', data)
                setCourse(data)
            })

        fetch(`${BASE_URL}/folders`)
            .then(reponse => reponse.json())
            .then(data => {
                console.log('1 folders', data)
                setFolder(data)
            })

        fetch(`${BASE_URL}/classes`)
            .then(reponse => reponse.json())
            .then(data => {
                console.log('1 classes', data)
                setClass(data)
            })
    }

    function countCourseByFolderID(folderID) {
        return arrCourse.reduce((pre, cur) => {
            return cur.folderID === folderID ? pre + 1 : pre
        }, 0)
    }

    function countCourseByClassID(ClassID) {
        return arrCourse.reduce((pre, cur) => {
            return cur.classID === ClassID ? pre + 1 : pre
        }, 0)
    }



    useEffect(() => {
        getAPI()
    }, [])

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

            <View style={{ gap: 25 }}>

                {/* View 4: Lớp học */}
                <View style={{ gap: 10, justifyContent: 'space-between' }}>

                    <View style={{ height: 35, flexDirection: 'row', justifyContent: 'space-between', marginLeft: 30, marginRight: 30 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#FFFFFF' }}>Lớp học</Text>
                        <TouchableOpacity style={{ width: 110, height: 38, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 700, color: '#302EAC' }}>Xem tất cả</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 20 }}>
                        <FlatList
                            ref={null}
                            // data={[{}, {}, {}, {}]}
                            data={arrClass}
                            horizontal={true}
                            pagingEnabled={true}
                            renderItem={({ item }) => {

                                return (
                                    <TouchableOpacity
                                        style={{
                                            gap: 10, height: 150, width: 325, borderWidth: 5, borderRadius: 25, borderColor: '#555E7A',
                                            justifyContent: 'space-between', marginRight: 20, padding: 10, paddingLeft: 20
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                            <View style={{ flex: 8, gap: 5 }}>
                                                <Text style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{item.name}</Text>
                                                <Text style={{ fontSize: 14, fontWeight: 400, color: 'white' }}>{item.desc}</Text>
                                            </View>
                                            <Image
                                                style={{ flex: 2, height: 35, width: 35, resizeMode: 'contain' }}
                                                source={require('../imgs/userFriends.png')}
                                            />
                                        </View>

                                        <View style={{ gap: 5, }}>
                                            <View style={{ flexDirection: 'row',gap:10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Image
                                                    style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                                    source={require('../imgs/clone.png')}
                                                />
                                                <Text style={{ fontSize: 16, fontWeight: 400,color:'white' }}>{countCourseByClassID(item.id)} học phần</Text>
                                            </View>
                                            <View style={{ flexDirection: 'row',gap:10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                                <Image
                                                    style={{ height: 20, width: 20, resizeMode: 'contain' }}
                                                    source={require('../imgs/user.png')}
                                                />
                                                <Text style={{ fontSize: 16, fontWeight: 400,color:'white' }}>{item.members.length} thành viên</Text>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>

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
                            // data={[{}, {}, {}, {}]}
                            data={arrCourse}
                            horizontal={true}
                            pagingEnabled={true}
                            renderItem={({ item }) => {

                                return (
                                    <TouchableOpacity
                                        style={{
                                            gap: 15, height: 145, width: 325, borderWidth: 5, borderRadius: 25, borderColor: '#555E7A',
                                            justifyContent: 'space-between', marginRight: 20, padding: 10, paddingLeft: 20
                                        }}
                                    >
                                        <View style={{ gap: 10 }}>
                                            <Text style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{item.title}</Text>
                                            <View style={{ flexDirection: 'row', gap: 10 }}>
                                                <Text style={{ fontSize: 14, fontWeight: 700, color: 'white', backgroundColor: '#2F3857', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20 }}>{item.vocabularies.length} thuật ngữ</Text>
                                                <View style={{ flexDirection: 'row', gap: 10, backgroundColor: '#2F3857', width: 90, padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 20 }}>
                                                    <Image
                                                        style={{ height: 20, width: 30, resizeMode: 'contain' }}
                                                        source={require('../imgs/image.png')}
                                                    />
                                                    <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>Ảnh</Text>
                                                </View>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', gap: 5, }}>
                                            <View style={{ borderRadius: '100%', backgroundColor: '#D21F3F', height: 29, width: 29, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 16, fontWeight: 700 }}>{user.name[0].toUpperCase()}</Text>
                                            </View>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>{user.name}</Text>
                                            </View>
                                        </View>
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
                            ref={null}
                            // data={[{}, {}, {}, {}]}
                            data={arrFolder}
                            horizontal={true}
                            pagingEnabled={true}
                            renderItem={({ item }) => {

                                return (
                                    <TouchableOpacity
                                        style={{
                                            height: 100, width: 325, borderWidth: 5, borderRadius: 25, borderColor: '#555E7A',
                                            justifyContent: 'space-around', marginRight: 20, padding: 10, paddingLeft: 20
                                        }}
                                    >
                                        <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Image
                                                style={{ height: 24, width: 28, resizeMode: 'contain' }}
                                                source={require('../imgs/folder2.png')}
                                            />
                                            <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>{item.name}</Text>
                                        </View>

                                        <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}> {countCourseByFolderID(item.id)} học phần</Text>
                                            <View style={{ height: 25, width: 3, backgroundColor: '#555E7A' }} ></View>
                                            <View style={{ flexDirection: 'row', gap: 5, }}>
                                                <View style={{ borderRadius: '100%', backgroundColor: '#D21F3F', height: 29, width: 29, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 16, fontWeight: 700 }}>{user.name[0].toUpperCase()}</Text>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>{user.name}</Text>
                                                </View></View>
                                        </View>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>

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
