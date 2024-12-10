// Function to fetch weather data
async function fetchWeather(city) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(city)}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4be9960689mshf763e976ef84f22p197e59jsnf83e695af726',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();

        // Update the main city data
        document.getElementById('temp').textContent = `Temperature: ${result.current.temp_c}°C`;
        document.getElementById('feelslike').textContent = `Feels Like: ${result.current.feelslike_c}°C`;
        document.getElementById('dewpoint').textContent = `Dew Point: ${result.current.dewpoint_c}°C`;

        document.getElementById('wind').textContent = `Wind Speed: ${result.current.wind_kph} kph`;
        document.getElementById('winddir').textContent = `Wind Direction: ${result.current.wind_dir}`;
        document.getElementById('humidity').textContent = `Humidity: ${result.current.humidity}%`;

        document.getElementById('visibility').textContent = `Visibility: ${result.current.vis_km} km`;
        document.getElementById('pressure').textContent = `Pressure: ${result.current.pressure_mb} mb`;
        document.getElementById('cloud').textContent = `Cloud Cover: ${result.current.cloud}%`;

        // Update the title of the page with the city name
        document.querySelector('h1').textContent = `Weather for ${city}`;

        // Fetch weather for other common places
        fetchCommonPlacesWeather();
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

// Function to fetch weather data for common places
async function fetchCommonPlacesWeather() {
    const commonPlaces = ['Lucknow', 'Kolkata', 'Kanpur', 'Boston'];
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4be9960689mshf763e976ef84f22p197e59jsnf83e695af726',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    commonPlaces.forEach(async (place, index) => {
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${encodeURIComponent(place)}`;
        try {
            const response = await fetch(url, options);
            const result = await response.json();

            // Update the table row for each place
            document.querySelectorAll('tbody tr')[index].children[1].textContent = result.current.temp_c;
            document.querySelectorAll('tbody tr')[index].children[2].textContent = result.current.temp_f;
            document.querySelectorAll('tbody tr')[index].children[3].textContent = result.current.humidity;
            document.querySelectorAll('tbody tr')[index].children[4].textContent = result.current.pressure_in;
            document.querySelectorAll('tbody tr')[index].children[5].textContent = result.current.wind_degree;
        } catch (error) {
            console.error(`Error fetching weather for ${place}:`, error);
        }
    });
}

// Add event listener for the search form
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    const city = document.querySelector('input[type="search"]').value; // Get the city from input field
    fetchWeather(city); // Fetch weather for the entered city
});
