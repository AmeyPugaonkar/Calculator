let displayBtn = document.getElementsByClassName("display");

// on reload window
window.onload= ()=> {
    for (let i = 0; i < displayBtn.length; i++) {
        displayBtn[i].setAttribute("onclick","sreenDisplay(this)"); 
    }
}

let screenvalue="";
let calucateValue ="";

// diaplay the clicked values on screen
function sreenDisplay(element){
    let val = element.id;
    let value=element.innerHTML;
    if(val == "multi"){
        calucateValue=calucateValue+"*";
    }else if(val == "divide"){
        calucateValue=calucateValue+"/";
    }else{
        calucateValue=calucateValue+value;
    }
    screenvalue=screenvalue+value;
    document.getElementById("result").value = screenvalue;
}

// Main calculation
function calculate(){
    let answer = eval(calucateValue);
    document.getElementById("result").value = answer;
    screenvalue=answer.toString();
    calucateValue = answer.toString();
}

// clear the screen
function clearAll(){
    screenvalue="";
    calucateValue="";
    document.getElementById("result").value = screenvalue;
}

// remove last element
function removeLast(){
    screenvalue = screenvalue.substring(0,screenvalue.length-1);
    calucateValue = calucateValue.substring(0,calucateValue.length-1);
    document.getElementById("result").value = screenvalue;
}
