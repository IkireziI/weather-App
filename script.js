function getWeather() {
    const cityInput = document.getElementById('city');
    const resultDiv = document.getElementById('result');
  
    const city = cityInput.value;
  
    if (city.trim() === '') {
      alert('Please enter a city name.');
      return;
    }
  
    
    const weatherData = {
      temperature: '25°C',
      description: 'Partly Cloudy',
      humidity: '65%',
      wind: '15 km/h',
    };
  
    const weatherHtml = `
      <h3>Weather in ${city}</h3>
      <p>Temperature: ${weatherData.temperature}</p>
      <p>Description: ${weatherData.description}</p>
      <p>Humidity: ${weatherData.humidity}</p>
      <p>Wind: ${weatherData.wind}</p>
    `;
  
    resultDiv.innerHTML = weatherHtml;
  }
  