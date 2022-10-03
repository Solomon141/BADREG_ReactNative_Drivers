import React, {useRef, useState, useEffect } from 'react';
// import axios from 'axios';
// import { Header } from 'react-native-elements';
// import { Left, Right, Icon } from 'native-base';

import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
} from 'react-native';

const App = () => {
  const drawer = useRef(null);
  const [user, setUser] = useState({name:"solomon", father:"Gebremichael"});

  // useEffect(()=>{
  //   const fetchData = async () => {
  //     try {
  //       const {data: response} = await axios.get('https://abc.denjoyd.com/api/users/')
  //       setUser(response);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   }
  //   fetchData();
  // }, [])

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (

    

    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      renderNavigationView={navigationView}>
      <View style={styles.container}>
        <ScrollView style={styles.scroll_view}>
          <View style={styles.container2}>
            <Image
              source={require('./assets/BadregLogo.jpg')}
              // eslint-disable-next-line react-native/no-inline-styles
              style={{width: 200, height: 200}}
            />
            <Text style={styles.headerName}> Badreg Delivery Driver </Text>
            <SafeAreaView style={styles.SafeStyle}>
              <TextInput
                style={styles.input}
                placeholder="User Name"
                keyboardType="text"
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                keyboardType="password"
              />
              <Button
                title="LogIn"
                onPress={() => Alert.alert('LogIn Button Clicked')}
                style={styles.btnLogin}
              />

              <Text> {user.name  +user.father} </Text>
            </SafeAreaView>
          </View>
        </ScrollView>

        <Text style={styles.paragraph}>
        ይህ አፕሊኬሽን ለባድረግ ሰራተኞች የተሰራ ሲሆን ፣ ለሹፌሮች ብቻ የሚያገለግል አፕሊኬሽን ነው፡፡
        </Text>
        <Button
          title="Open drawer"
          onPress={() => drawer.current.openDrawer()}
        />
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: 'center',
  },
  btnLogin: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    backgroundColor: '#FF1493',
  },
  SafeStyle: {
    paddingTop: 30,
  },
  headerName: {
    fontSize: 30,
  },
  scroll_view: {
    paddingTop: 100,
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 270,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
});

export default App;
