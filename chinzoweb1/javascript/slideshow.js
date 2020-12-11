var i = 0
var myImagesArray = ["../zurag/img2.jpg", "../zurag/img3.jpg", "../zurag/img4.jpg"]  
var isPaused = false
function togglePause(){
    if(!isPaused){
        clearInterval(intervalId)
    }   
    else{
        intervalId = setInterval(myIntervalFunction,1000)
    }
    isPaused = !isPaused
}
function myIntervalFunction(){
  document.querySelector("img").src = myImagesArray[i]
  i++
  if(i == myImagesArray.length)
    i = 0
}

var intervalId = setInterval(myIntervalFunction,1000)