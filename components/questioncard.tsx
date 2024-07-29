import React, { useState } from "react";
import { Button, Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Model from "./model";

type QuestionCardProps = {
    traders: number;
    title: string;
    description: string;
    icon: { uri: string };
    yesPrice: string;
    noPrice: string;
};

export default function QuestionCard({ traders, title, description, icon, yesPrice, noPrice }: QuestionCardProps) {
  const [showModel, setShowModel] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState<{ yesPrice: number, noPrice: number, selectedButton: 'yes' | 'no' | null, title: string, icon: { uri: string } }>({ yesPrice: 0, noPrice: 0, selectedButton: null, title: '', icon: { uri: '' } });

  function handlePress(button: 'yes' | 'no') {
    setSelectedPrice({
      yesPrice: parseFloat(yesPrice), // Convert to number
      noPrice: parseFloat(noPrice),   // Convert to number
      selectedButton: button,
      title: title,
      icon: icon
    });
    setShowModel(true);
  }

  function handleNo() {
    setShowModel(false);
    setSelectedPrice({ yesPrice: 0, noPrice: 0, selectedButton: null, title: '', icon: { uri: '' } });
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.trader}>{traders} traders</Text>
      <View style={styles.contain}>
        <Text style={styles.title}>{title}</Text>
        <Image source={icon} style={styles.img}></Image>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.button, selectedPrice.selectedButton === 'yes' && styles.selectedYesButton]}
          onPress={() => handlePress('yes')}
          disabled={showModel}
        >
          <Text style={styles.buttonYes}>Yes {yesPrice}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, selectedPrice.selectedButton === 'no' && styles.selectedNoButton]}
          onPress={() => handlePress('no')}
          disabled={showModel}
        >
          <Text style={styles.buttonNo}>No {noPrice}</Text>
        </TouchableOpacity>
      </View>
    </View>
    {showModel && <Model yesPrice={selectedPrice.yesPrice} noPrice={selectedPrice.noPrice} selectedButton={selectedPrice.selectedButton} onClose={handleNo} title={selectedPrice.title} icon={selectedPrice.icon} />}
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    height: 140,
    backgroundColor: 'white',
    margin: 8,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 10
  },
  trader: {
    marginLeft: 9,
    marginTop: 12,
    fontWeight: '300',
    color: 'black'
  },
  title: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 8,
    color: 'black',
    width: 330
  },
  img: {
    height: 55,
    width: 55,
  },
  contain: {
    flexDirection: 'row',
  },
  button: {
    flexDirection: 'row',
    marginLeft: 8,
    marginTop: 4
  },
  buttonYes: {
    width: 180,
    backgroundColor: "#dfeafe",
    height: 30,
    fontSize: 17,
    paddingLeft: 50,
    paddingTop: 3,
    color: 'royalblue',
    fontWeight: 'bold',
    borderRadius: 5
  },
  buttonNo: {
    width: 180,
    backgroundColor: "#f5e3e1",
    height: 30,
    fontSize: 17,
    paddingLeft: 50,
    paddingTop: 3,
    color: '#e93838',
    fontWeight: 'bold',
    borderRadius: 5
  },
  selectedYesButton: {
    backgroundColor: 'blue',
  },
  selectedNoButton: {
    backgroundColor: 'red',
  },
});
