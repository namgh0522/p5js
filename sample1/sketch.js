let img;
let img2;


function preload()
{
    img = loadImage('assets/sunflower.jpg');
    img2 = loadImage('assets/earth.jpg');
}
function setup()

{
    createCanvas(3000,3000);
}

function draw()
{
    background(220);
    image(img,0,0);
    image(img2,600,0);
}