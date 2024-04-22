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
	canvas = createCanvas(1800,500);
	canvas.parent('canvas');
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(500, 400);
	video.parent("game_console");
}

function draw() {
	image(img, marioX, marioY, 40, 70);
	game()
}






