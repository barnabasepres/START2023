var map = L.map('map').setView([31.224361, 121.469170], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let mapEle1 = document.getElementById('map');
mapEle1.style.display = "none"

let mapEle2 = document.getElementById('mapp')
mapEle2.style.display = "none"

let mapEle3 = document.getElementById('mappp')
mapEle3.style.display = "none"

let searchEle = document.getElementById('searchEle');
searchEle.style.display = "flex";

let doctorEle =document.getElementById('doctorEle')
doctorEle.style.display = "none"

let pillmngmEle = document.getElementById("pillmanagementEle")
pillmngmEle.style.display = "none"

let cuponEle = document.getElementById('cuponelement')
cuponEle.style.display ="none";

let searchIcon = document.getElementById('searchicon')
let doctorIcon = document.getElementById('doctoricon')
let deliveryIcon = document.getElementById('deliveryicon')
let pillIcon = document.getElementById('pillicon')
let kuponIcon = document.getElementById('kuponicon')

const deliveryButton = document.getElementById('delivery');

const searchButton = document.getElementById('search');

const doctorButton = document.getElementById("doctor");

const pillmngmButton = document.getElementById('pillmanagement')

const cuponButton = document.getElementById("cupon")
// ************************SEARCH BUTTON*************

searchButton.addEventListener("click", function(){
    if(doctorEle.style.display === 'flex'){
        searchEle.style.display = 'flex';
        doctorEle.style.display = 'none';
        searchIcon.src = "search.png";
        doctorIcon.src = "porvos.png";
    }else if(mapEle3.style.display === "flex" || mapEle2.style.display === "flex" || mapEle1.style.display === "flex"){
        searchEle.style.display = 'flex';
        deliveryIcon.src = "ptaska.png";
        searchIcon.src = "search.png";
        mapEle1.style.display = "none";
        mapEle2.style.display = "none";
        mapEle3.style.display = "none";
    } else if(pillmngmEle.style.display === "flex"){
        pillIcon.src = "pgyogyszer.png";
        searchIcon.src = "search.png"
        pillmngmEle.style.display = "none"
        searchEle.style.display = "flex"
    }else if(cuponEle.style.display === "flex"){
        kuponIcon.src = "pkupon.png";
        searchIcon.src = "search.png"
        cuponEle.style.display = "none"
        searchEle.style.display = "flex"
    }else{
        searchEle.style.display = 'flex';
        searchIcon.src = "search.png"
    }
})

let searchInput = document.getElementById('searchInput')
let searchbutton = document.getElementById('searchbutton')
let searchResult = document.getElementById('searchResult')
let searchResult2 = document.getElementById('searchResult2')

symptomList = 'loss of breath coughing whistling noise running out of breath'
searchbutton.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if(symptomList.includes(searchInput.value.toLowerCase())){
            searchResult.innerHTML = "You have typed in 'xyz' into our system. According to the symptoms you have given us it is highly likely that you have asthma to a certain extent and therefore it is advised to reach out to a medical professional. Until then, we provide you some medicine that will alleviate some of your problems" +
            "- medicine XYZ medicine XYZ- medicine XYZ."      
            searchResult2.innerHTML = "You can buy them directly in the pharmaceutical stores or in our webshop. It is also unlikely but possible that you have either pneumonia, COVID-19 or irritative allergies. Medication against those are provided in our webshop as well."
        }else{
            searchResult.innerHTML = "Sorry, my creators had no time to create a complete search engine yet, I don't understand your symptom. Try searches like 'coughing, running out of breath'."
            searchResult2.innerHTML = ""
        }
    }
})


// *******************DOCTOR BUTTON*******************

doctorButton.addEventListener("click", function(){
    if(searchEle.style.display === 'flex'){
        doctorEle.style.display = 'flex';
        searchEle.style.display = 'none';
        doctorIcon.src = "orvos.png";
        searchIcon.src = "psearch.png";
    }else if(mapEle3.style.display === "flex" || mapEle2.style.display === "flex" || mapEle1.style.display === "flex"){
        deliveryIcon.src = "ptaska.png";
        doctorIcon.src = "orvos.png"
        doctorEle.style.display = 'flex';
        mapEle1.style.display = "none";
        mapEle2.style.display = "none";
        mapEle3.style.display = "none";
    }  else if(pillmngmEle.style.display === "flex"){
        pillIcon.src = "pgyogyszer.png";
        pillmngmEle.style.display = "none";
        doctorIcon.src = "orvos.png"
        doctorEle.style.display = "flex"
    }else if(cuponEle.style.display === "flex"){
        kuponIcon.src = "pkupon.png";
        cuponEle.style.display = "none"
        doctorIcon.src = "orvos.png"
        doctorEle.style.display = "flex"
    }else{
        doctorIcon.src = "orvos.png"
        doctorEle.style.display = 'flex';
    }
})

// **************DELIVERY BUTTON***********    

deliveryButton.addEventListener("click", function(){
    if(doctorEle.style.display === 'flex'){
        doctorEle.style.display = 'none';
        deliveryIcon.src = "taska.png";
        doctorIcon.src = "porvos.png";
        mapEle1.style.display = 'flex';
        mapEle2.style.display = 'flex';
        mapEle3.style.display = 'flex';

    }else if(searchEle.style.display === "flex"){
        searchIcon.src = "psearch.png";
        deliveryIcon.src = "taska.png";
        searchEle.style.display = 'none';
        mapEle1.style.display = "flex";
        mapEle2.style.display = 'flex';
        mapEle3.style.display = 'flex';
    } else if(pillmngmEle.style.display === "flex"){
        pillIcon.src = "pgyogyszer.png";
        deliveryIcon.src = "taska.png";
        pillmngmEle.style.display = "none"
        mapEle1.style.display = "flex";
        mapEle2.style.display = 'flex';
        mapEle3.style.display = 'flex';
    }else if(cuponEle.style.display === "flex"){
        kuponIcon.src = "pkupon.png";
        deliveryIcon.src = "taska.png";
        cuponEle.style.display = "none"
        mapEle1.style.display = "flex";
        mapEle2.style.display = 'flex';
        mapEle3.style.display = 'flex';
    }else{
        deliveryIcon.src = "taska.png"
        mapEle1.style.display = "flex";
        mapEle2.style.display = 'flex';
        mapEle3.style.display = 'flex';
    }

})

// *******PILL MANAGEMENT BUTTON******-
pillmngmButton.addEventListener("click", function(){
    if(doctorEle.style.display === 'flex'){
        doctorEle.style.display = "none";
        doctorIcon.src = "porvos.png";
        pillmngmEle.style.display = "flex";
        pillIcon.src = "gyogyszer.png";
    }else if(searchEle.style.display === "flex"){
        searchIcon.src = "psearch.png";
        pillIcon.src = "gyogyszer.png";
        pillmngmEle.style.display = "flex";
        searchEle.style.display = "none";
    }else if(mapEle3.style.display === "flex" || mapEle2.style.display === "flex" || mapEle1.style.display === "flex"){
        deliveryIcon.src = "ptaska.png";
        pillmngmEle.style.display = 'flex';
        pillIcon.src = "gyogyszer.png";
        mapEle1.style.display = "none";
        mapEle2.style.display = "none";
        mapEle3.style.display = "none";
    }else if(cuponEle.style.display === "flex"){
        kuponIcon.src = "pkupon.png";
        pillIcon.src = "gyogyszer.png";
        cuponEle.style.display = "none"
        pillmngmEle.style.display = "flex"
    }else{
        pillIcon.src = "gyogyszer.png";
        pillmngmEle.style.display = "flex";
    }
})

// ******CUPON BUTTON*******
cuponButton.addEventListener("click", function(){
    if(doctorEle.style.display === 'flex'){
        doctorEle.style.display = "none";
        cuponEle.style.display = "flex";
        kuponIcon.src = "discount.png";
        doctorIcon.src = "porvos.png";
    }else if(searchEle.style.display === "flex"){
        searchIcon.src = "psearch.png";
        kuponIcon.src = "discount.png";
        cuponEle.style.display = "flex";
        searchEle.style.display = "none";
    }else if(mapEle3.style.display === "flex" || mapEle2.style.display === "flex" || mapEle1.style.display === "flex"){
        deliveryIcon.src = "ptaska.png";
        kuponIcon.src = "discount.png";
        cuponEle.style.display = 'flex';
        mapEle1.style.display = "none";
        mapEle2.style.display = "none";
        mapEle3.style.display = "none";
    }else if(pillmngmEle.style.display === "flex"){
        pillIcon.src = "pgyogyszer.png";
        kuponIcon.src = "discount.png";
        pillmngmEle.style.display = "none"
        cuponEle.style.display = "flex";
    }else{
        kuponIcon.src = "discount.png";
        cuponEle.style.display = "flex";
    }
})


// *********WEBSHOP**********
let webshopEle = document.getElementById("webshop")
webshopEle.style.display = "none";
let webshopInput = document.getElementById("webshopinput")
let webshopButton = document.getElementById('wsbutton')
const webshopSearchStr = 'asthma medicine coughing'

webshopButton.addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        if(webshopSearchStr.includes(webshopInput.value.toLowerCase())){
            webshopEle.style.display = "flex";
        }
    }
})


