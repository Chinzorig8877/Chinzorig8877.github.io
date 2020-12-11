document.querySelector("button#goBtn").onclick = getData
async function getData(){
    var inputValue = document.querySelector("input#myInput").value
    var response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=Yzv4paf0FNdthW7zLE8C2UYOGepIb3US&q=" + inputValue)
    var responseData = await response.json()
    var myArray = responseData.data
 //   console.log(responseData.data[0].images.downsized_medium.url)
    document.querySelector("div#container").innerHTML = ""
    for (let i = 0; i < myArray.length; i++){
    var myImg = document.createElement("img")
    myImg.src = (responseData.data[i].images.downsized_medium.url)
    document.querySelector("div#container").append(myImg)
    }
}
getData()