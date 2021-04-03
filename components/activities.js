import React, { Component, useEffect, useState,  } from 'react';
import { View, Text, StyleSheet, Alert, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {level_one_one, level_one_two, level_two_one, level_two_two, level_two_three} from '../API/data'
import {level_three, level_four, level_S_one, level_S_two, level_G_one, level_G_two, level_P_one} from '../API/data'

export default function getActivities({navigation}){
  //const { navigation } = props
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
  const data ={name:'Elias', origin:'Lebanon'}

  return (
    
    <View style={styles.container}>
      <ScrollView style={{ flex: 1, width:'100%' }}>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data} )}>
          <Text style={styles.buttonText}>Questionare</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Background</Text>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data} )}>
          <Text style={styles.buttonText}>Understanding plastic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data} )}>
          <Text style={styles.buttonText}>Your plastic footprint</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Bronze Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Alternatives to plastic</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Movie screening</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Identifying alternatives </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Recycling Art (Trash to Treasure) </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Making a difference at home</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic' }}>Silver Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Observation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Sharing</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25, paddingLeft:10,fontFamily: 'HelveticaNeue-LightItalic'  }}>Gold Badge</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}> Rethinking plastic</Text>
        </TouchableOpacity>

       <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Building change agents</Text>
        </TouchableOpacity>
       

        <Text style={{ fontSize: 25, paddingLeft:10, fontFamily: 'HelveticaNeue-LightItalic', }}>Platinum badge/</Text>
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Sustaining Change </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigation.navigate('Detail',{data})}>
          <Text style={styles.buttonText}>Questionare </Text>
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
    fontFamily: 'Helvetica'
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