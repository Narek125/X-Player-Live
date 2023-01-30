window.onload = function () {
  init();
  get_translations(
    function (data) {
      words = data;

      localStorage.setItem("translations", JSON.stringify(data));

      // translate();
    },
    function (err) {
      // console.log(err);
    }
  );
};

try {
  function init() {
    get_info(function (data) {
      APP_INFO = data;
      localStorage.setItem("background_image", data.logo);
      setFavicon(data);
      document.body.style.background = "url(" + data.background_image + ")";
      welcomeRender(data);
      // document.getElementById("background").style.backgroundImage =
      //   "url(" + data.logo + ")";
      // document.getElementById("mac").innerHTML =
      //   "MAC : " + localStorage.getItem("mac");
      // document.getElementById("header_text").innerHTML = data.header_text;
      // document.getElementById("email").innerHTML = data.email;
      // document.getElementById("text").innerHTML = data.text;
      // document.getElementById("phone").innerHTML = data.phone;
      // document.getElementById("accept_text").innerHTML = data.accept_text;
    });
    // video_end();
    // generateQR();
  }

  function check_token() {
    console.log("check_token");
    validate(
      function () {
        setTimeout(function () {
          location.href = "menu.html";
        }, 3000);
      },
      function () {
        login();
      }
    );
  }

  function show_language_popup() {
    get_languages(
      function (data) {
        document.getElementById("language-settings").style.visibility =
          "visible";
        document.getElementById("language-settings").style.opacity = 1;

        language_block.innerHTML = "";

        for (var i = 0; i < data.length; i++) {
          if (data[i].is_default) {
            localStorage.setItem("language_id", data[i].id);
          }

          var item = render_language_item(data[i]);
          language_block.appendChild(item);
        }

        // language_move();
      },
      function () {
        localStorage.setItem("language_id", "1");
      }
    );
  }

  function hide_language_popup() {
    current_block = "";
    document.getElementById("language-settings").style.visibility = "hidden";
    document.getElementById("language-settings").style.opacity = 0;
    // video_end();
  }

  function login() {
    console.log("login function");
    request_login(
      { mac: localStorage.getItem("mac"), uid: "empty string", model: OS },

      function (token) {
        console.log("response function");
        localStorage.setItem("token", token);
        localStorage.setItem("state", "ready");

        setTimeout(function () {
          location.href = "menu.html";
        }, 3000);
      },

      function (data) {
        console.log("error function");
        free_trial_btn.style.display = "block";
        if (data.device && data.device.free_trial == 2) {
          free_trial_btn.onclick = function () {
            console.log("this-is used free trial");
            show_alert("You have already used your free trial");
          };
        } else {
          console.log("free_trial_request");
          free_trial_btn.onclick = free_trial_request;
        }

        hide_loading();

        document.getElementById("background").style.display = "block";

        localStorage.setItem("state", "ready");

        socket_init();

        var data = { mac: localStorage.getItem("mac") };

        check_accept(
          data,
          function (data) {
            //check_token();
          },
          function () {
            current_block = "accept_popup";
            accept_popup.style.display = "block";
            if (innerWidth < 1920) accept_popup.style.zoom = 0.7;
          }
        );
      }
    );
  }

  function video_end() {
    function next() {
      hide_loading();
      check_token();
    }

    if (!localStorage.getItem("language_id")) {
      detect_language(
        function (data) {
          if (data && data.id) {
            localStorage.setItem("language_id", data.id);
            localStorage.setItem("language_iso_code", data.iso_code);
            get_translation_words(function (data) {
              localStorage.setItem("translations", JSON.stringify(data));
              next();
            });
          } else {
            localStorage.setItem("language_id", "1");
          }

          next();
        },
        function () {
          localStorage.setItem("language_id", "1");
          next();
        }
      );
    } else {
      next();
    }
  }

  var hide_loading_timeout;

  function hide_loading() {
    clearTimeout(hide_loading_timeout);

    hide_loading_timeout = setTimeout(function () {
      document.getElementById("start_page_loading").classList.remove("show");

      setTimeout(function () {
        document.getElementById("start_page_loading").style.display = "none";
      }, 1000);
    }, 2000);
  }

  function generateQR() {
    if (!localStorage.getItem("mac")) return setTimeout(generateQR, 500);

    new QRious({
      element: document.getElementById("qr-code"),
      value: Web_host + "/#/payment?mac=" + localStorage.getItem("mac"),
      size: 150,
    });
  }

  function free_trial_request() {
    var data = { mac: localStorage.getItem("mac") };

    activate_free_trial(data, function (data) {
      localStorage.setItem("token", data);
      location.href = "menu.html";
    });
  }

  function render_language_item(data) {
    var selected =
      localStorage.getItem("language_id") == data.id ? "selected-language" : "";

    var item = document.createElement("div");
    item.className = "popup-item-block lng_el " + selected;
    item.setAttribute("language_id", data.id);

    item.onclick = function () {
      remove_active_class("selected-language");
      this.classList.add("selected-language");
      localStorage.setItem("language_id", this.getAttribute("language_id"));
      get_translation_words();
      hide_language_popup();
    };

    var check = document.createElement("div");
    check.className = "player-selected-img";

    var name = document.createElement("div");
    name.className = "popup-item-image-name";

    name.innerHTML = data.name;

    var img = document.createElement("img");
    img.src = data.icon;

    item.appendChild(check);
    item.appendChild(name);
    item.appendChild(img);

    return item;
  }

  accept_button.onclick = function () {
    var data = {
      mac: localStorage.getItem("mac"),
    };
    console.log(data, "click");
    accept(
      data,
      function () {
        console.log("accept");
        check_token();
        current_block = "";
        accept_popup.style.display = "none";
      },
      function (data) {
        console.log(data);
      }
    );
  };

  function show_loading() {
    document.getElementById("start_page_loading").style.display = "block";

    setTimeout(function () {
      document.getElementById("start_page_loading").classList.add("show");
    }, 1000);
  }

  show_loading();
} catch (e) {
  console.log(e.message);
}
