function get_info(cb, err) {
  send_request("get", Api_host + "/app_info", {}, cb, err);
}

function get_languages(cb, err) {
  send_request("get", Api_host + "/languages", {}, cb, err);
}

function get_translations(cb, err) {
  var id = localStorage.getItem("language_id");
  send_request("get", Api_host + "/translations?id=" + id, {}, cb, err);
}

//  ///////////////////////  //

function send_request(method, url, data, success, err, is_form_data) {
  if (!window.navigator.onLine) return show_alert("Network disconnected");

  if (device_blocked) return;

  try {
    var req = new XMLHttpRequest();

    if (
      url.indexOf("parse_playlist") == -1 ||
      url.indexOf("get_playlist_data") == -1
    ) {
      req.timeout = 60000;
    }

    req.onreadystatechange = function () {
      if (device_blocked) return;

      if (this.readyState == 4) {
        if (this.status == 200) {
          var data = JSON.parse(this.responseText);

          if (url.indexOf("get_simple_data_table") == -1) {
            if (data.error) {
              if (data.code == 402) {
                device_blocked = true;
                show_blocked_popup();
              } else {
                if (err) err(data.message);
              }
            } else {
              success(data.message);
            }
          } else {
            success(data);
          }
        } else {
          if (err) {
            err("network error");
          } else {
            show_alert("network error", function () {
              location.reload();
            });
          }
        }
      }
    };

    req.onerror = function () {
      if (err) {
        err("network error");
      } else {
        show_alert("network error", function () {
          location.reload();
        });
      }
    };

    req.ontimeout = function () {
      if (err) {
        err("network error");
      } else {
        show_alert("network error", function () {
          location.reload();
        });
      }
    };

    req.open(method.toUpperCase(), url);

    if (url.indexOf("get_simple_data_table") == -1) {
      if (!is_form_data) {
        req.setRequestHeader("content-type", "application/json");
      }

      localStorage.getItem("token") &&
        req.setRequestHeader("Authorization", localStorage.getItem("token"));
    }

    if (is_form_data) {
      req.send(data);
    } else {
      if (method == "get") {
        req.send();
      } else {
        req.send(JSON.stringify(data));
      }
    }
  } catch (e) {
    // console.log(e.message);
  }
}
