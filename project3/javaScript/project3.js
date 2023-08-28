function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption; 
}

var dateText = document.getElementById("dateText");
var dateMD = document.getElementById("date");
var time = document.getElementById("time");

var img = document.getElementById("img");

var morningImage = new Image("images/sunrise.jpg", "Morning Image", "It's too early");
var lateMorningImage = new Image("images/lateMorning.jfif", "Late Morning Image", "Rise and Shine");
var noonImage = new Image("images/afternoon.jpg", "Afternoon Image", "Shouldn't you be working?");
var eveningImage = new Image("images/sunset.jpg", "Evening Image", "Time to relax");
var nightImage = new Image("images/night.jpg", "Night Image", "You should be sleeping");
var midnightImage = new Image("images/midnight.jpg", "Midnight Image", "Seriously, what are you doing up?");

const images = [midnightImage, morningImage, lateMorningImage, noonImage, eveningImage, nightImage];
const d = new Date();
const m = d.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = d.getDate();
const h = d.getHours();

window.onload = function(){
    if(h >= 0 && h < 4){
        img.src = images[0].url;
        img.alt = images[0].altText;
        dateText.innerHTML = images[0].caption;
    }else if(h >= 4 && h < 8){
        img.src = images[1].url;
        img.alt = images[1].altText;
        dateText.innerHTML = images[1].caption;
    }else if(h >= 8 && h < 12){
        img.src = images[2].url;
        img.alt = images[2].altText;
        dateText.innerHTML = images[2].caption;
    }else if(h >= 12 && h < 16){
        img.src = images[3].url;
        img.alt = images[3].altText;
        dateText.innerHTML = images[3].caption;
    }else if(h >= 16 && h < 20){
        img.src = images[4].url;
        img.alt = images[4].altText;
        dateText.innerHTML = images[4].caption;
    }else{
        img.src = images[5].url;
        img.alt = images[5].altText;
        dateText.innerHTML = images[5].caption;
    }
}

function showTime(){
    const day = new Date();
    var t = day.toLocaleTimeString();
    time.innerHTML = t; 
}
showTime();
setInterval(showTime, 60000);
dateMD.innerHTML = months[m] + " " + date;

var gal = document.getElementById("gal");
var galText = document.getElementById("galText")

var fall1 = new Image("images/trees.jpeg", "Trees", "Fall Breeze and Autumn Leaves");
var fall2 = new Image("images/pumpkins.jpeg", "Pumpkins", "Oh my gourdness, it's autumn!");
var fall3 = new Image("images/deer.jpg", "Deer", "Happy Fall Y'all");
var fall4 = new Image("images/sunflowers.jpg", "Sunflowers", "So long summer, hello fall");

const galImages = [fall1, fall2, fall3, fall4];

var randButton = document.getElementById("randButton");
var nextButton = document.getElementById("nextButton");

var index = 0;
function randFunction(){
    index = Math.floor(Math.random() *4);
    gal.src = galImages[index].url;
    gal.alt = galImages[index].altText;
    galText.innerHTML = galImages[index].caption;
}

function nextFunction(){
    if(index == 3){
        gal.src = galImages[0].url;
        gal.alt = galImages[0].altText;
        galText.innerHTML = galImages[0].caption;
        index = 0;
    }else{
        gal.src = galImages[index + 1].url;
        gal.alt = galImages[index + 1].altText;
        galText.innerHTML = galImages[index + 1].caption;
        index += 1;
    }
}
