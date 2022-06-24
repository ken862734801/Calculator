
const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator-keys')


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

                        for(let i = 0; i < button_color_pink.length; i++){
                            button_color_pink[i].style.backgroundColor = "pink";
                            button_color_pink[i].style.borderBottomColor= "rgb(182, 118, 129)";
                            button_color_pink[i].style.borderRightColor ="rgb(182, 118, 129)";
                            button_color_pink[i].style.borderLeftColor= "rgb(255, 221, 227)";
                            button_color_pink[i].style.borderTopColor= "rgb(255, 221, 227)";
                            

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

  
 

