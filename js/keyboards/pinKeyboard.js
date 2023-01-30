function pinKeyboardRender() {
  if (document.querySelector(".pin_keyboard_items")) return;
  var pinItems = document.createElement("div");
  pinItems.className = "pin_keyboard_items";

  for (var i = 1; i < 11; i++) {
    var pinItem = document.createElement("div");
    pinItem.className = "pin_keyboard_item";
    pinItem.innerHTML = i;
    if (i == 10) pinItem.innerHTML = 0;
    pinItems.appendChild(pinItem);
    pinItem.onclick = function (e) {
      write(e)
    }
  }

  parrentBlock.appendChild(pinItems);

  setTimeout(() => {
    document.querySelector(".pin_keyboard_items").style.transform =
      "translateY(0)";
  }, 1);
}


function write (e) {
  var text = e.target.innerHTML
  document.querySelector(".active_input").innerHTML = text
  pinIndex++
  pin += text
  parentalCodeActive()
}