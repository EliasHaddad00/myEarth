import React, { useState, useEffect } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import {questionaire } from "../API/firebaseMethods";

//var db = firebaseApp.firestore();

export default function Detail() {
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");


  const emptyState = () => {
    setAnswerOne('');
    setAnswerTwo('');
    setAnswerThree('');
    
  };

  const handlePress = () => {
    questionaire(
      answerOne,
      answerTwo,
      answerThree,
    );
    emptyState();
  }

/*
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection("questionaire")
      .doc(currentUser.uid)
      .set({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  */

  return (
    <View style={styles.container}>
      <Text>questionaire</Text>
      <Text style={styles.label}>QuestionOne</Text>
      <TextInput
          style={styles.input}
          placeholder="answer one*"
          value={answerOne}
          onChangeText={(answer) => setAnswerOne(answer)}
          />

      <Text style={styles.label}>QuestionTwo</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
          />

      <Text style={styles.label}>QuestionThree</Text>
      <TextInput
          style={styles.input}
          placeholder="answer three*"
          value={answerThree}
          onChangeText={(answer) => setAnswerThree(answer)}
          />

      <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    width: 300,
    fontSize:18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#a4eddf',
    padding: 10,
    margin: 5,
  },
  textarea:{
    padding: 20,
    borderRadius: 3,
    marginBottom: 20,
    height: 150,
    maxWidth: 400,
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  label:{ 
    fontSize: 25, 
    paddingLeft:10,
    fontFamily: 'HelveticaNeue-LightItalic'  
  },
  button: {
    width: 200,
    padding: 5,
    backgroundColor: '#47B6AD',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 20,
    alignSelf: 'center',
    margin: "2%",
  },
  buttonText: {
    fontSize:20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})