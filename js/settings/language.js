function languageRender(data, lgs) {
  for (var i = 0; i < data.length; i++) {
    var item = document.createElement("div");
    item.className = "language_item";

    var flag = document.createElement("img");
    flag.src = data[i].icon;

    item.appendChild(flag);
    item.innerHTML += data[i].name;
    lgs.appendChild(item);
  }
}

function languagesRender() {
  var languagesBlock = document.createElement("div");
  languagesBlock.className = "languages_block";

  var lgs = document.createElement("div");
  lgs.className = "language_items";

  var back = document.createElement("div");
  back.className = "back";

  var backBtn = document.createElement("button");
  backBtn.className = "back_btn";

  backBtn.innerHTML = backBtnSvg;
  backBtn.setAttribute("onclick", "settingsRender()");

  back.appendChild(backBtn);
  back.innerHTML += words["languages"];
  languagesBlock.appendChild(back);

  get_languages(function (data) {
    for (var i = 0; i < data.length; i++) {
      if (data[i].is_default) {
        localStorage.setItem("language_id", data[i].id);
      }
    }
    languageRender(data, lgs);
  });

  languagesBlock.appendChild(lgs);

  parrentBlock.innerHTML = "";

  parrentBlock.appendChild(languagesBlock);
}
