function Photographer(name, link, linkText){
    this.name = name;
    this.link = link;
    this.linkText = linkText;
}
function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption;
}

var anselAdams = new Photographer("Ansel Adams (1902-1984)", "https://www.anseladams.com", "Learn more about Ansel Adams");
var dorotheaLange = new Photographer("Dorothea Lange (1895-1965)", "https://www.moma.org/artists/3373", "Learn more about Dorothea Lange");
var walkerEvans = new Photographer("Walker Evans (1903-1975)", "https://www.moma.org/artists/1777", "Learn more about Walker Evans");
var vivianMaier = new Photographer("Vivian Maier (1926-2009)", "https://www.vivianmaier.com", "Learn more about Vivian Maier");
var gordonParks = new Photographer("Gordon Parks (1912-2006)", "https://www.gordonparksfoundation.org", "Learn more about Gordon Parks");
var nicephoreNiepce = new Photographer("Joseph Nicéphore Niépce (1765-1833)", "https://en.wikipedia.org/wiki/Nic%C3%A9phore_Ni%C3%A9pce", "Learn more about Joseph Nicéphore Niépce");
var mathewBrady = new Photographer("Mathew Brady (c. 1823-1896)", "https://en.wikipedia.org/wiki/Mathew_Brady", "Learn more about Mathew Brady");
var manRay = new Photographer("Man Ray (1890-1976)", "https://www.moma.org/artists/3716", "Learn more about Man Ray");
var foxTalbot = new Photographer("William Fox Talbot (1800-1877)", "https://en.wikipedia.org/wiki/Henry_Fox_Talbot", "Learn more about William Fox Talbot");
var annaAtkins = new Photographer("Anna Atkins (1799-1871)", "https://moma.org/artists/231", "Learn more about Anna Atkins");

var adamsImage = new Image("images/Ansel.Adams-web.jpg", "Ansel Adams", "Adams was an American landscape photographer and environmentalist known for his black-and-white images of the American West.");
var langeImage = new Image("images/dorothea_lange.jfif", "Dorothea Lange",  "Lange was an American documentary photographer best known for her Depression era work for the FSA.");
var evansImage = new Image("images/walker_evans.jfif", "Walker Evans", "Evans was an American documentary photographer and photojournalist best known for his work for the FSA.");
var maierImage = new Image("images/vivian_maier.jfif", "Vivian Maier",  "Maier was an American street photographer who took more than 150,000 photos in her lifetime, but was not discovered until after her death.");
var parksImage = new Image("images/gordon_parks.jfif", "Gordon Parks", "Parks used photography to document American life and culture from the 1940s through the 2000s, with a focus on race relations, poverty, civil rights, and urban life.");
var niepceImage = new Image("images/nicephore_niepce.jfif", "Joseph Nicéphore Niépce", "A French inventor known for his creation heliography and the devlopment of what is now one of the oldest surviving photographs.");
var bradyImage = new Image("images/mathew_brady.jfif", "Mathew Brady", "Brady was one of the earliest American photographers and is best known for his vivid Civil War battlefield photographs.");
var rayImage = new Image("images/man_ray.jfif", "Man Ray", "Ray is considered a surrealist photographer best known for his photograms, which he called rayographs.");
var talbotImage = new Image("images/william_fox_talbot.jfif", "William Fox Talbot","Talbot is known as the \"Father of the Photogram\" as well as his development of the calotype process.");
var atkinsImage = new Image("images/anna_atkins.jfif", "Anna Atkins","Atkins was an English botanist and photographer best known for her use of the cyanotype process to make photograms of plant life.");

const photographers = [anselAdams, dorotheaLange, walkerEvans, vivianMaier, gordonParks, nicephoreNiepce, mathewBrady, manRay, foxTalbot, annaAtkins];
const photoImages = [adamsImage, langeImage, evansImage, maierImage, parksImage, niepceImage, bradyImage, rayImage, talbotImage, atkinsImage];
var index = 0;

var camera1 = new Image("images/vintageCamera1.jfif", "Vintage Camera 1", "");
var camera2 = new Image("images/vintageCamera2.jfif", "Vintage Camera 2", "");
var camera3 = new Image("images/vintageCamera3.jpg", "Vinatge Camera 3", "");

const cameras = [camera1, camera2, camera3];

const d = new Date();
const h = d.getHours();

$(document).ready(function(){
    index = Math.floor(Math.random() *9);
    $("#photographerImg").attr("src", photoImages[index].url);
    $("#photographerImg").attr("alt", photoImages[index].altText);
    $("#photographerName").text(photographers[index].name);
    $("#photographerCaption").text(photoImages[index].caption);
    $("#photographerLink").text(photographers[index].linkText);
    $("#photographerLink").attr("href", photographers[index].link);

    if(h>=0 && h < 8){
        $(".vintageCamera").attr("src", cameras[0].url);
        $(".vintageCamera").attr("alt", cameras[0].altText);
    }else if (h>=8 && h < 16){
        $(".vintageCamera").attr("src", cameras[1].url);
        $(".vintageCamera").attr("alt", cameras[1].altText);
    }else{
        $(".vintageCamera").attr("src", cameras[2].url);
        $(".vintageCamera").attr("alt", cameras[2].altText);
    }

});
