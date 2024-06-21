// let key = "323a0aaf6a4237e36e993866a985ae81"
// let api="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"

let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
   let fetchData = async()=> {
    let key = "323a0aaf6a4237e36e993866a985ae81"
    let place =document.getElementById("location").value 
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
    let finalOutput = await data.json()
    console.log(finalOutput);

    let temp_value = document.querySelector(".temp_value")
    let humid_value = document.querySelector(".humid_value")
    let weatherCondition=document.querySelector("#weather_Condition")

    let finaltemp = Math.round(finalOutput.main.temp-273) 
    let finalhumid = (finalOutput.main.humidity)
    let finalCondition=(finalOutput.weather[0].main).toUpperCase()
 
    temp_value.innerHTML = `${finaltemp}<sup>0</sup>C`
    humid_value.innerHTML =`${finalhumid}KMPH`
    weatherCondition.innerHTML=`${finalCondition}`
    let weatherImage = document.getElementById("img")
    let background = document.getElementById("main_container")
    switch (finalCondition) {
       case "HAZE":
         weatherImage.src="./assests/haze.jpg"
         background.style.backgroundImage="url(./assests/hazee.jpeg)"
         break;
       case "CLOUDS":
         weatherImage.src="./assests/clouds.webp"
         background.style.backgroundImage="url(./assests/clouds_gif.gif)"
         break;
       case "DUST":
         weatherImage.src="./assests/dust.jpeg"
         background.style.backgroundImage="url(./assests/dust.webp)"
         break;
       case "RAIN":
         weatherImage.src="./assests/rainy_gif.gif"
         background.style.backgroundImage="url(./assests/rainyy_gif.gif)"
         break;
       case "SNOW":
         weatherImage.src="./assests/snoww.jpeg"
         background.style.backgroundImage="url(./assests/snow_gif.webp)"
         break;
       default:
         break;
      }
   
   }
fetchData()
})
