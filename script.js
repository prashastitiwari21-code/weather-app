const btn=document.querySelector("#get-weather-btn");


async function getWeather(city){
  
  try{
    const info=await fetch(`https://weather-proxy.freecodecamp.rocks/api/city/${city}`)
  const data=await info.json();
  return data;

  }
  catch(error){
    console.error(error)
  };

  
}

async function showWeather(city){
  const data1=await getWeather(city);
  if(data1===undefined){
    alert("Something went wrong, please try again later");
  }
  else{
    const name=document.querySelector("#location")

    const weather=document.querySelector("#weather-main")
    const temper=document.querySelector("#main-temperature")
    const feelslike=document.querySelector("#feels-like")
    const humid=document.querySelector("#humidity")
    const wind=document.querySelector("#wind")
    const gust=document.querySelector("#wind-gust")
    const img=document.querySelector("#weather-icon")
    name.textContent=data1.name?? "N/A"
    weather.textContent=data1.weather[0].main?? "N/A"
    temper.textContent=data1.main.temp?? "N/A"
    feelslike.textContent=data1.main.feels_like?? "N/A"
    humid.textContent=data1.main.humidity?? "N/A"
    wind.textContent=data1.wind.speed?? "N/A";
    img.src=data1.weather[0].icon?? "N/A"
    gust.textContent = data1.wind.gust ?? "N/A";

    
  }

}
btn.addEventListener("click", () => {
  const city = document.querySelector("select").value;
  if (!city) return;
  showWeather(city);
});