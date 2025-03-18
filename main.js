 
      
      const apiKey="10bb4e0e80d404a5fd5862eb6a25b84f";
      const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

      
     
      const weatherIcon= document.querySelector(".weather-icon");
      
      async function checkWeather(city) {
        const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
        let data = await response.json();//made th object
        console.log(data);

        // update city, humidity, wind according to the user coming from the api//

        // innerHTML is a property in JavaScript used to get or set the HTML content inside an element.It allows you to manipulate the contents of an element dynamically by getting or updating the HTML structure inside that element.
        
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if(data.weather[0].main== "Clouds"){
         weatherIcon.src="images/clouds.png";
        } 
        else if(data.weather[0].main =="Clear"){
          weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
          weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main =="Drizzle"){
          weatherIcon.src="images/drizzle.png";
        }
        else {
          weatherIcon.src="images/mist.png";
        }
      }
      document.querySelector(".search button").addEventListener("dblclick",()=>{
        checkWeather(document.querySelector(".search input").value);

      } )
      
      // checkWeather();
      // {/* // apiKey: This is a string containing your API key for accessing the OpenWeatherMap API.An API key is used to authenticate your requests and identify your account to the service.

        //   apiUrl: This is the base URL for the weather API.The URL is already set to fetch weather data for Bangalore in metric units(i.e., temperature in Celsius).It includes:

        // q = bangalore: This tells the API to get weather data for Bangalore.
        //   units = metric: This ensures that the temperature is in Celsius rather than Fahrenheit or Kelvin.
      // async function: The async keyword marks the function checkWeather as asynchronous.This allows you to use the await keyword inside it.An asynchronous function always returns a Promise and can handle asynchronous operations(like HTTP requests) in a more readable way.
      
        // The fetch function is used to make HTTP requests in JavaScript.
 // fetch sends a GET request to the OpenWeatherMap API to fetch weather data for Bangalore, appending the API key for authentication.

//  await fetch(...): The await keyword tells the function to pause execution until the fetch request is complete and the promise resolves.Once the request completes, the response is stored in the response variable.

//           response.json(): The response.json() method parses the response body as JSON.Since the weather data is returned in JSON format, this method is used to convert the raw response into a JavaScript object(data).await is used here to pause execution until the response has been fully parsed. */}
       
    
 