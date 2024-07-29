import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Trendingitems from "./trendingItems";

const trendingData = [
    { title: 'Bitcoin', icon: 'https://logos-world.net/wp-content/uploads/2020/08/Bitcoin-Logo.png', live: true },
    { title: 'Kol v/s Mumb', icon: 'https://th.bing.com/th/id/OIP.I7ktoE1UXFQmSogz3bZXIAAAAA?w=246&h=205&rs=1&pid=ImgDetMain', live: false },
    { title: 'Olympics', icon: 'https://th.bing.com/th/id/OIP.XLcS1hIAr2aumD3UUF1KsgHaEc?rs=1&pid=ImgDetMain', live: false },
    { title: 'Expiring Soon', icon: 'https://th.bing.com/th/id/OIP.WSM5mZ3i8JxkPaObUAR1GQHaMr?rs=1&pid=ImgDetMain', live: true },
    { title: 'Budget FY 24-25', icon: 'https://th.bing.com/th/id/OIP.FowWqxUL09JVaOk85J46dwHaHa?rs=1&pid=ImgDetMain', live: false },
    
];
export default function Trending(){
    return(
       < View>
        <Text style={styles.text}>Trending Now</Text>
       <ScrollView showsHorizontalScrollIndicator={false} horizontal  >
       
          <View style={styles.row}>
            {trendingData.map((items , i )=>(
            <Trendingitems  key={i}
            title={items.title}
            icon={items.icon}
            live={items.live}/>

           
          ))}
          </View>
          </ScrollView>
          <ScrollView showsHorizontalScrollIndicator={false} horizontal  >
           <View style={styles.row}>
            {trendingData.map((items , i )=>(
            <Trendingitems  key={i}
            title={items.title}
            icon={items.icon}
            live={items.live}/>

           
          ))}
            
          </View>
          </ScrollView>
     
       </View>
    )
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        
    },
    text:{
        fontSize:15,
        fontWeight:'bold'
    }
})