function openNav() {
  document.getElementById("popout").style.width = "225px";
}

function closeNav() {
  document.getElementById("popout").style.width = "0";
}
function cube1() {
  document.getElementById('cube').dispatchEvent(new MouseEvent('mouseover', { '': true }));
}

window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      cube1();

  }
}

function reloadP() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}