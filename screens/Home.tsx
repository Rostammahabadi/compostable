import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { Headline } from 'react-native-paper';

export default function Home({navigation} : any) {
  return (
    <View style={styles.container}>
    <Headline style={styles.header}>Company Name</Headline>
    <Image
        style={styles.image}
        source={require('../assets/compostable.jpeg')}
    />
    <Button 
    title='Compost Seeker'
    accessibilityLabel= "I'm a Compost Seeker"
    onPress={() => {navigation.navigate('Register')}}
    />
    <Button
    title='Compost Donator' 
    accessibilityLabel= "I'm a Compost Donator"
    onPress={() => null}
    />
    </View>
  );
}

const styles = StyleSheet.create({
header: {
  fontWeight: '800', 
  fontStyle: 'italic', 
},
container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
},
image: {
  width: 300,
  height:400,
}
});