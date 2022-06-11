// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React from 'react';
import { View,  Button, StyleSheet, Text, Image} from 'react-native';

const styles = StyleSheet.create({
  containter:{
    backgroundColor: "#192070",
    borderRadius: 5,
  },

  title:{
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: "white",

    borderRadius: 20,
  },

  text:{
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Times',
    color: 'white',
    textAlign: 'center',
  },

  pic: {
    width: 150,
    height: 150,
    borderRadius: 30,
  },

  splitscreen: {
    flex:1,
    flexDirection: 'row',
    padding: 5,
    justifyContent: 'space-Evenly',
    backgroundColor: 'gray',
    borderRadius: 20,
  
  }
});

const About = () => {
  return (
    <View style = {styles.containter}>
      <Text style = {styles.title}>Eric Hu</Text>
      <Text style = {styles.text}>erichu@brandeis.edu</Text>

      <View style = {styles.splitscreen}>
      <Image
        style={styles.pic}
        source={{
          uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60493710_878729542472980_747570192086728704_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LalAs0eMGTAAX_5GuR8&_nc_ht=scontent-sea1-1.xx&oh=00_AT_tRi8XOzyYBve4kdYFY1N0Pef3wJmrS3LhWtBzECRBEQ&oe=62C57527',
        }}
      />
 
      <Text style = {styles.text}>
      I'm a rising senior at Brandeis University studying Computer Science</Text>
      </View>
      
     <Text style = {styles.text}>
     This application takes your location and shows fun activities and resturants around your current position
    
     </Text>
      
    </View>
  );
}

export default About;	