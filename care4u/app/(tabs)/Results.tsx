import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ActivityIndicator, FlatList, StyleSheet, Dimensions, Image, TouchableOpacity, ImageBackground, Button, TextInput, Pressable, useColorScheme, LogBox, ScrollView,
  SafeAreaView, StatusBar, Keyboard, KeyboardAvoidingView, Alert
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker';
import * as SecureStore from 'expo-secure-store';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome'; 
//import { MaskedTextInput } from "react-native-mask-text";
import TextInputMask from 'react-native-text-input-mask';

/*
async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    alert("🔐 Here's your value 🔐 \n" + result);
  } else {
    alert('No values stored under that key.');
  }
}

*/

export default function Results() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [illness, setillness] = useState([]);
  const [hash, sethash] = useState([]);

  let [gelenhash, setgelenHash] = useState([]);
  const [Htotal, setHtotal] = useState();
  const [isrefresh, setIsRefresh] = useState(false)



  const [Vorname, VornameonChangeText] = useState('');
  const [Nachname, NachnameonChangeText] = useState('');
  const [Geburtsort, GeburtsortonChangeText] = useState('');
  const [Strasse, StrasseonChangeText] = useState('');
  const [Plz, PlzonChangeText] = useState('');
  const [Phone, PhoneonChangeText] = useState('');
  const [Dob, DobonChangeText] = useState('');
  const [Email, EmailonChangeText] = useState('');
  const [Ort, OrtonChangeText] = useState('');
  const [HerGender, GendersonChangeText] = useState("1");
  const [FrauGender, setFrauGender] = useState("2");
  const [gender, setGender] = useState('default 1');


  const [keyboardStatus, setKeyboardStatus] = useState(undefined);
  const [result, setresult] = useState('Result of editing should appear here.');

  const VornameinputRef = useRef(null);
  const NachnameinputRef = useRef(null);
  const GeburtsortinputRef = useRef(null);
  const StrasseinputRef = useRef(null);
  const PlzinputRef = useRef(null);
  const PhoneinputRef = useRef(null);
  const DobinputRef = useRef(null);
  const EmailinputRef = useRef(null);
  const OrtinputRef = useRef(null);
  const HergenderinputRef = useRef(null)
  const FraugenderinputRef = useRef(null);
  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Brazil',
    'England',
    'Dubai',
    'France',
    'Germany',
    'Saudi Arabia',
    'Argentina',
    'India',
  ];
  const genders = [
    'Herr',
    'Frau'
  ];

  /* const focus = () => {

    if (VornameinputRef.current) {
      VornameinputRef.current.focus();
    }
    if (NachnameinputRef.current) {
      NachnameinputRef.current.focus();
    }
    if (GeburtsortinputRef.current) {
      GeburtsortinputRef.current.focus();
    }
    if (StrasseinputRef.current) {
      StrasseinputRef.current.focus();
    }
    if (PlzinputRef.current) {
      PlzinputRef.current.focus();
    }
    if (PhoneinputRef.current) {
      PhoneinputRef.current.focus();
    }
    if (DobinputRef.current) {
      DobinputRef.current.focus();
    }
    if (EmailinputRef.current) {
      EmailinputRef.current.focus();
    }
    if (OrtinputRef.current) {
      OrtinputRef.current.focus();
    }

    //gendersinputRef
    {/* if (HergenderinputRef.current) {
          HergenderinputRef.current.focus();
      }
      if (FraugenderinputRef.current) {
          FraugenderinputRef.current.focus();
      }  
  };
 */


   /* const results = useCallback(() => {
    if (!Vorname || !Nachname || !Geburtsort || !Strasse || !Plz || !Phone || !Dob || !Email || !Ort) {
      Alert.alert('lütfen her alanı doldur')
      return
    }

    
    SharedPreferences.setItem('Vorname', Vorname);
     SharedPreferences.setItem('Nachname', Nachname);
     SharedPreferences.setItem('Geburtsort', Geburtsort);
     SharedPreferences.setItem('Strasse', Strasse);
     SharedPreferences.setItem('Plz', Plz);
     SharedPreferences.setItem('Phone', Phone);
     SharedPreferences.setItem('Dob', Dob);
     SharedPreferences.setItem('Email', Email);
     SharedPreferences.setItem('Ort', Ort);
     SharedPreferences.setItem('gender', gender) 

    // RNRestart.Restart();
    // navigation.navigate('Register')
    //SharedPreferences.setItem('Gender', Genders);
    //return String(Vorname), String(Nachname), String(Geburtsort), String(Strasse), String(plz),String (phone),String (dob),String (email), String(ort)
  }, [Vorname, Nachname, Geburtsort, Strasse, Plz, Phone, Dob, Email, Ort, gender]);*/


  /*   useEffect(() => {
  
      SharedPreferences.getItem("Vorname", function (value) {
          console.log("SharedPreferences Vorname getItem " + value);
          VornameonChangeText(value)
      });
      focus();
      // setTimeout(() =>focus(), 50)
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Nachname", function (value) {
          console.log("SharedPreferences Nachname getItem " + value);
          NachnameonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Geburtsort", function (value) {
          console.log("SharedPreferences Geburtsort getItem " + value);
          GeburtsortonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Strasse", function (value) {
          console.log("SharedPreferences Strasse getItem " + value);
          StrasseonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Plz", function (value) {
          console.log("SharedPreferences Plz getItem " + value);
          PlzonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Phone", function (value) {
          console.log("SharedPreferences Phone getItem " + value);
          PhoneonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Dob", function (value) {
          console.log("SharedPreferences Dob getItem " + value);
          DobonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Email", function (value) {
          console.log("SharedPreferences Email getItem " + value);
          EmailonChangeText(value)
      });
      focus();
  }, []);
  useEffect(() => {
  
      SharedPreferences.getItem("Ort", function (value) {
          console.log("SharedPreferences Ort getItem " + value);
          OrtonChangeText(value)
      });
      focus();
  }, []); 
  useEffect(() => {
  
      SharedPreferences.getItem('gender', function (value) {
          console.log("SharedPreferences gender picker " + value);
          setGender(value)
  
      });
      focus();
  }, []); */

  LogBox.ignoreAllLogs();
  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../images/background.jpg')} style={styles.image} >
        <Text style={styles.title}>Results</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ alignItems: 'center', backgroundColor: 'white', justifyContent: 'center', }}>
            <Image source={require("../images/logo.jpeg")}
              style={{ width: '100%', height: 45 }}
            />
          </View>
          <ImageBackground
            source={require('../images/background.jpg')}
            style={{
              width: "100%",
              height: 120,
              bottom: 0,
              position: 'absolute'
            }}
            imageStyle={{
              resizeMode: "cover",
              alignSelf: "flex-end"
            }} />

          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}>

            <View style={styles.screen}>
              {/* <Picker
               // selectedValue={selectedLanguage}
                //onValueChange={(itemValue, itemIndex) =>
                //  setSelectedLanguage(itemValue)
               // }
                >

                <Picker.Item label="Anrede" value="default 1" />
                <Picker.Item label="Herr" value="1" />
                <Picker.Item label="Frau" value="2" />


              </Picker> */}
            </View>
            <TextInput
              ref={VornameinputRef}
              placeholderTextColor='black'
              placeholder={"Vorname"}
              value={Vorname}
              onChangeText={item => VornameonChangeText(item)}
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
            />
            <TextInput
              ref={NachnameinputRef}
              placeholder={"Nachname"}
              placeholderTextColor='black'
              value={Nachname}
              onChangeText={item => NachnameonChangeText(item)}
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
            />
            <TextInputMask
              ref={DobinputRef}
              placeholderTextColor='black'
              //onChangeText={(item) => DobonChangeText(item)}
              value={Dob}
              keyboardType="number-pad"
              placeholder={"Geburtstag"}
             // mask={[/\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
              style={styles.input}

            />
            <TextInput
              ref={GeburtsortinputRef}
              placeholder={"Geburtsort"}
              placeholderTextColor='black'
              value={Geburtsort}
              onChangeText={item => GeburtsortonChangeText(item)}
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
            />
            <TextInput
              ref={StrasseinputRef}
              editable
              maxLength={400}
              placeholderTextColor='black'
              blurOnSubmit={false}
              numberOfLines={1}
             // width={300}
              placeholder={"Straße & Hausnr"}
              value={Strasse}
              onChangeText={StrasseonChangeText}
              style={styles.input}
            />
            <TextInput
              ref={PlzinputRef}
              placeholderTextColor='black'
              placeholder={"Plz"}
              keyboardType="number-pad"
              value={Plz}
              onChangeText={PlzonChangeText}
              style={styles.input}
            />
            <TextInput
              ref={OrtinputRef}
              placeholderTextColor='black'
              placeholder={"Ort"}
              value={Ort}
              onChangeText={OrtonChangeText}
              style={styles.input}
            />
            <TextInputMask
              placeholderTextColor='black'
              value={Phone}
              keyboardType="number-pad"
              ref={PhoneinputRef}
              onChangeText={PhoneonChangeText}
              placeholder={"Mobiltelefon"}
            //  mask={[/\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/]}
              style={styles.input}
            />
            <TextInput
              ref={EmailinputRef}
              placeholderTextColor='black'
              placeholder={"Email"}
              keyboardType="email-address"
              value={Email}
              onChangeText={EmailonChangeText}
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
            />
            <TouchableOpacity /* onPress={results} */ style={{ backgroundColor: 'lightblue', borderRadius: 10, padding: 18, marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
            {/*   <Icon name='save' size={30} color='white' /> */}
              <Text style={{ fontSize: 17, color: 'white', paddingLeft: 10 }}>Speichern</Text>
            </TouchableOpacity>
          </ScrollView>


        </SafeAreaView>
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
  input: {
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: 'lightblue',
    color: 'black',
    marginTop: 8,
    marginVertical: 12
  },
  picker: {
    width: 150,
    color: "black",
  },
  screen: {
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: 'lightblue',
    marginTop: 20,
    marginHorizontal: 40,
    borderRadius: 12,
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
  }, title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
