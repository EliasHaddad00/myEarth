import React, { Component, useEffect, useState,  } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {loggingOut} from '../API/firebaseMethods';

export default function getActivities(props){
  const { navigation } = props
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
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Questionare</Text>
        </TouchableOpacity>
        
        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Bronze Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 3</Text>
        </TouchableOpacity>


        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Silver Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 4</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 6</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 7</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10,fontFamily: 'HelveticaNeue-LightItalic'  }}>Gold Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 8</Text>
        </TouchableOpacity>

       <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 9</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 10</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 11</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Platinum badge/</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 12</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 13</Text>
        </TouchableOpacity>
         
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 14</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail')}>
          <Text style={styles.buttonText}>Activity 15</Text>
        </TouchableOpacity>

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
  buttonContainer: {
    width: 100,
    padding: 2,
    backgroundColor: '#47B6AD',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    margin: "2%",
  },
  buttonText: {
    fontSize:18,
    color: 'black',
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