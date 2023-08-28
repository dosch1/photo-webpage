function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption;
}

var chairs = new Image("images/chairs.jpg", "chairs", "Adirondack");
var pond    = new Image("images/pond.jpg", "pond", "Across the Shore");
var power   = new Image("images/power.jpg", "power", "Power Up");

const gallery = [chairs, pond, power];
var index = 0;

$(document).ready(function(){
    $(".next").click(function(){
        if(index == 2){
            index = 0;
            $(".mySlides").attr("src", gallery[index].url);
            $(".mySlides").attr("alt", gallery[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(gallery[index].caption);
        }else{
            index++;
            $(".mySlides").attr("src", gallery[index].url);
            $(".mySlides").attr("alt", gallery[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(gallery[index].caption);
        }
    });

    $(".prev").click(function(){
        if(index == 0){
            index = 2;
            $(".mySlides").attr("src", gallery[index].url);
            $(".mySlides").attr("alt", gallery[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(gallery[index].caption);
        }else{
            index--;
            $(".mySlides").attr("src", gallery[index].url);
            $(".mySlides").attr("alt", gallery[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(gallery[index].caption);
        }
    });
});