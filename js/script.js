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

function myFunction() {
  var popup = document.getElementById("myPopup1");
  popup.classList.toggle("show");
}

function myFunction2() {
  var popup = document.getElementById("myPopup2");
  popup.classList.toggle("show");
}

function myFunction3() {
  var popup = document.getElementById("myPopup3");
  popup.classList.toggle("show");
}

function myFunction4() {
  var popup = document.getElementById("myPopup4");
  popup.classList.toggle("show");
}

function myFunction5() {
  var popup = document.getElementById("myPopup5");
  popup.classList.toggle("show");
}

function myFunction6() {
  var popup = document.getElementById("myPopup6");
  popup.classList.toggle("show");
}