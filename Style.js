import {StyleSheet} from 'react-native';

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
  
    text:{
      fontSize: 16,
    },
  
    pic: {
      width: 150,
      height: 150,
      borderRadius: 30,
    },
  
    splitscreen: {
      flexDirection: 'row',
      padding: 10,
      justifyContent: 'space-Evenly',
      backgroundColor: '#add8e6',
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 20,
    }
  });

  export default styles;