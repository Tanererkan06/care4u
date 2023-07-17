import { StyleSheet, TextInput, TouchableOpacity, ImageBackground, Pressable, useColorScheme } from 'react-native';


import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function Register() {
  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../images/background.jpg')} style={styles.image} >
      <Text style={styles.title}>Register</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      </ImageBackground> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    flexDirection: 'column',
    resizeMode: 'cover',
    justifyContent: "center",
    alignItems: 'center',
  }, 
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "lightblue",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "lightblue",
    borderRadius: 10,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "black",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#5DA7DB",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
