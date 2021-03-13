import React, { useEffect, useState,  } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {loggingOut} from '../API/firebaseMethods';

export default function getActivities() {
  let currentUserUID = firebase.auth().currentUser.uid;
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    async function getUserInfo(){
      try {
        let doc = await firebase
          .firestore()
          .collection('users')
          .doc(currentUserUID)
          .get();

        if (!doc.exists){
          Alert.alert('No user data found!')
        } else {
          let dataObj = doc.data();
          setFirstName(dataObj.firstName)
        }
      } catch (err){
      Alert.alert('There is an error.', err.message)
      }
    }
    getUserInfo();
  })

  

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width:'100%' }}>
        <Text style={{ fontSize: 32, paddingLeft:10, fontFamily: 'HelveticaNeue-Medium' }}>myEarth Activities</Text>
        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Level 1</Text>
        <View style={styles.itemContainer}>
          <Text>Activity 1</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 2</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 3</Text>
        </View> 

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Level 2</Text>
        <View style={styles.itemContainer}>
          <Text>Activity 4</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 5</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 6</Text>
        </View> 
        <Text style={{ fontSize: 25, paddingLeft:10,fontFamily: 'HelveticaNeue-LightItalic'  }}>Level 3</Text>
        <View style={styles.itemContainer}>
          <Text>Activity 7</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 8</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 9</Text>
        </View> 
        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Level 4</Text>
        <View style={styles.itemContainer}>
          <Text>Activity 10</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 11</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 12</Text>
        </View> 
        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Level 5</Text>
        <View style={styles.itemContainer}>
          <Text>Activity 12</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 14</Text>
        </View> 
        <View style={styles.itemContainer}>
          <Text>Activity 15</Text>
        </View> 
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 150,
    padding: 5,
    backgroundColor: '#47B6AD',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    width:'100%', 
    paddingTop:50, 
    backgroundColor:'#80E8D7E3'
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    marginTop: '2%',
    marginBottom: '10%',
    fontWeight: 'bold',
    color: 'black',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2E6194',
  },
  itemContainer:{
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#fff',
    paddingTop:15,
    paddingBottom:15,
    width:'100%',
    borderColor: "black",
    borderWidth:1,
    borderRadius:10,
    marginTop:10,
  },
});