function hideResults(){
  let cSharp = document.getElementById("cSharp")
  let javaScript = document.getElementById("javaScript")
  let python = document.getElementById("python")
  cSharp.style.display = "none";
  javaScript.style.display = "none";
  python.style.display = "none";
}
window.addEventListener("load", function(){
  hideResults();
  let form = document.querySelector("form")
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const color = document.getElementById("select#color").value;
  })
});