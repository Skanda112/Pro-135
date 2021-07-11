

function setup()
{
    canvas = createCanvas(500, 350);
    canvas.position(430, 250);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 500, 350);
}