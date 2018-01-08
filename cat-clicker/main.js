let clickCount = 0;
function handleClick() {
  clickCount++;
  document.getElementById("clickcount").innerHTML = clickCount;
}
var catphoto = document.getElementById('catphoto');
catphoto.addEventListener('click', function(){
  handleClick();
}, false);