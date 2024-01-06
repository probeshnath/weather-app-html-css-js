const temp_button = document.getElementById("temperature_button")
const cityName = document.getElementById("cityName")
const country_name = document.getElementById("country_name")
const temparature = document.getElementById("temparature")

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
            // Update the DOM by fetching data
            console.log(data)
            const country = data?.sys?.country;
            console.log("country: " , country)
            const tem_celceus = data?.main?.temp
            console.log("tem F: ",tem_celceus)
            const  Celsius = ( tem_celceus - 32 ) * (9/5)
            console.log("Dgree", Celsius)




            // You can add additional information extraction and updates here
            country_name.textContent  = country;
            temparature.textContent  = tem_celceus;
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    } else {
        alert("Please enter a country name.");
    }
});