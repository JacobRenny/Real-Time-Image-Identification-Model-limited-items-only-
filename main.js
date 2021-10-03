//https://teachablemachine.withgoogle.com/models/i8X9ITZXQ/model.json
//PS dont be dumb and make sure to copy this and not put model.json again
function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier(
    "https://teachablemachine.withgoogle.com/models/i8X9ITZXQ/model.json",
    modelLoaded()
  );
}
function draw() {
  image(video, 0, 0, 300, 300);
  classifier.classify(video, gotResult);
}
function modelLoaded() {
  console.log("Model Loaded");
}
function gotResult(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    document.getElementById("result_object_name").innerHTML = results[0].label;
    document.getElementById("result_object_accuracy").innerHTML =
      results[0].confidence.toFixed(3);
  }
}
