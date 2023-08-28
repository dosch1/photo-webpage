function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption;
}

var flowerVase = new Image("images/flowerVase.jpg", "flower vase", "\"...A vase is nothing but an ornate coffin for the flower.\" (Mehmet Murat Ildan)");
var tractor    = new Image("images/tractor.jpg", "tractor", "Haymaker");
var tree   = new Image("images/tree.jpg", "tree", "The view is tree-mendous");
var cow   = new Image("images/cow.jpg", "cow", "Eat more chicken");

const light = [flowerVase, cow ,tractor, tree];
var index = 0;

$(document).ready(function(){
    $(".next").click(function(){
        if(index == 3){
            index = 0;
            $(".mySlides").attr("src", light[index].url);
            $(".mySlides").attr("alt", light[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(light[index].caption);
        }else{
            index++;
            $(".mySlides").attr("src", light[index].url);
            $(".mySlides").attr("alt", light[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(light[index].caption);
        }
    });

    $(".prev").click(function(){
        if(index == 0){
            index = 3;
            $(".mySlides").attr("src", light[index].url);
            $(".mySlides").attr("alt", light[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(light[index].caption);
        }else{
            index--;
            $(".mySlides").attr("src", light[index].url);
            $(".mySlides").attr("alt", light[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(light[index].caption);
        }
    });
});