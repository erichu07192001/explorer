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