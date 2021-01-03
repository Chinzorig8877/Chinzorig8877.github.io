var count = 0
var colors = ["black","red","yellow", "aqua"]
var myInput = document.getElementById("myInput")
function changeColor(){
 //   console.log(array[array.length - 1])
  document.body.style.background = colors[count]
  count++
  if(count == colors.length){
    count = 0
  }    

}
function addCenter(){
  document.body.style.backgroundColor = myInput.value
  if(document.body.style.backgroundColor == myInput.value){
    colors.push(myInput.value)
  }
  else{
    alert("Буруу өнгөний утга байна! ")
  }
  myInput.value = ""
}