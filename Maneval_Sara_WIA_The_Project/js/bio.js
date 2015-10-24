if(Modernizr.audio){
    var theAudio= document.getElementById("audio")

    console.log(Modernizr);

}else{


}


var audio;

window.onload= function(){

    audio=document.getElementById("audio");
};

function clicked(){

    audio.currentTime +=10;

}
