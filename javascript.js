
const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator-keys");
const display = document.querySelector(".calculator-display");
const previousDisplay = document.querySelector(".previous-display");


keys.addEventListener("click", e=>{
    if(e.target.matches("button")){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.textContent;
        if(!action){
            console.log("number key!")
            if(displayedNum === "0"){
                display.innerHTML = keyContent;
            } else {
                display.innerHTML = displayedNum + keyContent;
            }
        }
        if(displayedNum.length >= 17){
            console.log("error");
            display.innerHTML = displayedNum;
        }
        if(action === "on"){
            display.textContent = "0"; 
        }
        if(action === "off"){
            previousDisplay.textContent = "";
            display.textContent = ""; 
        }
        if(
            action === "addition" ||
            action === "subtraction" ||
            action === "multiplication" ||
            action === "division"
        ){
            display.textContent = displayedNum + keyContent;
            console.log("operator key!")
        }
        if(action === "division"){
            display.textContent = displayedNum + ("/")
        }
        if(action === "multiplication"){
            display.textContent = displayedNum + "*"
        }
        if(action === "decimal"){
            display.textContent = displayedNum + ".";
            console.log("decimal key!")
        }
        if(action === "clear"){
            display.textContent = "0";
            previousDisplay.textContent = "";
            console.log("clear key!")
        }
        if(action === "calculate"){
            let currentExp = displayedNum;
            let answer = math.evaluate(currentExp);
            previousDisplay.textContent = currentExp;
            display.textContent = answer;
            console.log(answer);
            console.log(currentExp);
            console.log("equals key!")
        }
        if(action === "delete"){
            display.textContent = displayedNum.substring(0, displayedNum.length-1);
        }
        if(action === "negative"){
            if(display.textContent === "0"){
                display.textContent = "-";
            }else{
            display.textContent = displayedNum + " -";
            }
        }
        if(action === "squared"){
            display.textContent = displayedNum+ "^2";
        }
        if(action === "negative-exponent"){
            display.textContent = displayedNum+ "^-1"
        }
        if(action === "sin"){
            if(display.textContent === "0"){
                display.textContent = "sin("
            } else {
            display.textContent = displayedNum + "sin(";
            }
        }
        if(action === "tan"){
            if(display.textContent === "0"){
                display.textContent = "tan("
            } else {
            display.textContent = displayedNum + "tan(";
            }
        }
        if(action === "cos"){
            if(display.textContent === "0"){
                display.textContent = "cos("
            } else {
            display.textContent = displayedNum + "cos(";
            }
        }
        if(action === "exponent"){
            display.textContent = displayedNum + "*10^";
        }
        if(action === "log"){
            if(display.textContent === "0"){
                display.textContent = "log(";
            }else{
            display.textContent = displayedNum + "log(";
            }
        }
        if(action === "pi"){
            if(display.textContent === "0"){
                display.textContent = "3.14"
            } else {
            display.textContent = displayedNum +"(3.14)";
            }
        }
    }
})



  function colorChanger(color){
      switch(color){
                        case "blue":
                         document.getElementById('outer').style.borderTopColor="";
                         document.getElementById('inner-color').style.backgroundColor = "";
                         document.getElementById('screen').style.borderColor = "";
                         document.getElementById('solar').style.borderColor="";

                         let button_color_blue = document.getElementsByClassName("NaN");

                         for(let i = 0; i < button_color_blue.length; i++){
                                button_color_blue[i].style.backgroundColor = "";
                                button_color_blue[i].style.borderBottomColor= "";
                                button_color_blue[i].style.borderRightColor ="";
                                button_color_blue[i].style.borderLeftColor= "";
                                button_color_blue[i].style.borderTopColor= "";
                            
                        let x = calculator.querySelector('.calculator-keys');
                        let y = x.querySelectorAll(".NaN");
                        y.forEach((x)=>{
                            x.addEventListener('mouseover', function(event){
                                event.target.style.backgroundColor = "";
                            });
                            x.addEventListener('mouseout', function(event){
                                event.target.style.backgroundColor = "";
                            });
                            x.addEventListener('mousedown', function(event){
                                event.target.style.backgroundColor = "";
                                event.target.style.borderTopColor = "";
                                event.target.style.borderLeftColor = "";
                                event.target.style.borderRightColor = "";
                                event.target.style.borderBottomColor = "";
                            });
                            x.addEventListener('mouseup', function(event){
                                event.target.style.backgroundColor = "";
                                event.target.style.borderTopColor = "";
                                event.target.style.borderLeftColor = "";
                                event.target.style.borderRightColor = "";
                                event.target.style.borderBottomColor = "";
                            });
                        })
                           
                            
                        }
                        break;
                        case "pink":
                        document.getElementById('outer').style.borderTopColor="pink";
                        document.getElementById('inner-color').style.backgroundColor = "pink";
                        document.getElementById('screen').style.borderColor = "rgb(175, 134, 141)";
                        document.getElementById('solar').style.borderColor="rgb(175, 134, 141)";

                        let button_color_pink = document.getElementsByClassName("NaN");

                        let secondBtn = document.getElementById("secondBtn");

                        for(let i = 0; i < button_color_pink.length; i++){
                            button_color_pink[i].style.backgroundColor = "pink";
                            button_color_pink[i].style.borderBottomColor= "rgb(182, 118, 129)";
                            button_color_pink[i].style.borderRightColor ="rgb(182, 118, 129)";
                            button_color_pink[i].style.borderLeftColor= "rgb(255, 221, 227)";
                            button_color_pink[i].style.borderTopColor= "rgb(255, 221, 227)";
                            
                        
                            secondBtn.style.backgroundColor = "rgb(124, 196, 124)";
                            secondBtn.style.borderBottomColor= "rgb(90, 150, 90)";
                            secondBtn.style.borderRightColor ="rgb(90, 150, 90)";
                            secondBtn.style.borderLeftColor= "rgb(166, 214, 166)";
                            secondBtn.style.borderTopColor= "rgb(166, 214, 166)";

                            secondBtn.addEventListener('mouseover', function(event){
                                event.target.style.backgroundColor = "rgb(111, 173, 111)";
                            });
                            secondBtn.addEventListener('mouseout', function(event){
                                event.target.style.backgroundColor = "rgb(124, 196, 124)";
                            });
                            secondBtn.addEventListener('mousedown', function(event){
                                event.target.style.backgroundColor = "rgb(87, 141, 87)";
                                event.target.style.borderTopColor = " rgb(77, 116, 77)";
                                event.target.style.borderLeftColor = " rgb(77, 116, 77)";
                                event.target.style.borderRightColor = "rgb(166, 214, 166)";
                                event.target.style.borderBottomColor = "rgb(166, 214, 166)";
                            });
                            secondBtn.addEventListener('mouseup', function(event){
                                event.target.style.backgroundColor = "rgb(111, 173, 111)";
                                event.target.style.borderTopColor = "rgb(166, 214, 166)";
                                event.target.style.borderLeftColor = "rgb(166, 214, 166)";
                                event.target.style.borderRightColor = "rgb(90, 150, 90)";
                                event.target.style.borderBottomColor = "rgb(90, 150, 90)";
                            });

                        let x = calculator.querySelector('.calculator-keys');
                        let y = x.querySelectorAll(".NaN"); 
                        y.forEach((x)=>{
                            x.addEventListener('mouseover', function(event){
                                event.target.style.backgroundColor = "rgb(235, 175, 185)";
                            });
                            x.addEventListener('mouseout', function(event){
                                event.target.style.backgroundColor = "pink"
                            });
                            x.addEventListener('mousedown', function(event){
                                event.target.style.backgroundColor = "rgb(192, 145, 154)";
                                event.target.style.borderTopColor = "rgb(182, 118, 129)";
                                event.target.style.borderLeftColor = "rgb(182, 118, 129)";
                                event.target.style.borderRightColor = "rgb(255, 221, 227)";
                                event.target.style.borderBottomColor = "rgb(255, 221, 227)";
                            });
                            x.addEventListener('mouseup', function(event){
                                event.target.style.backgroundColor = "rgb(235, 175, 185)";
                                event.target.style.borderTopColor = "rgb(255, 221, 227)";
                                event.target.style.borderLeftColor = "rgb(255, 221, 227)";
                                event.target.style.borderRightColor = "rgb(182, 118, 129)";
                                event.target.style.borderBottomColor = "rgb(182, 118, 129)";
                            });
                            
                        }) 

                        }
                        break;
                       
      }
                    
  }

  
 

