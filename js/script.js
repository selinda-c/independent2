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
    const food = document.querySelector("input[name='food']:checked").value;
    if (food === "sushi") {       
      python.removeAttribute("style") 
      cSharp.style.display = "none";
      javaScript.style.display = "none";
    } else if (food === "chocolate") {
      javaScript.removeAttribute("style")
      cSharp.style.display = "none";
      python.style.display = "none";
    } else {
      cSharp.removeAttribute("style")
      python.style.display = "none";
      javaScript.style.display = "none";
    };
    event.preventDefault();
  });
});