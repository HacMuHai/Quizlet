import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native';
import { useState, useRef } from 'react';


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
        <View style={[styles.viewOfFlatlist, { marginTop: index === 0 ? 20 : 35 }]}>
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
        <View style={styles.container}>
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

        </View>
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