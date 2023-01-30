function playlistsRender() {
  var playlistsBlock = document.createElement("div");
  playlistsBlock.className = "playlists_block";

  var back = document.createElement("div");
  back.className = "back";

  var backBtn = document.createElement("button");
  backBtn.className = "back_btn";

  backBtn.innerHTML = backBtnSvg;
  backBtn.setAttribute("onclick", "menuRender()");

  back.appendChild(backBtn);
  back.innerHTML += words["playlist"];
  playlistsBlock.appendChild(back);

  var playlistItems = document.createElement("div");
  playlistItems.className = "playlist_items";

  for (var i = 1; i <= 4; i++) {
    playlistItems.appendChild(playlistAdd(i));
  }

  var addBtn = document.createElement("div");
  addBtn.className = "playlist_item playlist_add";
  addBtn.innerHTML = playlistAddBtnSvg;
  addBtn.onclick = function () {
    playlistFormRender();
  };

  playlistItems.appendChild(addBtn);
  playlistsBlock.appendChild(playlistItems);

  parrentBlock.innerHTML = "";

  parrentBlock.appendChild(playlistsBlock);
}

function playlistAdd(i) {
  var item = document.createElement("div");
  item.className = "playlist_item";

  var span1 = document.createElement("span");
  span1.className = "playlist_item_counter";
  span1.innerHTML = "Playlist " + i;

  var span2 = document.createElement("span");
  span2.className = "playlist_item_link";
  span2.innerHTML = "https://app.clickup.com/t/5711523/DEV_-4268";

  var deleteSvg = document.createElement("div")
  deleteSvg.className = "trash_svg"

  deleteSvg.onmouseenter = function () {

    deleteSvg.classList.add("active_trash")
  }

  item.appendChild(span1);
  item.appendChild(span2);
  item.appendChild(deleteSvg);
  item.onmouseenter = function () {
    if(document.querySelector(".active_trash")) {
      document.querySelector(".active_trash").classList.remove("active_trash")
    }
    if(document.querySelector(".active_playlist")) {
      document.querySelector(".active_playlist").classList.remove("active_playlist")
    }
    item.classList.add("active_playlist")
  }
  // item.onmouseleave = function () {
  //   item.classList.remove("active_playlist")
  // }

  return item;
}
