song = "";
song2 = "";

function setup(){
canvas = createCanvas(500,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();



}

function preLoad(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw(){
    image(video,0,0,500,500);

}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);

}