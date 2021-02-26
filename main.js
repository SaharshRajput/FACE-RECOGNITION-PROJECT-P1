
Webcam.set(
    width=360,
    height=360,
    image_format="png",
    png_quality=90
)
camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
document.getElementById("result").innerHTML='<img id="snapshot" src='+data_uri+'>'
    })
}
classifier=ml5.imageClassify("https://teachablemachine.withgoogle.com/models/6tCSFg5jG/.json",modelLoaded)

console.log("ml5 version",ml5.version);
function check()
{
    img=document.getElementById("snapshot");
    classifier.classify(img,gotResult)
}