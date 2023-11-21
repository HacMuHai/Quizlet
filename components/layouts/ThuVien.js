
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, useWindowDimensions, FlatList, ScrollView } from 'react-native';



export default function App({ navigation, route }) {

    const BASE_URL = 'http://localhost:3000'
    const windowDimensions = useWindowDimensions()
    const heightBottomTab = useBottomTabBarHeight() || 0
    const heightView1 = 125
    const heightView2 = windowDimensions.height - heightView1 - heightBottomTab

    const user = {
        "id": 1,
        "name": "Nguyen Van A",
        "email": "vana@example.com",
        "password": "hashed_password",
        "dob": "1990-01-01",
        "isGv": false
    }

    const [search, setSearch] = useState('')
    const [arrCourse, setCourse] = useState([])
    const [arrClass, setClass] = useState([])
    const [arrFolder, setFolder] = useState([])
    var arrView = []
    const view = []

    function getAPI() {
        var folders = []
        var classes = []
        fetch(`${BASE_URL}/folders?userID=${user.id}`)
            .then(reponse => reponse.json())
            .then(data => {
                console.log('1 folders', data)
                folders = data
                setFolder(data)
            })

        fetch(`${BASE_URL}/classes`)
            .then(reponse => reponse.json())
            .then(data => {
                console.log('1 classes', data)

                classes = data.filter(v => {
                    return v.members.includes(user.id) || v.userID === user.id
                })
                setClass(classes)
            })

        fetch(`${BASE_URL}/courses?_sort=lastOpened&_order=desc`)
            .then(reponse => reponse.json())
            .then(data => {
                //json Date -> js Date
                data.forEach(item => {
                    item.lastOpened = new Date(item.lastOpened);
                });

                let arr = data.filter(v => {
                    return v.userID === user.id ||
                        folders.map(vF => vF.id).includes(v.folderID) ||
                        classes.map(vC => vC.id).includes(v.classID)
                })
                setCourse(arr)

            })

    }

    useEffect(() => {
        getAPI()
    }, [])


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

    function renderTitleCourse(item) {
        return (
            <Text key={item} style={{ fontSize: 18, fontWeight: 500, color: 'white', textAlign: 'left', marginVertical: 10, marginHorizontal: 10 }}>{item}</Text>
        );
    };

    function renderCourseView(item) {
        return (
            <TouchableOpacity
                key={item.id}
                style={{
                    gap: 15, flexDirection: 'row', height: 135, borderWidth: 3, borderRadius: 25, borderColor: '#555E7A',
                    justifyContent: 'space-between', alignItems: 'center', padding: 10, paddingLeft: 20, marginVertical: 10, marginHorizontal: 10
                }}
                onPress={() => navigation.push('HocPhan')}
            >
                <View style={{ justifyContent: 'space-between', height: '100%', }}>
                    <View style={{ gap: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{item.title}</Text>
                        <Text style={{ fontSize: 14, fontWeight: 700, color: 'white', }}>{item.vocabularies.length} thuật ngữ</Text>
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, }}>
                        <View style={{ borderRadius: '100%', backgroundColor: '#D21F3F', height: 29, width: 29, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 700 }}>{user.name[0].toUpperCase()}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>{user.name}</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Image
                        style={{ height: 100, width: 100, tintColor: '#FFFFFF1A', resizeMode: 'contain', marginRight: 5 }}
                        source={require('../imgs/image.png')}
                    />
                </View>
            </TouchableOpacity>
        );
    };


    arrCourse.forEach(v => arrView.push(v))

    if (arrView.length > 0) {
        let tempArr = arrView.splice(0, 1)[0]
        console.log(tempArr);


        //Các học phần học hôm này
        let toDay = new Date();
        // view.push(renderTitleCourse(toDay + "1"))

        if (tempArr.lastOpened > toDay) {
            view.push(renderTitleCourse("Hôm nay"))
            do {
                view.push(renderCourseView(tempArr))

                if (arrView.length <= 0)
                    break

                tempArr = arrView.splice(0, 1)[0]
                console.log(tempArr);
            }
            while (tempArr.lastOpened > toDay)
        }

        //Các học phần học hôm qua
        let yesterday = new Date();
        yesterday.setDate(toDay.getDate() - 1)
        yesterday.setHours(0, 0, 0, 0)
        // view.push(renderTitleCourse(yesterday + "2"))

        if (tempArr.lastOpened > yesterday) {
            view.push(renderTitleCourse("Hôm qua"))
            do {
                view.push(renderCourseView(tempArr))

                if (arrView.length <= 0)
                    break

                tempArr = arrView.splice(0, 1)[0]
                console.log(tempArr);
            }
            while (tempArr.lastOpened > yesterday)
        }


        let thisWeek = new Date();
        thisWeek.setDate(toDay.getDate() - toDay.getDay())
        thisWeek.setHours(0, 0, 0, 0)
        // view.push(renderTitleCourse(thisWeek + "3"))

        if (tempArr.lastOpened > thisWeek) {
            view.push(renderTitleCourse("Tuần này"))
            do {
                view.push(renderCourseView(tempArr))

                if (arrView.length > 0)
                    break

                tempArr = arrView.splice(0, 1)[0]
                console.log(tempArr);
            }
            while (tempArr.lastOpened > thisWeek)
        }

        let lastWeek = new Date();
        lastWeek.setDate(toDay.getDate() - toDay.getDay() - 7)
        lastWeek.setHours(0, 0, 0, 0)
        // view.push(renderTitleCourse(lastWeek + "4"))

        if (tempArr.lastOpened > lastWeek) {
            view.push(renderTitleCourse("Tuần trước"))
            do {
                view.push(renderCourseView(tempArr))

                if (arrView.length <= 0)
                    break

                tempArr = arrView.splice(0, 1)[0]
                console.log("Tuần trước", tempArr);
            }
            while (tempArr.lastOpened > lastWeek)
        }
    }

    function HocPhanTab() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0A082D', paddingHorizontal: 15, paddingTop: 15, gap: 20, justifyContent: 'space-between' }}>
                <View style={{ height: 35, flex: 1, width: 130, borderWidth: 2, borderColor: 'white', borderRadius: 10 }}>

                </View>

                <View style={{ height: 35, flex: 1, }}>
                    <TextInput
                        placeholder='Lọc học phần'
                        value={search}
                        onChangeText={setSearch}
                        style={{
                            height: 45, fontSize: 24, fontWeight: 400, color: '#555E7A',
                            borderBottomWidth: 3, borderColor: 'white',
                        }}
                    />
                </View>

                <View style={{ flex: 10, }}>
                    <ScrollView>
                        {view}
                        <View style={{ height: 10 }} />
                    </ScrollView>
                </View>


            </View>
        )
    }

    function LopHocTab() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0A082D' }}>
                <FlatList
                    data={arrClass}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    borderWidth: 3, gap: 10, borderColor: '#555E7A', justifyContent: 'space-between', padding: 15,
                                    height: 100, borderRadius: 15, marginTop: 20, marginHorizontal: 10
                                }}
                            // onPress={()=>navigation.navigate('')}
                            >
                                <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 30, width: 30, resizeMode: 'contain' }}
                                        source={require('../imgs/userFriends.png')}
                                    />
                                    <Text style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{item.name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', gap: 15, alignItems: 'center' }}>
                                    <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>{countCourseByClassID(item.id)} học phần</Text>
                                    <View style={{ height: 20, width: 1, backgroundColor: '#555E7A' }} />
                                    <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>{item.desc}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }
    function ThuMucTab() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0A082D' }}>
                <FlatList
                    ref={null}
                    // data={[{}, {}, {}, {}]}
                    data={arrFolder}
                    renderItem={({ item }) => {

                        return (
                            <TouchableOpacity
                                style={{
                                    borderWidth: 3, gap: 10, borderColor: '#555E7A', justifyContent: 'space-between', padding: 15,
                                    height: 100, borderRadius: 15, marginTop: 20, marginHorizontal: 20
                                }}
                            // onPress={()=>navigation.navigate('')}
                            >
                                <View style={{ flexDirection: 'row', gap: 15, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Image
                                        style={{ height: 24, width: 28, resizeMode: 'contain' }}
                                        source={require('../imgs/folder2.png')}
                                    />
                                    <Text style={{ fontSize: 18, fontWeight: 700, color: 'white' }}>{item.name}</Text>
                                </View>

                                <View style={{ flexDirection: 'row', gap: 10, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}> {countCourseByFolderID(item.id)} học phần</Text>
                                    <View style={{ height: 25, width: 3, backgroundColor: '#555E7A' }} />
                                    <View style={{ flexDirection: 'row', gap: 5, }}>
                                        <View style={{ borderRadius: '100%', backgroundColor: '#D21F3F', height: 29, width: 29, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 16, fontWeight: 700 }}>{user.name[0].toUpperCase()}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>{user.name}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    const Tab = createMaterialTopTabNavigator()

    const tabScreen =['HocPhanTab','LopHocTab','ThuMucTab']
    const {chonTab} = route.params || {chonTab:0}
    return (
        <View style={{ flex: 1, backgroundColor: '#0A082D', paddingTop: 10 }}>
            <View style={{ height: 30, flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={[{ flex: 9, fontSize: 20, fontWeight: 500, color: 'white', textAlign: 'center' }]}>Thư viện</Text>
                <TouchableOpacity style={{ flex: 1, }}>
                    <Image
                        style={{ height: 20, width: 28, resizeMode: 'contain' }}
                        source={require('../imgs/addThuVien.png')}
                    />
                </TouchableOpacity>
            </View>
            <Tab.Navigator style={{ flex: 15 }}
                initialRouteName={tabScreen[chonTab]}
                tabBarOptions={{
                    scrollEnabled: true,
                    activeTintColor: "white",
                    indicatorStyle: { backgroundColor: "white" },
                }}
                screenOptions={{
                    tabBarLabelStyle: { fontSize: 14, fontWeight: 400, },
                    tabBarItemStyle: { width: 110 },
                    tabBarStyle: { backgroundColor: "#0A082D", borderBottomWidth: 3, borderColor: '#2F3857', marginHorizontal: 15 },
                }}
            >
                <Tab.Screen
                    name='HocPhanTab'
                    component={HocPhanTab}
                    options={{
                        tabBarLabel: 'Học phần'
                    }}
                />
                <Tab.Screen
                    name='LopHocTab'
                    component={LopHocTab}
                    options={{
                        tabBarLabel: 'Lớp học'
                    }}
                />
                <Tab.Screen
                    name='ThuMucTab'
                    component={ThuMucTab}
                    options={{
                        tabBarLabel: 'Thư mục'
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A082D',
    },
});