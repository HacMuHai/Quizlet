import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useState, useRef } from 'react';
import { Entypo, MaterialCommunityIcons, Feather } from '@expo/vector-icons';


const data = [
    {
        id: 1,
        vocabulary: "involve"
    },
    {
        id: 2,
        vocabulary: "Start"
    },
    {
        id: 3,
        vocabulary: "Go"
    },
    {
        id: 4,
        vocabulary: "Reject"
    },
    {
        id: 5,
        vocabulary: "Inject"
    },
    {
        id: 6,
        vocabulary: "Back"
    },
    {
        id: 7,
        vocabulary: "School"
    },
    {
        id: 8,
        vocabulary: "Home"
    },
    {
        id: 9,
        vocabulary: "Stadium"
    },
    {
        id: 10,
        vocabulary: "Football"
    },
    {
        id: 11,
        vocabulary: "Voleyball"
    },
    {
        id: 12,
        vocabulary: "Basketball"
    },
    {
        id: 13,
        vocabulary: "Board"
    },
]

const SCREEN_WIDTH = 300;
const DOT_PAGE_SIZE = 7;

export default function HocPhan() {
    const renderItemOfVocalbulary = ({ item, index }) => (
        <View style={[styles.viewOfFlatlist, { marginTop: index === 0 ? 20 : 20 }]}>
            <Text style={styles.textOfFlatlist}>{item.vocabulary}</Text>
        </View>
    )
    const renderItemOfDot = ({ item, index }) => (
        <View style={{ flexDirection: 'row', height: 15 }}>
            <View style={[styles.dot, { opacity: currentPage === index ? 1 : 0.5 }]} key={item.id} />
        </View>
    )


    // handle scroll flatlist


    const flatlistRef = useRef();
    const [currentPage, setCurrentPage] = useState(0);




    const handleScroll = (event) => {
        const offset = event.nativeEvent.contentOffset.x;
        const currentIndex = Math.floor(offset / SCREEN_WIDTH);
        setCurrentPage(currentIndex);

        if (currentIndex >= DOT_PAGE_SIZE - 1 && flatlistRef.current) {
            const newPage = currentIndex + 1;
            flatlistRef.current.scrollToIndex({ index: newPage });
        }
    };






    return (
        <ScrollView style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    renderItem={renderItemOfVocalbulary}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={true}
                    pagingEnabled
                    onMomentumScrollEnd={e => {
                        const offset = e.nativeEvent.contentOffset.x;
                        const currentPage = Math.floor(offset / SCREEN_WIDTH);
                        // setCurrentPage(currentPage);
                        setCurrentPage(currentIndex);
                    }}
                    onScroll={handleScroll}
                />
            </View>
            <View style={{ width: '100%', marginTop: 20, justifyContent: 'center', alignItems: 'center' }}>
                <FlatList
                    data={data}
                    renderItem={renderItemOfDot}
                    keyExtractor={item => item.id.toString()}
                    horizontal={true}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ width: Math.min(data.length * 20, 7 * 20) }}
                />
            </View>
            <View style={{ width: '90%', height: 30, marginTop: 10, marginLeft: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 24, fontWeight: '600', color: 'white' }}>
                    Điểm trí nhớ của bạn
                </Text>
                <Entypo name="dots-three-horizontal" size={28} color="white" />
            </View>
            <View style={{ width: '90%', height: 130, marginLeft: '5%', marginTop: 15, backgroundColor: '#2F3856', alignItems: 'center' }}>
                <View style={{ width: '80%', height: 25, marginTop: 30, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Text style={{ width: 60, height: 25, fontSize: 18, fontWeight: '650', color: 'white' }}>
                        1 ngày
                    </Text>
                    <Text style={{ width: 60, height: 25, fontSize: 18, fontWeight: '650', color: 'white' }}>
                        1 tuần
                    </Text>
                    <Text style={{ width: 65, height: 25, fontSize: 18, fontWeight: '650', color: 'white' }}>
                        1 tháng
                    </Text>
                </View>
                <View style={{ width: '85%', marginTop: 10, borderWidth: 2, borderColor: '#555E7A' }} />
                <View style={{ width: '90%', height: 40, flexDirection: 'row', marginTop: 10 }}>
                    <View style={{ width: '70%', height: 35, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <View style={{ width: 34, backgroundColor: 'white', borderWidth: 1, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }}>
                            <Feather name="clock" size={35} color="#5EC7F6" />
                        </View>
                        <Text style={{ width: 120, height: 22, color: '#5EC7F6', fontSize: 18, fontWeight: 600, marginTop: 5 }}>
                            trí nhớ 1 ngày
                        </Text>
                    </View>
                    <Text style={{ width: 80, color: '#5EC7F6', fontSize: 30, fontWeight: 800, marginLeft: 20 }}>
                        97%
                    </Text>
                </View>

            </View>
            <View style={{ width: '90%', height: 36, marginLeft: '5%', marginTop: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <Text style={{ fontSize: 32, fontWeight: '600', color: 'white' }}>
                    Vocabulary 4
                </Text>
                <MaterialCommunityIcons name="download-circle-outline" size={38} color="white" />
            </View>
            <View style={{ width: '90%', height: 48, marginLeft: '5%', marginTop: 20, flexDirection: 'row' }}>
                <View style={{ width: '40%', height: '100%', flexDirection: 'row', borderRightWidth: 1, borderColor: 'white' }}>
                    <View style={{ width: 43, height: 41, justifyContent: 'center', alignItems: 'center', backgroundColor: '#AA46BC', borderWidth: 1, borderRadius: 100, borderColor: '#AA46BC' }}>
                        <Text style={{ fontSize: 30, fontWeight: '900', color: 'white' }}>H</Text>
                    </View>
                    <Text style={{ marginLeft: 15, fontSize: 25, fontWeight: '600', color: 'white' }}>hhiep</Text>
                </View>
                <View style={{ width: '60%', height: '100%', flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 20, fontSize: 25, fontWeight: '600', color: 'white' }}>33 thuật ngữ</Text>
                </View>
            </View>
            <View style={{ width: '90%', height: 80, marginLeft: '5%', marginTop: 10, flexDirection: 'row', backgroundColor: '#2F3856', borderWidth: 1, borderRadius: 10, borderColor: '#2F3856' }}>
                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="credit-card-multiple-outline" size={35} color="#4254FE" />
                </View>
                <View style={{ width: '80%', height: '100%', marginTop: 10 }}>
                    <Text style={{ width: 120, height: 23, fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                        Thẻ ghi nhớ
                    </Text>
                    <Text style={{ width: 230, height: 23, fontSize: 14, marginTop: 10, color: '#B4BECD', fontWeight: '500' }}>
                        ôn lại các thuật ngữ và định nghĩa
                    </Text>
                </View>
            </View>
            <View style={{ width: '90%', height: 80, marginLeft: '5%', marginTop: 10, flexDirection: 'row', backgroundColor: '#2F3856', borderWidth: 1, borderRadius: 10, borderColor: '#2F3856' }}>
                <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="progress-clock" size={35} color="#4254FE" />
                </View>
                <View style={{ width: '80%', height: '100%', marginTop: 10 }}>
                    <Text style={{ width: 120, height: 23, fontSize: 16, color: 'white', fontWeight: 'bold' }}>
                        Học
                    </Text>
                    <Text style={{ width: 230, height: 23, fontSize: 14, marginTop: 10, color: '#B4BECD', fontWeight: '500' }}>
                        Tập trung với một lộ trình cụ thể
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0A082D',
    },
    viewOfFlatlist: {
        width: 300,
        height: 190,
        borderWidth: 1,
        borderColor: '#2F3856',
        borderRadius: 10,
        backgroundColor: '#2F3856',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        // marginTop: 10
    },
    textOfFlatlist: {
        width: 107,
        height: 26,
        fontSize: 28,
        fontWeight: 400,
        color: '#FFFFFF',
        textAlign: 'center'

    },
    dot: {
        height: 10,
        width: 10,
        borderRadius: 5,
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        marginHorizontal: 8,
    }
});