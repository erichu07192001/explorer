// Import react elements
import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button, SafeAreaView, Image } from 'react-native';
import { Linking} from 'react-native'

// Import Expo elements
import * as Location from 'expo-location'; // Used to ask user for location

// Import components
import styles from './Style';
import searchFunctions from './SearchFunctions'
import {useValue} from './ValueStorageContext'

// API calls
import weatherAPI from '../APIs/Weather'
import yelpAPI from '../APIs/YelpFusionLamda'

const Search = () => {
    // API data
    const [weather, setWeather] = useState([])
    const [activity, setActivity] = useState([])

    // Loading and error checking for the api
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    // tempLocation allows user to type, while location is what is searched
    const [tempLocation, setTempLocation] = useState([])
    const [location, setLocation] = useState('waltham')

    const {currentValue,setCurrentValue} = useValue();

    const getWeather = async () => {
        try {
            console.log("trying to set weather")
            setLoading(true)
            weatherAPI(location, (x=>setWeather(x)))
            console.log("Weather properly set")
            console.log(JSON.stringify(weather))
            setError(false)
        } catch (error) {
            console.error(error);
            setError(true)
        } finally {
            setLoading(false);
        }
    }

    const getActivity = async () => {
        try {
            console.log("trying to set activity")
            setLoading(true)
            yelpAPI(location, 'food' ,(x=>setActivity(x)))
            console.log("activity set")
            setError(false)
        } catch (error) {
            console.error(error);
            setError(true)
        } finally {
            setLoading(false);
        }
    }

    // Ask user for location
    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let phoneLocation = await Location.getCurrentPositionAsync({});
          console.log(phoneLocation);
          setLocation(phoneLocation.coords.latitude + "," + phoneLocation.coords.longitude)
        })();
      }, []);

    // Second use effect follows when the first use effect is changed
    useEffect(() => {getWeather() }, [location]) // Update weather when location is changed

    useEffect(() => {getActivity()}, [weather]) // Update activity when weather is changed

    useEffect(() => {setCurrentValue({city: weather.location?.name, state: weather.location?.region})}, [weather]) // Update activity when weather is changed
    
    return (

        <SafeAreaView style = {styles.container}>
            <Text style = {styles.title}>Welcome to Explorer!</Text>
            <Text> currentValue = {JSON.stringify(currentValue)} </Text>
            <Text>Enter a location to find the weather</Text>
            <TextInput
                placeholder="Enter your location"
                onChangeText={
                    newText => setTempLocation(newText)
                }
            />

            <Button
                title="Search"
                onPress={() => {
                    setLocation(tempLocation);
                }}
            />

            
            {/* <Text>{location}</Text> */}
            <Text>In {JSON.stringify(weather.location?.name)}, it's currently {JSON.stringify(weather.current?.temp_f)} °F ({JSON.stringify(weather.current?.temp_c)} °C) and {JSON.stringify(weather.current?.condition.text)}</Text>
            {/* <Text> {JSON.stringify(weather)} </Text> */}
            {console.log("Display Flatlist")}
            
            <FlatList
                data={activity}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                    // Safe view to show image on right
                    <SafeAreaView style = {styles.splitscreen}>
                        <View>
                            <Text onPress={() => webBrowser(item.url)}>{item.name}</Text>
                            <Text>{item.location.address1} </Text>
                            <Text> {item.location.city} {item.location.state}</Text>
                            {isClosed(item.isClosed)}
                            
                        </View>
                            

                        <Image 
                            style={styles.pic}
                            source={{uri: item.image_url}} 
                        />
                    </SafeAreaView>
                    
                )}
            /> 
            

            {/* <Text>{JSON.stringify(activity)}</Text> */}
        </SafeAreaView>
    )
}

function isClosed(is_closed){
    if (is_closed){ // Activity is currently open
        return(
            <Text style = {{color: 'red'}}>CLOSED</Text>
        )
    }
    else{
        return( // Activity is currently closed
            <Text style = {{color: 'green'}}>OPEN</Text>
        )
    }
} 

const webBrowser = async (url) => {
    await Linking.canOpenURL(url);
    Linking.openURL(url).catch(err => console.error("Couldn't load page", err));
}

export default Search