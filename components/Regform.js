import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Regform extends React.Component {
  render() {
    return (
      <View style={styles.regform}>
        <Text style={styles.header}>Registration</Text>

        <TextInput
        style={styles.textinput}
        placeholder="Name"
        underlineColorAndroid={'transparent'}>
        </TextInput>

        <TextInput
        style={styles.textinput}
        placeholder="email"
        underlineColorAndroid={'transparent'}>
        </TextInput>

        <TextInput
        style={styles.textinput}
        placeholder="password"
        underlineColorAndroid={'transparent'}
        secureTextEntry={true}>
        </TextInput>

        <TouchableOpacity style={styles.btn}>
            <Text style={styles.btntxt}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  regform: {
      alignSelf: "stretch",
  },
  header: {
    fontSize: 24,
    color: '#fff',
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#fff",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,  
  },
  btn: {
    alignSelf: "stretch",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#59cbbd",
    marginTop: 30,
  },
  btntxt: {
      color: "#fff",
      fontWeight: "bold",
  }
});