import React from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';
let {width} = Dimensions.get('window'); 
export default function ImageGallery() {
  
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false} 
      style={styles.imageScrollContainer}
    >
      <Image 
        source={{ uri: 'https://live.staticflickr.com/65535/52263104214_51e8f026f7_z.jpg' }} 
        style={styles.image} 
      />
      <Image 
        source={{ uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/purple-and-pink-special-offer-big-sale-banner-design-template-869540ca3ec138f86b8326155ce44695_screen.jpg?ts=1707069692' }} 
        style={styles.image} 
      />
      <Image 
        source={{ uri: 'https://th.bing.com/th/id/R.445114de7a37b2aa4ff0a49ef8950680?rik=nt9gBZ8UaqjgTg&riu=http%3a%2f%2fwww.londonmagicaltours.com%2fblog%2fwp-content%2fuploads%2f2021%2f03%2fParis-Olympics.png&ehk=x1T90thYgPPSrQQztBVYpCztxR2vjRqf3GgmnhqokBI%3d&risl=&pid=ImgRaw&r=0' }} 
        style={styles.image} 
      />
      
      {/* Add more Image components as needed */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageScrollContainer: {
    marginVertical:5
  },
  image: {
    width: width-40,
    height: 80,
    resizeMode: 'cover',
    marginHorizontal:4,
    borderRadius: 10,
    objectFit:'cover'
  },
});

