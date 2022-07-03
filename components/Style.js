import {StyleSheet} from 'react-native';

// Styling used for the entire project
// Used to keep styling consistent

const styles = StyleSheet.create({
    container:{
      padding: 24,
      flex: 1
    },
  
    title:{
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
    },

    subtitle:{
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
    },
  
    text:{
      fontSize: 16,
    },
  
    pic: {
      width: 100,
      height: 100,
      borderRadius: 30,
    },
  
    splitscreen: {
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#add8e6',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
      justifyContent: 'space-evenly',
    }
  });

  export default styles;