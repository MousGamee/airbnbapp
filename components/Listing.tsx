import { View, FlatList, ListRenderItem, TouchableOpacity, StyleSheet, Image, Text } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Animated, { FadeIn, FadeInRight, FadeOutLeft } from 'react-native-reanimated';
import { BottomSheetFlatList, BottomSheetFlatListMethods } from '@gorhom/bottom-sheet';
import { MotiView } from 'moti';

interface Props {
    listings: any[],
    category: string
}

const Listing = ({ listings: items, category }: Props) => {
    const [loading, setLoading] = useState(false)
    const listRef = useRef<FlatList>(null)
    useEffect(() => {
        console.log('reload list', items.length)
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 200)
    }, [category])

    const renderRow: ListRenderItem<any> = ({ item }) => (
        <Link href={`/listing/${item.id}`} asChild>
        
      <TouchableOpacity>
        <View style={styles.listing}>
          <Image source={{ uri: item.medium_url }} style={styles.image} />
          <TouchableOpacity style={{ position: 'absolute', right: 30, top: 30 }}>
            <Ionicons name="heart-outline" size={24} color="#000" />
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontSize: 16, fontFamily: 'mon-sb' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', gap: 4 }}>
              <Ionicons name="star" size={16} />
              <Text style={{ fontFamily: 'mon-sb' }}>{item.review_scores_rating / 20}</Text>
            </View>
          </View>
          <Text style={{ fontFamily: 'mon' }}>{item.room_type}</Text>
          <View style={{ flexDirection: 'row', gap: 4 }}>
            <Text style={{ fontFamily: 'mon-sb' }}>€ {item.price}</Text>
            <Text style={{ fontFamily: 'mon' }}>night</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
    )

    return (
        <View style={{ marginTop: 70 }}>
            <FlatList
                ref={listRef}
                data={loading ? [] : items}
                renderItem={renderRow}
            />
        </View>
    )
}

export default Listing

const styles = StyleSheet.create({
    listing: {
        padding: 16,
        gap: 10,
        marginVertical: 16,
    },
    image: {
        width: '100%',
        height: 300,
        borderRadius: 10,
    },
    info: {
        textAlign: 'center',
        fontFamily: 'mon-sb',
        fontSize: 16,
        marginTop: 4,
    },
});