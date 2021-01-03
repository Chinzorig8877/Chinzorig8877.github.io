
    var  myInput = document.getElementsByTagName("input")[0]
    var myDiv = document.getElementsByTagName("div")[0]
    function myFunction(){
      if(myInput.value == ""){
        myDiv.innerHTML--
        }
        else{
          myDiv.innerHTML = myDiv.innerHTML - myInput.value
        }
    }
    function increase(){
      if(myInput.value == ""){
        myDiv.innerHTML++
        }
        else{
          myDiv.innerHTML = Number(myDiv.innerHTML) + Number(myInput.value)
        }
    }
    function reset(){
      myDiv.innerHTML = 0
    }
    var myInButton = document.getElementsByTagName("button")[1]
    myInButton.onclick = increase
    var myResetButton = document.getElementsByTagName("button")[2]
    myResetButton.addEventListener("click",reset)
