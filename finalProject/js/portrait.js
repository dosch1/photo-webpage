function Image(url, altText, caption){
    this.url = url;
    this.altText = altText;
    this.caption = caption;
}

var girlMask = new Image("images/girlMask.jpg", "mask", "Six feet apart, not six feet under");
var dadCouch    = new Image("images/dadCouch.jpg", "man on couch", "Don't poke the bear");
var girlCat   = new Image("images/girlCat.jpg", "cat", "Cat vs Human");
var dadTable  = new Image("images/dadTable.jpg", "man at table", "Making pointy things pointier");
var selfPortrait  = new Image("images/selfPortrait.jpg", "self portrait", "Reflections");

const portrait = [girlMask, dadCouch ,girlCat, dadTable, selfPortrait];
var index = 0;

$(document).ready(function(){
    $(".next").click(function(){
        if(index == 4){
            index = 0;
            $(".mySlides").attr("src", portrait[index].url);
            $(".mySlides").attr("alt", portrait[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(portrait[index].caption);
        }else{
            index++;
            $(".mySlides").attr("src", portrait[index].url);
            $(".mySlides").attr("alt", portrait[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(portrait[index].caption);
        }
    });

    $(".prev").click(function(){
        if(index == 0){
            index = 4;
            $(".mySlides").attr("src", portrait[index].url);
            $(".mySlides").attr("alt", portrait[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(portrait[index].caption);
        }else{
            index--;
            $(".mySlides").attr("src", portrait[index].url);
            $(".mySlides").attr("alt", portrait[index].altText);
            $(".numbertxt").text(index+1);
            $("#caption").text(portrait[index].caption);
        }
    });
});