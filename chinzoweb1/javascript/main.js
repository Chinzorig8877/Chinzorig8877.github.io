var n = 0
setInterval(function(){
    window.location.reload(1);
 }, 3000);

function onloadTv(){
getData()  
}
async function getData(){
    var response = await fetch("https://api.giphy.com/v1/gifs/random?api_key=58QYDSCXwei6MNyKaeaezUQwMnW9lsOR&tag=&rating=g")
    var responseData = await response.json()
    var myArray = responseData
    console.log(myArray)
    var img = document.createElement("img")
            img.src = responseData.data.images.downsized.url
            document.getElementById('display').append(img)
}