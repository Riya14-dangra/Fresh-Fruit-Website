let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('#header');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 20){
    document.querySelector('#scroll-top').classList.add('active');
    document.querySelector('#header').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();

var className = "inverted";
var scrollTrigger = 60;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(className);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(className);
  }
};
let fname = document.getElementById("fname");
let email = document.getElementById("email");
let val = true;
fname.addEventListener("blur", () => {
  let str = fname.value;
  let reg = /^([a-zA-Z]){0,10}$/;
  if (!reg.test(str)) {
    console.log("Validated");
    setError("ferror", "Invalid Name");
    val = false;
  } else {
    document.getElementById("ferror").innerHTML = "";
    document.getElementById("ferror").style.color = "red";
    val = true;
  }
});
email.addEventListener("blur", () => {
  let str = email.value;
  let reg =
    /^([a-zA-Z.]){0,20}([0-9]){0,20}@([a-zA-Z]){0,20}\.([a-zA-Z]){0,10}(\.in)?$/;
  if (!reg.test(str)) {
    console.log("Validated");
    setError("eerror", "Invalid Email");
    val = false;
  } else {
    document.getElementById("eerror").innerHTML = "";
    val = true;
  }
});
function setError(id, error) {
  ele = document.getElementById(id);
  ele.innerHTML = `<h1 style="color:'red'">${error}</h1>`;
}
let num = document.getElementById("number");
function validateForm() {
  if (num.value === "") {
    setError("nerror", "Enter Number");
    val = false;
  }
  return val;
}

