function setup(){
   video=createCapture(VIDEO);
   video.size(550,500);

   canvas=createCanvas(550,550)
   canvas.position(560,150)

   poseNet=ml5.poseNet(video,modeLoaded);
   poseNet.on('poses',gotPoses);
}

function draw(){
    background('#6C91C2');
    textSize(difference);
    fill('#FFE787');
    text('Tanu',50,400)
}

function modeLoaded(){
    console.log('PoseNet Is Intialized!')
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results)

        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}