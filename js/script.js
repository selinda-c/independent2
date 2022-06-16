function hideResults(){
  document.getElementById("cSharp").style.display = "none";
  document.getElementById("javaScript").style.display = "none";
  document.getElementById("python").style.display = "none";
}
window.onload = function(){
  hideResults();
  document.querySelector("form").onsubmit = function(event) {
    hideResults();
    event.preventDefault();
  };
};