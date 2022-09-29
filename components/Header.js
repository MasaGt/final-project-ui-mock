// import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


export const Header = (props) => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header:{
    height:90,
    backgroundColor:"lightblue",
  },
  text:{
    marginTop: 50,
    color:"white",
    fontSize:20,
    textAlign:"center",
  },
});
