import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Register({navigation} : any) { 
  const [ firstName, setFirstName] = React.useState("");
  const [ lastName, setLastName] = React.useState("");
  const [ phoneNumber, setPhoneNumber] = React.useState("");
  const [ address, setAddress] = React.useState("");
  const [ city, setCity] = React.useState("");
  const [ state, setState] = React.useState("");
  const [ zip, setZip] = React.useState("");
  const [ email, setEmail ] = React.useState("");
  const [ password, setPassword ] = React.useState("");

  return (
    <SafeAreaView>
      <ScrollView
        centerContent={true}
      >
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
      <View>
        <TextInput
        label="First Name"
        onChangeText={text=> setFirstName(text)}
        autoFocus={true}
        />
        <TextInput
        label="Last Name"
        onChangeText={text=> setLastName(text)}
        />
        <TextInput
        label="Phone Number"
        onChangeText={text=> setPhoneNumber(text)}
        keyboardType="phone-pad"
        />
        <TextInput
        label="Address"
        onChangeText={text=> setAddress(text)}
        />
        <TextInput
        label="City"
        onChangeText={text=> setCity(text)}
        />
        <TextInput
        label="State"
        onChangeText={text=> setState(text)}
        />
        <TextInput
        label="Zip"
        onChangeText={text=> setZip(text)}
        keyboardType="phone-pad"
        />
        <TextInput
        label="Email"
        keyboardType={'email-address'}
        onChangeText={text=> setEmail(text)}
        />
        <TextInput
        label="Password"
        textContentType={'password'}
        secureTextEntry={true}
        onChangeText={text=> setPassword(text)}
        />
        <Button
        title="Submit"
        onPress={() => null}
        />
      </View>
      </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  )
}