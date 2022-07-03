// Getting data from WeatherAPI

const weatherAPIKey = 'dab7f57ce9c6486e983182326211606'
const url = "http://api.weatherapi.com/v1/current.json?"

async function getData(location, storeData){
    console.log("In WeatherAPI")
    const response = await fetch(url + "key=" + weatherAPIKey + "&q="+location+"&aqi=no");
    const json = await response.json();
    //console.log(JSON.stringify(json))
    storeData(json);
}

export default getData;

