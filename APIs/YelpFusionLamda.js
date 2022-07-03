// Getting data from Yelp Fusion API
// Huge thanks to ProductionCoder for creating a lamda function to get easy access to yelp data
// Find him here: https://www.youtube.com/watch?v=TtctqhLzfDo

const url = "https://yelp-backend.netlify.app/.netlify/functions/search?"

async function getData (location, term, storeData){
    const response = await fetch(url + "location=" + location + "&term=" + term);
    const json = await response.json();
    const data = json.businesses;
    storeData(data); // Setting the resturant data
}

export default getData;

// Previous code, need CORS to work

//const yelpFustionAPIKey = 'dobn60rTc2HtHN-N6qf5EQUd2fiKCrW4KOCYJPJKfWh6r9zlZ-VENmJDyTRjl3NAN5ZOgbsU3LWk7K8Q420YsV6YlYJ8wgobns1Puy3l8EXi45tEwZWrq99riFqzYnYx'

// Get resturants, code taken from postman
// const getResturants = async () => {
//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Bearer " + yelpFustionAPIKey);

//     var requestOptions = {
//     method: 'GET',
//     headers: myHeaders,
//     redirect: 'follow'
//     };

//     try{
//     const response = await fetch("https://api.yelp.com/v3/businesses/search?latitude=" + latitude + "&longitude=" + longitude, requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

//     const json = await response.json();
//     setResturants(json); // Setting the resturant data
//     setError(false)

//     }catch (error) {
//         console.error(error);
//         setError(true)
//     } finally {
//         setLoading(false);
//     }
// }