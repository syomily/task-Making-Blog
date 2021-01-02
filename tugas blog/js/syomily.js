const pageBody = document.querySelector("body");
function changeBg() {
  let color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
  pageBody.style.background = color;
}