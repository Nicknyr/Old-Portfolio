window.onload=function(){
  var elem = document.querySelectorAll(".button2");
  var display = document.getElementById("displayText");
  var result = "";

  for(var i = 0; i < elem.length; i++){
    elem[i].addEventListener("click",function(){
      if(this.innerHTML=='='){
        result = eval(display.innerHTML);

        display.innerHTML = result;

      }else if(this.innerHTML == 'CE'){
        result="";

        display.innerHTML = result;
      }else{
        result += this.innerHTML;

        display.innerHTML = result;

      }
    });

  }

};
