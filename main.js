function startClassification()
{
navigator.mediaDevices.getUserMedia({audio: true})
classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6ZD4w4hBk/model.json", modelReady)
}

function modelReady()
{

classifier.classify(gotResults);

}