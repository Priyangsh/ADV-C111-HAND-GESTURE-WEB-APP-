prediction1= "";
prediction2= "";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:100
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML ="<img id='snapshot' src='"+data_uri+"'>"; 
    } )
}

console.log("ml5.version", ml5.version);

function speak(){
    var synth = window.speechSynthesis;
    var speak_1_data = "The first prediction is "+prediction1;
    var speak_2_data = "The second prediction is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_1_data+speak_2_data);
    synth.speak(utterThis);
}