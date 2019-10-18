function pushitems(numitem) {
  let items = `<li class = "elmnt" id ="${numitem}">Item ${numitem}</li>`
  return items;
}
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
  item.style.right = 500 + "px";
  Movepush();
}
function Movepush() {
  let item = document.getElementById(stack.length);
  let pos = 500;
  let id = setInterval(frame, 1);
  function frame() {
      if (pos == 0) {
          clearInterval(id);
          return 0;
      } else {
          pos--;
          item.style.right = pos + "px";
      }
  }
  return 0;
}