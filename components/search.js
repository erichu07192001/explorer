import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';


const Search = () => {

    // Variables
    const [data, setData] = useState([])
    const [location, setLocation] = useState([])

    const getRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/' + username + '/repos');
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
                onChangeText={newText => setLocation(newText)}
                defaultValue={location}
            />

            <Button
                title="Search"
                onPress={() => {
                    setLocation(location);
                }}
            />

            {/* <Text>{JSON.stringify(data)}</Text> */}

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.name}</Text>

                    )}
                />
            )}
        </View>
    )
}

export default GitHubDemo