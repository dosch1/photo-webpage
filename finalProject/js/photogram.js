function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption;
}

var flowers = new Image("images/flowers_photogram.jpg", "flowers", "Oopsie Daisy");
var tools   = new Image("images/tools_photogram.jpg", "tools",  "Rudimentary Surgery Kit");
var bird    = new Image("images/bird_photogram.jpg", "bird", "Birds Aren't Real");
var forks   = new Image("images/forks_photogram.jpg", "forks", "Dinglehoppers");

const photograms = [flowers, tools, bird, forks];
var index = 0;

$(document).ready(function(){
    $(".next").click(function(){
        if(index == 3){
            index = 0;
            $(".mySlides").attr("src", photograms[index].url);
            $(".mySlides").attr("alt", photograms[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(photograms[index].caption);
        }else{
            index++;
            $(".mySlides").attr("src", photograms[index].url);
            $(".mySlides").attr("alt", photograms[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(photograms[index].caption);
        }
    });

    $(".prev").click(function(){
        if(index == 0){
            index = 3;
            $(".mySlides").attr("src", photograms[index].url);
            $(".mySlides").attr("alt", photograms[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(photograms[index].caption);
        }else{
            index--;
            $(".mySlides").attr("src", photograms[index].url);
            $(".mySlides").attr("alt", photograms[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(photograms[index].caption);
        }
    });
});