function playlistFormRender() {
  var playlistBlock = document.createElement("div");
  playlistBlock.className = "playlist_form";

  var logo = document.createElement("img");
  logo.className = "logo";
  logo.src = "./images/logo.png";

  var playlistForm = document.createElement("div");
  playlistForm.className = "playlist_form";

  var addBlock = document.createElement("div");
  addBlock.className = "playlist_add_block";

  var addBlockHead = document.createElement("h2");
  addBlockHead.className = "playlist_add_block_head";
  addBlockHead.innerText = words["playlist"];

  var playlistName = document.createElement("div");
  playlistName.className = "playlist_name";

  var playlistNameSpan = document.createElement("span");
  playlistNameSpan.innerText = words["name"];

  var playlistNameInput = document.createElement("input");
  playlistNameInput.type = "text";

  playlistName.appendChild(playlistNameSpan);
  playlistName.appendChild(playlistNameInput);

  var playlistUrl = document.createElement("div");
  playlistUrl.className = "playlist_url";

  var playlistUrlSpan = document.createElement("span");
  playlistUrlSpan.innerText = words["url"];

  var playlistUrlInput = document.createElement("input");
  playlistUrlInput.type = "text";

  playlistUrl.appendChild(playlistUrlSpan);
  playlistUrl.appendChild(playlistUrlInput);

  var btns = document.createElement("div");
  btns.className = "playlist_buttons";

  var cancelBtn = document.createElement("button");
  cancelBtn.className = "playlist_cancel";
  cancelBtn.innerText = words["cancel"];
  cancelBtn.onclick = function () {
    playlistsRender();
  };

  var submitBtn = document.createElement("button");
  submitBtn.className = "playlist_submit";
  submitBtn.innerText = words["ok"];

  btns.appendChild(cancelBtn);
  btns.appendChild(submitBtn);

  var website = document.createElement("div");
  website.className = "playlist_add_from_website";
  website.innerText = words["to add playlist from our website visit"] + ": ";

  var websiteUrl = document.createElement("a");
  websiteUrl.className = "playlist_add_website";
  websiteUrl.href = "https://www.foxytv.com";
  websiteUrl.innerText = "https://www.foxytv.com";

  website.appendChild(websiteUrl);

  addBlock.appendChild(addBlockHead);
  addBlock.appendChild(playlistName);
  addBlock.appendChild(playlistUrl);
  addBlock.appendChild(btns);
  addBlock.appendChild(website);

  var qrBlock = document.createElement("div");
  qrBlock.className = "playlist_qr_block";

  var qrBlockHead = document.createElement("h2");
  qrBlockHead.className = "playlist_qr_block_head";
  qrBlockHead.innerText = words["or scan"];

  var qr = document.createElement("img");
  qr.className = "playlist_qr_block_qr";
  qr.src = "./images/playlistQr.png";

  var qrBlockFooter = document.createElement("h3");
  qrBlockFooter.className = "playlist_qr_block_footer";
  qrBlockFooter.innerText = "the QR code";

  qrBlock.appendChild(qrBlockHead);
  qrBlock.appendChild(qr);
  qrBlock.appendChild(qrBlockFooter);

  // playlistBlock.appendChild(logo);
  playlistBlock.appendChild(addBlock);
  playlistBlock.appendChild(qrBlock);

  parrentBlock.innerHTML = "";

  parrentBlock.appendChild(logo);
  parrentBlock.appendChild(playlistBlock);
}
