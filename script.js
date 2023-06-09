let loc=document.getElementById("location");
let tempicon= document.getElementById("temp-icon");
let tempvalue= document.getElementById("temp-value");
let climate=document.getAnimations("climate");
let iconfile;
const searchInupt=document.getElementById("search-input");
const searchButton=document.getElementById("search-button");


window.addEventListener("load" , ()=>{
    let long;
    let lat;
    if(navigator.geolocation)
    { navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.latitude;
            lat=position.coords.latitude;
            const proxy ='https://cors-anywhere.herokuapp.com';
            const api='${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=7584a6631cad6d2a7b92b58d00728199'
            fetch(api).then((response)=>{
            return response.json();
            })
        }
        .then(data=>
        {
            const(name)=data;
            const(feels_like)=data.main;
            const(id.main)=data.weather[0];
            loc.textContent=name;
            climate.textContent=main;
            tempvalue.textContent=math.round(feels_like-273);
            console.log(data)
        })
    )}

    
})