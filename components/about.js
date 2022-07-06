// About the developer page

// Import react native
import React from 'react';
import { View,  Button, StyleSheet, Text, Image} from 'react-native';
// import {sendFeedback} from './Feedback';

// Import from components
import styles from './Style';
import { useValue } from './ValueStorageContext';

const About = () => {

  const {currentValue} = useValue();
  // const [feedback,setFeedback] = useState("");

  return (
    <View style = {styles.containter}>
      <Text style = {styles.title}>Eric Hu</Text>
      <Text style = {styles.subtitle}>erichu@brandeis.edu</Text>

      <View style = {styles.splitscreen}>
      <Image
        style={styles.pic}
        source={{
          uri: 'https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-9/60493710_878729542472980_747570192086728704_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LalAs0eMGTAAX_5GuR8&_nc_ht=scontent-sea1-1.xx&oh=00_AT_tRi8XOzyYBve4kdYFY1N0Pef3wJmrS3LhWtBzECRBEQ&oe=62C57527',
        }}
      />
 
      <Text style = {styles.text}>
      Im a rising senior at Brandeis University 
      studying Computer Science 
      and minoring in Asian American Pacific Islander Studies and Film and Interactive Media
      </Text>
      </View>
      
     <Text style = {styles.text}>
     This application ask for the user's location (or they can enter it themselves) and shows fun activities and resturants around the user's location or at the searched location
     </Text>
      
     <Text> currentValue = {JSON.stringify(currentValue)} </Text>
      
     {/* 
     Feedback
     <View>
            
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity
                    title="send feedback"
                    style={{fontSize:10}}
                    onPress = {() => {
                        console.log('sending feedback....');
                        sendFeedback(feedback);
                        setFeedback("")}}
                    >
                    <Text>send feedback</Text>
                </TouchableOpacity>
            </View>
            <TextInput 
               multiline
               numberOfLines={2}
               placeholder="feedback"
               style={{backgroundColor:'lightgreen'}}
               onChangeText = {(text) => setFeedback(text)}
               value={feedback}
            />

        </View> */}
    </View>

    
    
  );
}

export default About;	