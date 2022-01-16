
function calcNum(){

    var numInput = document.getElementById("inputText2").value;
    var sum = 0;
    for (let i = 0; i < parseInt(numInput); i++ ) 
    {  
      sum += (i + 1);
    }
    let output = document.createElement('p');
    
    output.textContent = "Total is: " + sum;
    document.querySelector('div#Output').appendChild(output);
   
  }

function displayText(){
    var textInput = document.getElementById("inputText1").value
    document.getElementById("Output").innerHTML = textInput
}  



function addNum(){

    var numInputOne = document.getElementById("inputText3").value;
    var numInputTwo = document.getElementById("inputText4").value;
    
    numFinal = parseInt(numInputOne) + parseInt(numInputTwo);

    let output = document.createElement('p');
    
    output.textContent = "Added Total is: " + numFinal;
    document.querySelector('div#Output').appendChild(output);
   
  }
  function subtractNum(){

    var numInputOne = document.getElementById("inputText3").value;
    var numInputTwo = document.getElementById("inputText4").value;
    
    numFinal = parseInt(numInputOne) - parseInt(numInputTwo);

    let output = document.createElement('p');
    
    output.textContent = "Added Total is: " + numFinal;
    document.querySelector('div#Output').appendChild(output);
   
  }