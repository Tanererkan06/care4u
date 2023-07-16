import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Pressable, useColorScheme } from 'react-native';
import Colors from '../../constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}


 



export default function TabLayout() {
  const colorScheme = useColorScheme(); 
  const styles = StyleSheet.create({
    image: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
    },
  
    container: {
      flex: 1,
      backgroundColor: 'white',
  
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
    }
  });

  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'SingIn',
            headerShown: false,tabBarShowLabel:false,
            tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? 'light'].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="two"
          options={{
            title: 'Settings',
            headerShown: false,tabBarShowLabel:false,
            tabBarIcon: ({ color }) => <TabBarIcon name="pencil" color={ color ? 'lightblue' : '#748c94'} />,
          }}
        />
        <Tabs.Screen
          name="three"
          options={{
            title: 'Register',
            headerShown: false,tabBarShowLabel:false,
            tabBarIcon: ({ color }) => <TabBarIcon name="cog" color={ color ? 'lightblue' : '#748c94'}  />,
          }}
        />
        <Tabs.Screen
          name="four"
          options={{
            title: 'Product',
            headerShown: false,tabBarShowLabel:false,
            tabBarIcon: ({ color }) => <TabBarIcon name="file" color={ color ? 'lightblue' : '#748c94'}  />,
          }}
        />

      </Tabs>
    </View>

  );
}


