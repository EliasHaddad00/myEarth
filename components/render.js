//---------------------start of render--------------------------------------
const { title, info, header_one, header_two, header_three, header_four, header_five, type} = route.params.data;
if(type=='2.2' || type=='3' || type=='S2'){
    render=<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <Text style={styles.label}>{header_one}</Text>
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>;
  }else if(type=='4' || type=='S1'){
    render=<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <Text style={styles.label}>{header_one}</Text>
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />

    <Text style={styles.label}>{header_two}</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />

    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>;
  }else if(type=='1.2'){
    render=<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <Text style={styles.label}>{header_one}</Text>
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />

    <Text style={styles.label}>{header_two}</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />
    <Text style={styles.label}>{header_three}</Text>
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
        />
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>;
  }else if(type=='2.1' || type=='G1' || type=='P1'){
    render=<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <Text style={styles.label}>{header_one}</Text>
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />

    <Text style={styles.label}>{header_two}</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />
    <Text style={styles.label}>{header_three}</Text>
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer three*"
            value={answerThree}
            onChangeText={(answer) => setAnswerThree(answer)}
        />
      <Text style={styles.label}>{header_four}</Text>
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer four*"
            value={answerFour}
            onChangeText={(answer) => setAnswerFour(answer)}
        />
      <Text style={styles.label}>{header_five}</Text>
        <TextInput
            multiline={true} 
            numberOfLines={10}
            style={styles.textarea}
            placeholder="answer five*"
            value={answerFive}
            onChangeText={(answer) => setAnswerFive(answer)}
        />
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>;
  }else if(type=='1.1'){
    render=<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.label}>{header_one}</Text>
    <Text style={styles.info}>{info_one}</Text>
    <Text style={styles.label}>{header_two}</Text>
    <Text style={styles.info}>{info_two}</Text>
    <Text style={styles.label}>{header_three}</Text>
    <Text style={styles.info}>{info_three}</Text>  
  </View>;
  }else if (type=='2.3'){
    render=<View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.info}>{info}</Text>
    <Text style={styles.label}>{header_one}</Text>
    <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerOne}
        onChangeText={(answer) => setAnswerOne(answer)}
        />
    <Text style={styles.label}>{header_two}</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerTwo}
          onChangeText={(answer) => setAnswerTwo(answer)}
      />
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerThree}
        onChangeText={(answer) => setAnswerThree(answer)}
        />
    <Text style={styles.label}>{header_two}</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerFour}
          onChangeText={(answer) => setAnswerFour(answer)}
      />
      <TextInput
        style={styles.input}
        placeholder="answer one*"
        value={answerFive}
        onChangeText={(answer) => setAnswerFive(answer)}
        />
    <Text style={styles.label}>{header_two}</Text>
      <TextInput
          style={styles.input}
          placeholder="answer two*"
          value={answerSix}
          onChangeText={(answer) => setAnswerSix(answer)}
      />
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>Submit</Text>
    </TouchableOpacity>
  </View>;
  }else if(type=='G2'){
    render=<View style={styles.container}>
    <Text style={styles.title}>Needs updating</Text>
  </View>;
  }

//-----------------------end of render--------------------------------------