const temp_button = document.getElementById("temperature_button")
const cityName = document.getElementById("cityName")
const country_name = document.getElementsByClassName("country_name")
const temparature = document.getElementsByClassName("temparature")

// temp_button.addEventListener("click", function(){
//     console.log("clicked")
//    const data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country_name}&appid=e84a7695a9071048e9e577e7abdb4dbf`) 
//    console.log(country_name)
// })

temp_button.addEventListener("click", function(){
    const cityValue = cityName.value;
    
    // Make sure the country name is not empty before making the API request
    if (cityValue.trim() !== "") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=e84a7695a9071048e9e577e7abdb4dbf`)
        .then(response => response.json())
        .then(data => {
            // Update the DOM with the retrieved data
            // country_name.textContent = cityValue;
            // temparature.textContent = `${data?.main?.temp} K`; 
            console.log(data)


            // You can add additional information extraction and updates here
            country_name.innerText = "data"
        })
        .catch(error => {
            console.error("Error fetching data:", error);
            // Handle errors here (e.g., display an error message)
        });
    } else {
        alert("Please enter a country name.");
    }
});