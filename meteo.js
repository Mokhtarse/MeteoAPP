/* 
 ici j'ai declaré des variables pour enregistrer l'url du fichier de configuration Json, mis sur un serveur en ligne 
 au cas ou on voudrait faire appel a un serveur externe. On peut aussi utiliser urlloc pour le fichier Json mis sur
 le serveur local (dans mon cas live serveur extension ajouter a Visual Studio Code). 
 Dans ce cas il faut que notre serveur soit actif pour pouvoir charger les donnés dont on a besoin 
*/
var ville ='Paris';
const url ='https://api.npoint.io/eba5f1283b82e7bb38f3';
const urlloc = 'http://127.0.0.1:5500/conf.json' ;



/* 
 ici j'ai declaré des variables pour enregistrer l' url et le key de l'api
*/
const apiKey="f1189a070d3ac173b0f1348483de56ac";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&q=";
const micon = document.querySelector(".meteoicon");



/* 
 declaration de fonction Meteoloc  qui recupere les données du fichier conf.jason 
 pour le passer a une autre fonction checkmeteo qui permettra de recuperer les données de l'api 
 pour l'afficher dans la page index. Ici on a fait l'appel d'une fonction dans une fonction pour s'assurer
 que les données affichées son bien coherentes 
*/
async function Meteoloc(jlien)
{
    const response= await fetch(jlien)
    var data = await response.json();
    console.log(data);
    locvie =data.nom; 
    checkMeteo(locvie);
}



/*
 fonction qui  prend  en paramétre le nom de la ville pour chercher les données avec l'api
 puis le mettre a jour sur notre interface 
*/
async function checkMeteo(ville)
{
    const response= await fetch(apiUrl + ville + '&lang=fr&units=metric&appid='+ apiKey);
    var data = await response.json();
    console.log(data);

    document.querySelector(".ville").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".vent").innerHTML = Math.round(data.wind.speed) + " Km/h";
    document.querySelector(".meteodisc").innerHTML = data.weather[0].description + ' ' + Math.round(data.main.temp_min) + '° / ' + Math.round(data.main.temp_max) + '°';
    document.querySelector(".resenti").innerHTML = 'temperature ressentie '+ Math.round(data.main.feels_like) + '°'  ;

    if(data.weather[0].main == "Clouds")
    {
        micon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear")
    {
        micon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain")
    {
        micon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle")
    {
        micon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist")
    {
        micon.src = "images/mist.png";
    }
}



/*
 fonction date optionelle pour bien verifier la mise a jour des données metéo sur notre interface
*/
function date ()
{
    var d = new Date();
    var date = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+' '+d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
    document.querySelector(".heure").innerHTML = date;
}



/* 
 ici en a cree un evenement listener qui consiste a exucuter notre code js au moment du chargement de notre page index.html 
*/
window.addEventListener('load', (event) => 
{  
    
    Meteoloc(url);
    date ();   
})