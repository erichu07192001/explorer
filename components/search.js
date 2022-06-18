import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';


const Search = () => {

    // Variables
    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [tempLocation, setTempLocation] = useState([])
    const [location, setLocation] = useState([])

    const getRepos = async () => {
        try {
            const response = await fetch("http://api.weatherapi.com/v1/current.json?key=dab7f57ce9c6486e983182326211606&q="+location+"&aqi=no");
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getRepos() }, [location])

    return (

        <View style={{ flex: 1, padding: 24 }}>

            <TextInput
                style={{ height: 40 }}
                placeholder="Enter your location"
                onChangeText={newText => setTempLocation(newText)}
                defaultValue={location}
            />

            <Button
                title="Search"
                onPress={() => {
                    setLocation(tempLocation);
                }}
            />

            <Text>{JSON.stringify(data)}</Text>

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