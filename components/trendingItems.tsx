// trendingItems.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

type TrendingItemsProps = {
    title: string;
    icon: string;
    live: boolean;
};

const Trendingitems: React.FC<TrendingItemsProps> = ({ title, icon, live }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: icon }} style={styles.icon} />
            <Text style={styles.text}>{title}</Text>
            {live && <Text style={styles.live}>LIVE</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    width: 'auto',
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
    marginLeft: 18,
    flexDirection:'row',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    margin:10
    },
    icon: {
        width: 30,
        height: 30,
        margin: 5
    },
    live: {
        color: 'white',
        backgroundColor:'red',
        marginLeft: 6,
        height:20,
        borderRadius: 4,
       fontWeight:'bold',
       padding:2,
    top: 0,
    right: 0,
    },
    text:{
        margin: 10
    }
});

export default Trendingitems;
