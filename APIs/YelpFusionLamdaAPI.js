const [data, setData] = useState([]);

const getData = async (location, term) => {
    try {
        const response = await fetch("https://yelp-backend.netlify.app/.netlify/functions/search?location=" + location + "&term=" + term);
        const json = await response.json();
        setData(json.businesses); // Setting the resturant data

        setError(false)
    } catch (error) {
        console.error(error);
        setError(true)
    } finally {
        setLoading(false);
    }
}

return data;