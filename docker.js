function lw1() {
  var xhr = new XMLHttpRequest();
  var y = document.getElementById("cmd").value;
  xhr.open("GET", "http://192.168.43.229/cgi-bin/docker.py?cmd=" + y, true);
  xhr.send();
  xhr.onload = function () {
    var output = xhr.responseText;
    document.getElementById("inneroutput1").innerHTML = output;
  };
}

function lw2() {}

function lw3() {}

function lw4() {}
