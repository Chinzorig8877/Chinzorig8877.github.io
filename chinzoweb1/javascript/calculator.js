function clean(){
    var input = document.getElementById("myInput")
    input.value = input.value.substring(0,input.value.lenght-1)
}
function insert(arg){
    var input = document.getElementById("myInput")
    input.value = input.value + arg
}
function equal(){
    var input = document.getElementById("myInput")
    input.value = eval(input.value)
}  
