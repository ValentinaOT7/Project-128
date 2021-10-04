song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("VswithoutBass.mp3");
    song2 = loadSound("withoutBass.mp3");
}
function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO)
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log('PoseNet is intialized')
}
function draw()
{
    image(video, 0, 0, 600, 500);
}
function play()
{
    song1.play();
    song1.setVolume(1);
    song.rate(1);
}

