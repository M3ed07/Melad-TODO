// Create a new task .
function newElement(){
  let li = document.createElement("li");
  let myValue = document.getElementsByTagName('input')[0].value;
  let v = document.createTextNode(myValue);
  li.appendChild(v);
  myValue === '' ? alert('Please enter task todo...'):document.getElementsByTagName('ul')[0].appendChild(li);
  document.getElementById('myInput').value = "";
// Delete Tasks
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
  let close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      let div = this.parentElement.remove();
    }}}
// task completed , checked it .
let check = document.querySelector('ul');
check = document.addEventListener('click',(e)=>{
  if(e.target.tagName === 'LI'){
    e.target.classList.toggle('checked')
  }});