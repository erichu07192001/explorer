import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';


const Search = () => {

    // Variables
    const [weather, setWeather] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [tempLocation, setTempLocation] = useState([])
    const [location, setLocation] = useState('waltham')

    const getWeather = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=dab7f57ce9c6486e983182326211606&q="+location+"&aqi=no");
            const json = await response.json();
            setWeather(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getWeather() }, [location])

    return (

        <View style={{ flex: 1, padding: 24 }}>
            <Text>Enter a location to find the weather</Text>
            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your location"
                onChangeText={newText => setTempLocation(newText)}
            />

            <Button
                title="Search"
                onPress={() => {
                    setLocation(tempLocation);
                }}
            />

            <Text>{JSON.stringify(weather)}</Text>

            {/* {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.name}</Text>

                    )}
                />
            )} */}
        </View>
    )
}

export default Search