function preload()
{
    img = loadImage('image.webp');
    
}
function setup()
{
    canvas=createCanvas(620,420);
    canvas.center();

}
function draw()
{
    image(img,0,0,620,420);
    fill("#FF0000");
    text("tv",  95, 75);
    noFill();
    stroke('#FF0000');
    rect(90, 60 , 480,200)
}