
status = "";
objects = [];


function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();    
}


function start(){
if(objects[i].label == object_name)
{
    
    variable_name_holds_webcamLiveView.stop()
    document.getelementById("object_status").innerHTML=object_name + "Found";
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(object_name);
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "STATUS : DETECTING OBJECTS";
    document.getElementById("name").value;    
}
else
document.getelementById("object_status").innerHTML=object_name + "Not Found";
}

function draw()
{
    image(video, 0, 0, 380, 380);
    if(status != "")
    {
         objectDetector.detect(video, gotResult);
        for(i = 0; i < objects.length; i++)
        {
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#3399ff");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            speak_data = objects[i].label;       
        }
    } 
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }


function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    objects = results;
}