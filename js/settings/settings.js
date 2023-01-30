function settingsRender() {
  var settingsBlock = document.createElement("div");
  settingsBlock.className = "settings_block";

  var back = document.createElement("div");
  back.className = "back";

  var backBtn = document.createElement("button");
  backBtn.className = "back_btn";

  backBtn.innerHTML = backBtnSvg;
  backBtn.setAttribute("onclick", "menuRender()");

  back.appendChild(backBtn);
  back.innerHTML += words["settings"];
  settingsBlock.appendChild(back);

  var items = document.createElement("div");
  items.className = "settings_items";

  var xtream = document.createElement("div");
  xtream.className = "settings_item xtream";

  xtream.innerText = words["use xtream code epg"];


  var switcher = document.createElement("label");
  switcher.className = "switch";

  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  if (+localStorage.getItem("use_xtream_code_epg")) {
    checkBox.checked = true
  } else {
    checkBox.checked = false
  }

  checkBox.onchange = function () {
    localStorage.setItem("use_xtream_code_epg", this.checked ? "1" : "0");
  }

  var round = document.createElement("span");
  round.className = "slider round";

  switcher.appendChild(checkBox);
  switcher.appendChild(round);

  xtream.appendChild(switcher);
  xtream.onclick = function () {
    switcher.click()
  }

  var language = document.createElement("div");
  language.className = "settings_item language";
  language.innerHTML = words["change language"];
  language.onclick = function () {
    languagesRender();
  };

  var parentalCode = document.createElement("div");
  parentalCode.className = "settings_item parental_code";
  parentalCode.innerHTML = words["set parental code"];
  parentalCode.onclick = function () {
    parentalCodeRender();
  };

  var lock = document.createElement("div");
  lock.className = "settings_item lock_categories";
  lock.innerHTML = words["lock categories"];

  items.appendChild(xtream);
  items.appendChild(language);
  items.appendChild(parentalCode);
  items.appendChild(lock);

  settingsBlock.appendChild(items);

  parrentBlock.innerHTML = "";

  parrentBlock.appendChild(settingsBlock);
}
