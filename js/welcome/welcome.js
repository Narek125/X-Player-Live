function welcomeRender(data) {
  var welcomeBlock = document.createElement("div");
  welcomeBlock.className = "welcome-block";

  var logo = document.createElement("img");
  logo.className = "logo";
  logo.src = data.logo;

  var contacts = document.createElement("div");
  contacts.className = "contacts";

  var contactsPhone = document.createElement("span");
  contactsPhone.className = "contacts_phone";
  contactsPhone.innerHTML = phoneSvg + data.phone;

  var contactsMail = document.createElement("span");
  contactsPhone.className = "contacts_mail";
  contactsMail.innerHTML = mailSvg + data.email;

  contacts.appendChild(contactsPhone);
  contacts.appendChild(contactsMail);

  welcomeBlock.appendChild(logo);
  welcomeBlock.appendChild(contacts);

  //  ////////////////////  //

  var tryDemoBlock = document.createElement("div");
  tryDemoBlock.className = "welcome_block try_demo_block";

  var welcome = document.createElement("h2");
  welcome.className = "try_demo_block_welcome";
  welcome.innerText = data.header_text;

  var macInfo = document.createElement("h3");
  macInfo.className = "try_demo_block_mac-info";
  macInfo.innerText = "MAC:";

  var macInfoSpan = document.createElement("span");
  macInfoSpan.innerText = "04:b9:e3:8f:9d:22";
  macInfo.appendChild(macInfoSpan);
  macInfo.appendChild;

  var playlistInfo = document.createElement("h6");
  playlistInfo.className = "try_demo_block_playlist-info";
  playlistInfo.innerHTML =
    "We do not provide any content! After <br />" +
    "uploading your content go to PLAYLIST, <br />" +
    "hit OK then BACK button!";

  var btn = document.createElement("button");
  btn.className = "try_demo_block_button";
  btn.onclick = function () {
    menuRender();
  };
  btn.innerHTML =
    'Try Demo For <span class="try_demo_duration">' +
    data.free_trial_duration +
    "</span> Days";

  tryDemoBlock.appendChild(welcome);
  tryDemoBlock.appendChild(macInfo);
  tryDemoBlock.appendChild(playlistInfo);
  tryDemoBlock.appendChild(btn);

  welcomeBlock.appendChild(tryDemoBlock);

  // /////////////////////  //

  var qrScanBlock = document.createElement("div");
  qrScanBlock.className = "welcome_block qr_scan_block";

  var or = document.createElement("h2");
  or.className = "or";
  or.innerText = "OR";

  var qrContainer = document.createElement("div");
  qrContainer.className = "qr_scan_block_container";

  var qrContainerName = document.createElement("h2");
  qrContainerName.className = "qr_scan_block_container_name";
  qrContainerName.innerHTML = "To Activate <br /> Scan QR Code";

  var qr = document.createElement("img");
  qr.className = "qr_scan_block_container_qr";
  qr.src = "./images/qr.png";

  qrContainer.appendChild(qrContainerName);
  qrContainer.appendChild(qr);

  qrScanBlock.appendChild(or);
  qrScanBlock.appendChild(qrContainer);

  welcomeBlock.appendChild(qrScanBlock);

  parrentBlock.appendChild(welcomeBlock);
}

function setFavicon(data) {
  // <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
  var link = document.createElement("link");
  link.rel = "icon";
  link.type = "image/x-icon";
  link.href = data.favicon;
  document.head.appendChild(link);
}
// welcomeRender();
