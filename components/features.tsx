import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Features() {
  const [showMore, setShowMore] = useState(false);
  const [text, settext] = useState(false);

  function handleShowMore() {
    setShowMore(!showMore);
    settext(!text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.feature}>
        <View style={styles.featureContainer}>
          <Image
            style={styles.featureimg}
            source={{ uri: 'https://img.freepik.com/premium-photo/photo-cricket-ball-isolated_521733-7456.jpg' }}
          />
          <Text style={styles.featureText}>Cricket</Text>
        </View>
        <View style={styles.featureContainer}>
          <Image
            style={styles.featureimg}
            source={{ uri: 'https://th.bing.com/th/id/OIP.Xp9hSHOzBZvT7y8R9BHizQHaG4?rs=1&pid=ImgDetMain' }}
          />
          <Text style={styles.featureText}>Bitcoin</Text>
        </View>
        <View style={styles.featureContainer}>
          <Image
            style={styles.featureimg}
            source={{ uri: 'https://clipart-library.com/images_k/bag-of-money-transparent/bag-of-money-transparent-7.png' }}
          />
          <Text style={styles.featureText}>Economy</Text>
        </View>
        <TouchableOpacity style={styles.featureContainer} onPress={handleShowMore}>
          <Image
            style={styles.featureimg}
            source={{ uri: 'https://static.vecteezy.com/system/resources/previews/024/051/693/non_2x/mobile-app-menu-pixel-perfect-flat-gradient-two-color-ui-icon-interactive-element-of-phone-screen-simple-filled-pictogram-gui-ux-design-for-mobile-application-isolated-rgb-illustration-vector.jpg' }}
          />
          <Text style={styles.featureText}>{text? "Show Less": "Show More"}</Text>
        </TouchableOpacity>
      </View>

      
        <View style={{display: showMore? 'flex': 'none', flexDirection: "row"}}>
          <View style={styles.featureContainer}>
            <Image
              style={styles.featureimg}
              source={{ uri: 'https://th.bing.com/th/id/OIP.GC8i6df27tNIs26TuC3OkwHaFL?rs=1&pid=ImgDetMain' }}
            />
            <Text style={styles.featureText}>NewsPaper</Text>
          </View>
          <View style={styles.featureContainer}>
            <Image
              style={styles.featureimg}
              source={{ uri: 'https://clipground.com/images/voting-box-clipart-6.jpg' }}
            />
            <Text style={styles.featureText}>Elections</Text>
          </View>
          <View style={styles.featureContainer}>
            <Image
              style={styles.featureimg}
              source={{ uri: 'https://th.bing.com/th/id/OIP.grx0HdRQsp4EqMh-ppYTwwHaHa?w=500&h=500&rs=1&pid=ImgDetMain' }}
            />
            <Text style={styles.featureText}>Youtube</Text>
          </View>
          <View style={styles.featureContainer}>
            <Image
              style={styles.featureimg}
              source={{ uri: 'https://th.bing.com/th/id/OIP.NWTSiStdtfeuC6t6R9lmdAHaHa?rs=1&pid=ImgDetMain' }}
            />
            <Text style={styles.featureText}>Stocks</Text>
          </View>
        </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  featureContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 12,
    marginLeft: 18,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    paddingLeft: 6,
    marginBottom: 6
  },
  featureimg: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginBottom:10,
    marginLeft: 15
  },
  featureText: {
    fontSize: 13,
    fontWeight: 'bold',
    paddingLeft: 5,
    marginTop:3
  },
  feature: {
    flexDirection: 'row'
  },
  container: {
    flexDirection: 'column'
  },
  
});
