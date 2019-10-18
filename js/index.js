function pushitems(numitem) {
  let items = `<li class = "item" id ="${numitem}">Item ${numitem}</li>`
  return items;
}
let colors = ['#E7CFCD','#CFC0BD','#CAB6CD','#BA8F95'];
let stack = [];
let numitem = 0;
let swapreern = 1;

function push() {
  numitem++;
  stack.push(numitem);
  let liitem = document.createElement("div");
  liitem.innerHTML = pushitems(numitem);
  let list = document.getElementById("card");
  list.insertBefore(liitem, list.childNodes[0]);
  let item = document.getElementById(stack.length);
  liitem.style.background = colors[Number];
  item.style.right = 200 + "px";
 pushtostack();
}
function pushtostack() {
  let item = document.getElementById(stack.length);
  let pos = 200;
  let id = setInterval(frame, 1);
  function frame() {
      if (pos == 0) {
          clearInterval(id);
      } else {
          pos--;
          item.style.right = pos + "px";
      }
  }
  return 0;
}

function deletefromstack() {
  popfromstack();
  let item = document.getElementById(stack.length);
  let index = stack.length;
  item.parentNode.removeChild(item);
  stack.pop(stack.length)
  numitem--;
  return index;
}

function pop() {
  for (let index = 1; index <= stack.length; index++) {
      var elem = document.getElementById(index);
      elem.parentNode.removeChild(elem);
  }
  stack = [];
  numitem = 0;
}

function popfromstack() {
  var elem = document.getElementById(stack.length);
  var pos = 0;
  var id = setInterval(frame, 20);

  function frame() {

      if (pos == 400) {
          deletefromstack()
          clearInterval(id);
          return 0;
      } else {
          pos++;
          elem.style.bottom = pos + "px";
      }
  }
  return 0;
}
function swap() {
  let itemone = document.getElementById(stack.length).innerHTML
  let itemtwo = document.getElementById(stack.length - 1).innerHTML
  document.getElementById(stack.length - 1).innerHTML = itemone;
  document.getElementById(stack.length).innerHTML = itemtwo;
}
function isempty() {
  if (stack.length == 0) {
      return 1;
  } else
      return 0
}
function sizeofstack() {
  return stack.length;
}

function isEmpty() {
  if (isempty())
      alert("The stack is empty !!!!");
  else alert("The stack is not empty");
}

function size() {
  alert(`The size of stack is ${stack.length}`);
}

function peek() {
  alert(`The top of stack is ${document.getElementById(stack.length).innerText}`);
}
