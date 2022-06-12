function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,model_loaded);
    poseNet.on('pose',gotPoses);
}

function model_loaded(){
    console.log("PoseNet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}

function draw(){
    background("#b51d1d");
}