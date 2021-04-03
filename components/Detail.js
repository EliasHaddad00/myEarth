import React, { useState, useEffect } from "react";
import {StyleSheet, Text, TextInput, View, TouchableOpacity} from 'react-native';
import { level_four, level_P_one, level_S_two } from "../API/data";
import {questionaire } from "../API/firebaseMethods";

//var db = firebaseApp.firestore();

export default function Detail({route, navigation}) {
  const [answerOne, setAnswerOne] = useState("");
  const [answerTwo, setAnswerTwo] = useState("");
  const [answerThree, setAnswerThree] = useState("");
  const [answerFour, setAnswerFour] = useState("");
  const [answerFive, setAnswerFive] = useState("");
  const [answerSix, setAnswerSix] = useState("");
  const [answerSeven, setAnswerSeven] = useState("");
  const [answerEight, setAnswerEight] = useState("");
  const [answerNine, setAnswerNine] = useState("");
  const [answerTen, setAnswerTen] = useState("");
  const [answerEleven, setAnswerEleven] = useState("");

  const emptyState = () => {
    setAnswerOne('');
    setAnswerTwo('');
    setAnswerThree('');
    setAnswerFour('');
    setAnswerFive('');
    setAnswerSix('');
    setAnswerSeven('');
    setAnswerEight('');
    setAnswerNine('');
    setAnswerTen('');
    setAnswerEleven('');
  };
  
  const handlePress = () => {    
    
    if(type=='1.2'){
      level_one_two(answerOne, answerTwo, answerThree);
    }
    else if(type=='2.1'){
      level_two_one(answerOne, answerTwo, answerThree, answerFour, answerFive);
    }
    else if(type=='2.2'){
      level_two_two(answerOne);
    }
    else if(type=='2.3'){
      level_two_three(answerOne, answerTwo, answerThree, answerFour, answerFive, answerSix);
    }
    else if(type=='3'){
      level_three(answerOne);
    }
    else if(type=='4'){
      level_four(answerOne, answerTwo);
    }
    else if(type=='S1'){
      level_S_one(answerOne, answerTwo);
    }
    else if(type=='S2'){
      level_S_two(answerOne);
    }
    else if(type=='G1'){
      level_G_one(answerOne, answerTwo, answerThree, answerFour, answerFive);
    }
    else if(type=='P1'){
      level_P_one(answerOne, answerTwo, answerThree, answerFour, answerFive);
    }
    else{
      questionaire(answerOne, answerTwo, answerThree, answerFour, answerFive, 
        answerSix, answerSeven, answerEight, answerNine, answerTen, answerEleven);
    }
    emptyState();
  }
  
  let render
  
  const { name, origin } = route.params.data;
  //render = <Text>,itemId: {JSON.stringify(name)}</Text>,;
  //---------------------start of conditional render--------------------------------------
  const { title, info, info_one, info_two, info_three, header_one, header_two, header_three, header_four, header_five, type} = route.params.data;
  if(type=='2.2' || type=='3' || type=='S2'){
    render=[
    <Text style={styles.title}>{title}</Text>,
    <Text style={styles.info}>{info}</Text>,
    <Text style={styles.label}>{header_one}</Text>,
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />,
  ]
  }else if(type=='4' || type=='S1'){
    render=[
    <Text style={styles.title}>{title}</Text>,
    <Text style={styles.info}>{info}</Text>,
    <Text style={styles.label}>{header_one}</Text>,
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />,

    <Text style={styles.label}>{header_two}</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />,
    ]
  }else if(type=='1.2'){
    render=[
    <Text style={styles.title}>{title}</Text>,
    <Text style={styles.info}>{info}</Text>,
    <Text style={styles.label}>{header_one}</Text>,
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />,

    <Text style={styles.label}>{header_two}</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />,
    <Text style={styles.label}>{header_three}</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
        />,
    ];
  }else if(type=='2.1' || type=='G1' || type=='P1'){
    render=[
    <Text style={styles.title}>{title}</Text>,
    <Text style={styles.info}>{info}</Text>,
    <Text style={styles.label}>{header_one}</Text>,
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />,

    <Text style={styles.label}>{header_two}</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />,
    <Text style={styles.label}>{header_three}</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
        />,
      <Text style={styles.label}>{header_four}</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer four*"
            value={answerFour}
            onChangeText={(answer) => setAnswerFour(answer)}
        />,
      <Text style={styles.label}>{header_five}</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer five*"
            value={answerFive}
            onChangeText={(answer) => setAnswerFive(answer)}
        />,
    ];
  }else if(type=='1.1'){
    render=[
    <Text style={styles.title}>{title}</Text>,
    <Text style={styles.label}>{header_one}</Text>,
    <Text style={styles.info}>{info_one}</Text>,
    <Text style={styles.label}>{header_two}</Text>,
    <Text style={styles.info}>{info_two}</Text>,
    <Text style={styles.label}>{header_three}</Text>,
    <Text style={styles.info}>{info_three}</Text>,  
    ];
  }else if (type=='2.3'){
    render=[
    <Text style={styles.title}>{title}</Text>,
    <Text style={styles.info}>{info}</Text>,
    <Text style={styles.label}>{header_one}</Text>,
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />,
    <Text style={styles.label}>{header_two}</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerThree}
        onChangeText={(answer) => setAnswerThree(answer)}
        />,
    <Text style={styles.label}>{header_two}</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerFour}
          onChangeText={(answer) => setAnswerFour(answer)}
      />,
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerFive}
        onChangeText={(answer) => setAnswerFive(answer)}
        />,
    <Text style={styles.label}>{header_two}</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerSix}
          onChangeText={(answer) => setAnswerSix(answer)}
      />,
    ];
  }else if(type=='G2'){
    render=[
    <Text style={styles.title}>,Needs updating</Text>,
    ];
  }else{
    render=[
      <Text style={styles.title}>,Questioniare</Text>,
      <Text style={styles.info}>,This is a questionniare to help us get an understanding of
                                level of knowledge you hold about our enviroment, plastic and
                                generally the causes and effects of plastics to our enviroment
      </Text>,
      <Text style={styles.label}>QuestionOne</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer one*"
          value={answerOne}
          onChangeText={(answer) => setAnswerOne(answer)}
          />,

      <Text style={styles.label}>QuestionTwo</Text>,
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
          />,

      <Text style={styles.label}>QuestionThree</Text>,
      <TextInput
          multiline={true} 
          numberOfLines={10}
          style={styles.textarea}
          placeholder="answer three*"
          value={answerThree}
          onChangeText={(answer) => setAnswerThree(answer)}
          />,

      <Text style={styles.label}>{header_four}</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer four*"
            value={answerFour}
            onChangeText={(answer) => setAnswerFour(answer)}
      />,
      <Text style={styles.label}>{header_five}</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer five*"
            value={answerFive}
            onChangeText={(answer) => setAnswerFive(answer)}
      />,
      <Text style={styles.label}>Q6</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer six*"
            value={answerSix}
            onChangeText={(answer) => setAnswerSix(answer)}
      />,
      <Text style={styles.label}>,Q7</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer seven*"
            value={answerSeven}
            onChangeText={(answer) => setAnswerSeven(answer)}
      />,  
      <Text style={styles.label}>Q8</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer eight*"
            value={answerEight}
            onChangeText={(answer) => setAnswerEight(answer)}
      />,
      <Text style={styles.label}>Q9</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer nine*"
            value={answerNine}
            onChangeText={(answer) => setAnswerNine(answer)}
      />,  
      <Text style={styles.label}>Q10</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer ten*"
            value={answerTen}
            onChangeText={(answer) => setAnswerTen(answer)}
      />,
      <Text style={styles.label}>Q11</Text>,
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer Eleven*"
            value={answerEleven}
            onChangeText={(answer) => setAnswerEleven(answer)}
      />,   
    ];
  }
  //-----------------------end of conditional render--------------------------------------
  return (
    <View style={styles.container}>
      {render}
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    width: "75%",
    fontSize:18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#a4eddf',
    padding: 10,
    margin: 5,
  },
  textarea:{
    width: "75%",
    fontSize:18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor:'#a4eddf',
    padding: 10,
    height: 150,
    maxWidth: 400,
  },
  container: {
    flex:1,
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection:'column',
  },

  label:{ 
    fontSize: 25, 
    paddingLeft:10,
    fontFamily: 'HelveticaNeue-LightItalic',
    paddingVertical:5,
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
  title:{
    justifyContent: 'center',
    fontSize: 30, 
    paddingLeft:10,
    fontFamily: 'Helvetica',
    paddingVertical:20,
    
  },
  info:{
    justifyContent: 'center',
    fontSize: 18, 
    paddingLeft:5,
    fontFamily: 'Helvetica',
    paddingVertical:5,
  }
})