/*
    1. I think jQuery is easier to read than JavaScript code because it's more explicit than pure JS.
       The functions included with jQuery (attr, text, etc.) made reading and understanding the code
       much more straightforward. I feel apt naming is very important to JS readability.
    2. My jQuery program is shorter than the pure JS program.
    3. Compared to JavaScript, jQuery is consise and has an abundant library. Therefore, my answers to the questions 
       above seem typical for jQuery v. JavaScript comparisons. My answers describe how jQuery is much more concise
       than JS. They also address that the functions provided by jQuery allow for less specific naming than JavaScript for
       equal comprehension.   
*/    
function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption; 
}

var morningImage = new Image("images/sunrise.jpg", "Morning Image", "It's too early");
var lateMorningImage = new Image("images/lateMorning.jfif", "Late Morning Image", "Rise and Shine");
var noonImage = new Image("images/afternoon.jpg", "Afternoon Image", "Shouldn't you be working?");
var eveningImage = new Image("images/sunset.jpg", "Evening Image", "Time to relax");
var nightImage = new Image("images/night.jpg", "Night Image", "You should be sleeping");
var midnightImage = new Image("images/midnight.jpg", "Midnight Image", "Seriously, what are you doing up?");

const images = [midnightImage, morningImage, lateMorningImage, noonImage, eveningImage, nightImage];

var fall1 = new Image("images/trees.jpeg", "Trees", "Fall Breeze and Autumn Leaves");
var fall2 = new Image("images/pumpkins.jpeg", "Pumpkins", "Oh my gourdness, it's autumn!");
var fall3 = new Image("images/deer.jpg", "Deer", "Happy Fall Y'all");
var fall4 = new Image("images/sunflowers.jpg", "Sunflowers", "So long summer, hello fall");

const galImages = [fall1, fall2, fall3, fall4];
var index = 0;

const d = new Date();
const m = d.getMonth();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const date = d.getDate();
const h = d.getHours();

$(document).ready(function(){
    if(h >= 0 && h < 4){
        $("#img").attr("src", images[0].url);
        $("#img").attr("alt", images[0].altText);
        $("#dateText").text(images[0].caption);
    }else if(h >= 4 && h < 8){
        $("#img").attr("src", images[1].url);
        $("#img").attr("alt", images[1].altText);
        $("#dateText").text(images[1].caption);
    }else if(h >= 8 && h < 12){
        $("#img").attr("src", images[2].url);
        $("#img").attr("alt", images[2].altText);
        $("#dateText").text(images[2].caption);
    }else if(h >= 12 && h < 16){
        $("#img").attr("src", images[3].url);
        $("#img").attr("alt", images[3].altText);
        $("#dateText").text(images[3].caption);
    }else if(h >= 16 && h < 20){
        $("#img").attr("src", images[4].url);
        $("#img").attr("alt", images[4].altText);
        $("#dateText").text(images[4].caption);
    }else{
        $("#img").attr("src", images[5].url);
        $("#img").attr("alt", images[5].altText);
        $("#dateText").text(images[5].caption);
    }
    showTime();
    setInterval(showTime, 60000);
    $("#date").text(months[m] + " " + date);

    $("#randButton").click(function(){
        index = Math.floor(Math.random() *4);
        $("#gal").attr("src", galImages[index].url);
        $("#gal").attr("alt", galImages[index].altText);
        $("#galText").text(galImages[index].caption);
    });
    
    $("#nextButton").click(function(){
        if(index == 3){
            index = 0;
            $("#gal").attr("src", galImages[index].url);
            $("#gal").attr("alt", galImages[index].altText);
            $("#galText").text(galImages[index].caption);
        }else{
            index += 1;
            $("#gal").attr("src", galImages[index].url);
            $("#gal").attr("alt", galImages[index].altText);
            $("#galText").text(galImages[index].caption);
        }
    });
});

function showTime(){
    const day = new Date();
    $("#time").text(day.toLocaleTimeString());
}