import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';
import * as Location from 'expo-location';

const Search = () => {

    // Variables
    // API data
    const [weather, setWeather] = useState([])
    const [resturants, setResturants] = useState([])

    // API keys
    const yelpFustionAPIKey = 'dobn60rTc2HtHN-N6qf5EQUd2fiKCrW4KOCYJPJKfWh6r9zlZ-VENmJDyTRjl3NAN5ZOgbsU3LWk7K8Q420YsV6YlYJ8wgobns1Puy3l8EXi45tEwZWrq99riFqzYnYx'
    const weatherAPIKey = 'dab7f57ce9c6486e983182326211606'

    // Loading and error checking for the api
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    // tempLocation allows user to type, while location is what is searched
    const [tempLocation, setTempLocation] = useState([])
    const [location, setLocation] = useState('waltham')

    // Variables used for coordinates for other API
    const[longitude, setLongitude] = useState([])
    const[latitude, setLatitude] = useState([])


    const getWeather = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=" + weatherAPIKey + "&q="+location+"&aqi=no");
            const json = await response.json();
            setWeather(json); // Setting the weather data

            setError(false)
        } catch (error) {
            console.error(error);
            setError(true)
        } finally {
            setLoading(false);
        }
    }

    // Get resturants, code taken from postman
    const getResturants = async () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer " + yelpFustionAPIKey);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        try{
        const response = await fetch("https://api.yelp.com/v3/businesses/search?latitude=" + latitude + "&longitude=" + longitude, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

        const json = await response.json();
        setResturants(json); // Setting the resturant data
        setError(false)

        }catch (error) {
            console.error(error);
            setError(true)
        } finally {
            setLoading(false);
        }
    }


    // Sets the coordinates for the yelpAPI
    const setCoordinates = () => {
        setLongitude(weather.location?.lon) // setting the longitude
        setLatitude(weather.location?.lat) // Setting the latitude
        console.log("Longitude: " + longitude)
        console.log("Latitude: " + latitude)
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
          setLatitude(phoneLocation.coords.latitude)
          setLongitude(phoneLocation.coords.longitude)
          setLocation(phoneLocation.coords.latitude + "," + phoneLocation.coords.longitude)
        })();
      }, []);

    useEffect(() => { getWeather() }, [location]) // Update weather when location is changed

    useEffect(() => {setCoordinates()}, [weather]) // Updates the coordinates when the weather data is changed

    return (

        <View style={{ flex: 1, padding: 24 }}>
            <Text>Enter a location to find the weather</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your location"
                onChangeText={
                    newText => setTempLocation(newText)
                }
            />

            <Button
                title="Search"
                onPress={() => {
                    setLocation(tempLocation);
                    getResturants()
                }}
            />

            <Text>{location}</Text>
            <Text>In {JSON.stringify(weather.location?.name)}, it's currently {JSON.stringify(weather.current?.temp_f)} °F ({JSON.stringify(weather.current?.temp_c)} °C) and {JSON.stringify(weather.current?.condition.text)}</Text>
            <Text>latitude: {latitude} and longitude: {longitude}</Text>
            <Text>{JSON.stringify(resturants)}</Text>
        </View>
    )
}

export default Search