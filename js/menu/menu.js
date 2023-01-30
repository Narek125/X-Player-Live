function menuRender() {
  var menuBlock = document.createElement("div");
  menuBlock.className = "menu_block";

  var logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "./images/logo.png";

  var menuItems = document.createElement("div");
  menuItems.className = "menu_items";

  var liveTv = document.createElement("div");
  liveTv.className = "menu_item live_tv";
  liveTv.setAttribute("index", 0);
  liveTv.style.backgroundImage = "url('../images/live_tv_disactive.png')";

  var liveTvName = document.createElement("h5");
  liveTvName.innerHTML = words["live tv"];
  liveTvName.className = "menu_live_tv_name";
  liveTv.appendChild(liveTvName);

  var menuItemsS = document.createElement("div");
  menuItemsS.className = "menu_items_s";

  var playlist = document.createElement("div");
  playlist.className = "menu_item playlist";
  playlist.setAttribute("index", 1);
  playlist.style.backgroundImage = "url('../images/playlist_disactive.png')";
  playlist.setAttribute("onclick", "playlistsRender()");

  var playlistName = document.createElement("h5");
  playlistName.innerHTML = words["playlist"];
  playlistName.className = "menu_playlist_name";
  playlist.appendChild(playlistName);

  var settings = document.createElement("div");
  settings.className = "menu_item settings";
  settings.setAttribute("index", 2);
  settings.style.backgroundImage = "url('../images/settings_disactive.png')";
  settings.onclick = function () {
    settingsRender();
  };

  var settingsName = document.createElement("h5");
  settingsName.innerHTML = words["settings"];
  settingsName.className = "menu_settings_name";
  settings.appendChild(settingsName);

  menuItemsS.appendChild(playlist);
  menuItemsS.appendChild(settings);

  menuItems.appendChild(liveTv);
  menuItems.appendChild(menuItemsS);

  menuBlock.appendChild(logo);
  menuBlock.appendChild(menuItems);

  parrentBlock.innerHTML = "";

  parrentBlock.appendChild(menuBlock);

  // EVENTS //

  document
    .querySelector(".live_tv")
    .addEventListener("mouseover", function (e) {
      e.target.style.backgroundImage = "url('../images/live_tv_active.png')";
    });

  document.querySelector(".live_tv").addEventListener("mouseout", function (e) {
    e.target.style.backgroundImage = "url('../images/live_tv_disactive.png')";
  });

  document
    .querySelector(".playlist")
    .addEventListener("mouseover", function (e) {
      e.target.style.backgroundImage = "url('../images/playlist_active.png')";
    });

  document
    .querySelector(".playlist")
    .addEventListener("mouseout", function (e) {
      e.target.style.backgroundImage =
        "url('../images/playlist_disactive.png')";
    });
  document
    .querySelector(".settings")
    .addEventListener("mouseover", function (e) {
      e.target.style.backgroundImage = "url('../images/settings_active.png')";
    });

  document
    .querySelector(".settings")
    .addEventListener("mouseout", function (e) {
      e.target.style.backgroundImage =
        "url('../images/settings_disactive.png')";
    });
}

// menuRender();
