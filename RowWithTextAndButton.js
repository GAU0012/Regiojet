import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';


const RowWithTextAndButton = () => {
    const text = "Hledání spoje";
    const text2 = "Přihlásit se";
    const imageSource = require('./Image1.png');
  
    const handleButtonPress = () => {
      console.log('Button pressed');
    };
  
    return (
      <SafeAreaView>
        <View style={styles.row}>
          <Text style={styles.text}>{text}</Text>
          <Text style={styles.text2}>{text2}</Text>
          <TouchableOpacity onPress={handleButtonPress} style={styles.buttonContainer}>
            <Image source={imageSource} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: "#FABB00",
    },
    text: {
      flex: 1, 
      fontSize: 18,
      fontWeight: 'bold',
    },
    text2: {
      flex: 1, 
      fontSize: 14,
      textAlign: 'right',
    },
    buttonContainer: {
      padding: 8,
    },
    buttonImage: {
      width: 30, 
      height: 30,
    },
  });
  
  export default RowWithTextAndButton;
  
  