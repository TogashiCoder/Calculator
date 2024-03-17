let Top_field_value = "";
let Bottm_field_value = "";
let result = null;
let Operation_final = "";
let IshaveDot = false;

const Top_field_Dom = document.querySelector(".Top-field");
const Bottom_field_Dom = document.querySelector(".Bottom-field");
const result_field_Dom = document.querySelector(".result-field");
const numbers_Button_Dom = document.querySelectorAll(".number");
const operations_Button_Dom = document.querySelectorAll(".operation");
const equal_Button_Dom = document.querySelector(".equal");
const cleaning_All_Button_Dom = document.querySelector(".cleaning-all");
const delete_last_Button_Dom = document.querySelector(".delete-last");
const cleanSymbol_icone_Dom =document.getElementById("cleariconeId");
const settingId_Dom = document.getElementById("settingId");
const color_settings_Dom =document.getElementById("color-settings");
const color_input_Dom =document.getElementById("color-input");
const input_elements_Dom = document.querySelectorAll("input");
const input_color_font_Dom = document.getElementById("color-font-id");
const displaycolor_Dom = document.getElementById("display");
const input_display_color_Dom = document.getElementById("display-color_id");




//event(click) numbers
numbers_Button_Dom.forEach(function(number){
  number.addEventListener('click',function(event){
    // if(event.target.value ==='.' && !IshaveDot)
    if(this.value ==='.' && !IshaveDot) 
    {
      IshaveDot =true;
    }
    // else if(event.target.value ==='.' && IshaveDot)
    else if(this.value ==='.' && IshaveDot)
    {
      return;
    }
    // for numbers input
    // Bottm_field_value += event.target.value;
    Bottm_field_value += this.value;
    Bottom_field_Dom.innerHTML = Bottm_field_value;

  });
});

      //event(click) opery
    operations_Button_Dom.forEach(function(operation)
    {
      operation.addEventListener('click',function(event){
        if(!Bottm_field_value) return;//if falsy(empty 'no numbers')
         IshaveDot =false;
        //  const operationName = event.target.value;
        const operationName = this.value;
        if (Top_field_value && Bottm_field_value && Operation_final)
        {
          calc_Operataions();
        }
        else 
        {
          result = parseFloat(Bottm_field_value);
        }
        
          clearVar(operationName);
          Operation_final = operationName;        
      });
    });


    function clearVar(name=""){
      Top_field_value += Bottm_field_value + " " + name + " ";
      Top_field_Dom.innerHTML = Top_field_value;
      Bottom_field_Dom.innerHTML = "";
      Bottm_field_value ="";
      result_field_Dom.innerHTML = result;
    }


    //logic of  event(click) the operation + - * / %
    function calc_Operataions() {
      if (Operation_final === "x") {
        result = parseFloat(result) * parseFloat(Bottm_field_value);
      } else if (Operation_final === "+") {
        result = parseFloat(result) + parseFloat(Bottm_field_value);
      } else if (Operation_final === "-") {
        result = parseFloat(result) - parseFloat(Bottm_field_value);
      } else if (Operation_final === "/") {
        result = parseFloat(result) / parseFloat(Bottm_field_value);
      }
    }

    //logic for equal event(click)

    equal_Button_Dom.addEventListener('click',function(e){
      if(!Top_field_value || !Bottm_field_value) return;
      IshaveDot=false;
      calc_Operataions();
      clearVar();
      Bottom_field_Dom.innerHTML =result;
      result_field_Dom.innerHTML ="";
      Bottm_field_value =result;
      Top_field_value ="";
    })

    //event(click) clearAll button
    cleaning_All_Button_Dom.addEventListener("click", (e) => {
      Top_field_value = "";
      Bottm_field_value = "";
      Top_field_Dom.innerText = "0";
      Bottom_field_Dom.innerText = "0";
      result = "";
      result_field_Dom.innerText = "0";
    });

    //event(click) cleanSymbol_icone_Dom
    cleanSymbol_icone_Dom.addEventListener("click", (e) => {
      Top_field_value = "";
      Bottm_field_value = "";
      Top_field_Dom.innerText = "0";
      Bottom_field_Dom.innerText = "0";
      result = "";
      result_field_Dom.innerText = "0";
    });

    //event(click) delete last entity
    delete_last_Button_Dom.addEventListener("click", () => {
      Bottom_field_Dom.innerText = "";
      Bottm_field_value = "";
    });









//the dark mode
let icon = document.getElementById("darkmode");

icon.onclick = function(){
  document.body.classList.toggle("dark-them");
};



// setting pop menu
settingId_Dom.addEventListener('click', function(event) {
  if (color_settings_Dom.style.visibility === 'visible') {
    color_settings_Dom.style.visibility = 'hidden';
  } else {
    color_settings_Dom.style.visibility = 'visible';
  }
});


// change the button color
color_input_Dom.addEventListener('click',function(){
  
  input_elements_Dom.forEach(function(input){
    input.style.background = color_input_Dom.value;
  })
})


// change the button font

input_color_font_Dom.addEventListener('click',function(){
  input_elements_Dom.forEach(function(input){
    input.style.color = input_color_font_Dom.value;
})
})


// change display color
input_display_color_Dom.addEventListener('click',function(){
  displaycolor_Dom.style.background =input_display_color_Dom.value;
})



