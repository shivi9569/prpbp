import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const HeaderComponent = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  const handleBellPress = () => {
    setHasNotifications(!hasNotifications);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View >
          <Image source={{uri:'https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg'}} style={styles.imgu}></Image>
        </View>
        <View style={styles.right}>
          <Image
            source={{ uri: 'https://png.pngtree.com/element_our/png_detail/20190103/wallet-line-black-icon-png_309242.jpg' }}
            style={styles.imgWallet}
          />
          <TouchableOpacity style={styles.iconContainer} onPress={handleBellPress}>
            <Image style={styles.imgnotification} source={{uri:'https://th.bing.com/th/id/OIP.4YTC4FTnYikM6UgPy7Ii7gAAAA?rs=1&pid=ImgDetMain'}}></Image>
            {hasNotifications && <View style={styles.badge} />}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  iconContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop:11,
    borderWidth: .9,
    borderColor: 'grey',
    marginRight: -4
  },
  badge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    borderWidth: 2,
    borderColor: 'white',
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft:10
  },
  imgWallet: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop:11,
   
  },
  imgu: {
    width: 45,
    height: 40,
    marginLeft: -10,
    marginTop:6
  },
  imgnotification: {
    width: 20,
    height: 20,
    
  },
  
  
});

export default HeaderComponent;
