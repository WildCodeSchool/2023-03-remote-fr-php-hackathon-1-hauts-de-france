// On récupère le pathname de l'adresse URL courante
let pathname = window.location.pathname;
// On retire le slash pour récupérer que la ville
let city = pathname.replace("/", "");

receiveTemperature(city);

function receiveTemperature(city)
{
    let appid = 'f234063856fa0862aa5996cc846d50a0';
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city +'&appid='+ appid + '&lang=fr&units=metric';
    
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        if (request.readyState == XMLHttpRequest.DONE) {    
            if (request.status === 200) {
                let temp = request.response.main.temp;
                //let city =  request.response.name;
                let icone = request.response.weather[0].icon;
                
                let img = document.createElement('img');
                img.src = 'https://openweathermap.org/img/wn/'+icone+'@2x.png';

                let selectCity = document.querySelector('#city');
                selectCity.append(img);

                let selectTemp = document.querySelector('#temperature_label')
                selectTemp.textContent = temp;
            }
        }
    }
}