function openNav() {
  document.getElementById("popout").style.width = "225px";
}

function closeNav() {
  document.getElementById("popout").style.width = "0";
}
window.onload = function() {
  var reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      document.getElementById('cube').dispatchEvent(new MouseEvent('mouseover', { 'bubbles': true }));

  }
}

function reloadP() {
  sessionStorage.setItem("reloading", "true");
  document.location.reload();
}