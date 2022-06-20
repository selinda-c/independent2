function hideResults(){
  let cSharp = document.getElementById("cSharp");
  let javaScript = document.getElementById("javaScript");
  let python = document.getElementById("python");
  let reset = document.getElementById("reset");
  reset.style.display= "none";
  cSharp.style.display = "none";
  javaScript.style.display = "none";
  python.style.display = "none";
}
window.addEventListener("load", function(){
  hideResults();
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    const food = document.querySelector("input[name='food']:checked").value;
    const age = document.querySelector("input#age").value;
    if (food === "sushi" && age < 20) {       
      python.removeAttribute("style");
      cSharp.style.display = "none";
      javaScript.style.display = "none";
    } else if (age >= 20 || food === "chocolate") {
      javaScript.removeAttribute("style");
      cSharp.style.display = "none";
      python.style.display = "none";
    } else {
      cSharp.removeAttribute("style");
      python.style.display = "none";
      javaScript.style.display = "none";
    };
    event.preventDefault();
    reset.removeAttribute("style");
    let questions = document.getElementById("questions")
    questions.style.display = "none"
  });
  let color = document.getElementById("color");
  let food = document.getElementsByName("food");
  let age = document.getElementById("age");
  let pets = document.getElementById("pets");
  let hobby = document.getElementById("hobby");
  resetBtn.addEventListener("click", function(){
    reset.style.display= "none";
    cSharp.style.display = "none";
    javaScript.style.display = "none";
    python.style.display = "none";
    color.value = null;
    food.value = null;
    age.value = null;
    pets.value = null;
    hobby.value = null;
    questions.removeAttribute("style");
  });
});
