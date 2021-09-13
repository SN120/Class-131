// model name : CocoSsd (Coco Single Shot MultiBox Detection);

img = "";

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
}

function preload(){
    img = loadImage('dog_cat.jpg');
}
function draw(){
    image(img, 0, 0, 640, 420);

    fill('#FF0000');
    text('Dog', 45, 75);
    noFill();
    stroke('#FF0000');
    rect(30, 60, 450, 350);

    noFill();

    fill('#03fc20');

    text('Cat', 295, 70);
    stroke('#03fc20');

    noFill();
    rect(290, 50, 300, 350);    
}