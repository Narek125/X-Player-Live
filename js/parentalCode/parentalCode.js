function parentalCodeRender() {
  var parentalCodeBlock = document.createElement("div");
  parentalCodeBlock.className = "parental_code_block";

  var logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "./images/logo.png";


  var parentalCodeBlockHead = document.createElement("div");
  parentalCodeBlockHead.className = "parental_code_block_head";
  parentalCodeBlockHead.innerText = "Enter Pin";

  parentalCodeBlock.appendChild(parentalCodeBlockHead);

  var parentalCodeInputs = document.createElement("div");
  parentalCodeInputs.className = "parental_code_inputs";

  for (var i = 0; i < 4; i++) {
    var input = document.createElement("div");
    input.className = "parental_code_input";
    parentalCodeInputs.appendChild(input);
  }

  parentalCodeBlock.appendChild(parentalCodeInputs);

  parrentBlock.innerHTML = "";

  parrentBlock.appendChild(logo);
  parrentBlock.appendChild(parentalCodeBlock);

  pinIndex = 0;

  pinKeyboardRender();
  parentalCodeActive()
}



function parentalCodeActive () {
  if(document.querySelector(".active_input")){
  document.querySelector(".active_input").classList.remove("active_input")
  }
  if (pinIndex == 4) {
    localStorage.setItem("pin", pin)
    pin = ""
    settingsRender()
    return 
  }
  document.querySelectorAll(".parental_code_input")[pinIndex].classList.add("active_input") 
  document.querySelectorAll(".parental_code_input")[pinIndex].innerHTML = "|"
}

