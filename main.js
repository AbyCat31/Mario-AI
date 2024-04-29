img="";
noseX=0;
noseY=0;
marioX=0;
marioY=0;
function preload() {
	img=loadImage("mario05.png");
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(800, 400);
	video.parent("game_console");
	poseNet = ml5.poseNet(video, modelLoaded);
	 poseNet.on('pose', gotPoses);
}

function draw() {
	image(img, marioX, marioY, 40, 70);
	game()
}
function modelLoaded()
{
	console.log("Tu modelo ha cargado");
	
}
function gotPoses()
{
	if(results.length>0)
	{
		noseX=results[0].pose.nose.x;
	noseY=results[0].pose.nose.y;
	}
}




