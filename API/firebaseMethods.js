//import * as firebase from "firebase";
//import "firebase/firestore";
import {Alert} from "react-native";

const firebase = require("firebase");
require("firebase/firestore");
export async function registration(email, password, lastName, firstName) {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("users")
      .doc(currentUser.uid)
      .set({
        email: currentUser.email,
        lastName: lastName,
        firstName: firstName,
      });
  } catch (err) {
    Alert.alert("registration error", err.message);
  }
}

export async function signIn(email, password) {
  try {
   await firebase
      .auth()
      .signInWithEmailAndPassword(email, password);
  } catch (err) {
    Alert.alert("signin error", err.message);
  }
}

export async function loggingOut() {
  try {
    await firebase.auth().signOut();
  } catch (err) {
    Alert.alert('loggingOut error', err.message);
  }
}

// Create a function that creates a doc for the questionare
// and call it from the detail.js file 

export async function questionaire(answerOne, answerTwo, answerThree) {
  try {
    const currentUser = await firebase.auth().currentUser;

    const db = firebase.firestore();
    db.collection("questionaire")
      .doc(currentUser.uid)
      .set({
        answerOne: answerOne,
        answerTwo: answerTwo,
        answerThree: answerThree,
      });
  } catch (err) {
    Alert.alert("registration error", err.message);
  }
}

export {firebase};
