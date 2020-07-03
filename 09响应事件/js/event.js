// 添加事件处理器
function addEventHanlder(element, eventType, handlerFunction) {
  if (element.addEventListener) {
    element.addEventListener(eventType, handlerFunction, false);
  } else if (element.attachEvent) {
    element.attachEvent("on" + eventType, handlerFunction);
  }
}
// 去除事件处理器
function removeEventHandler(element, eventType, handlerFunction) {
  if (element.removeEventListener) {
    element.removeEventListener(eventType, handlerFunction, false);
  } else if (element.detachEvent) {
    element.detachEvent("on" + eventType, handlerFunction);
  }
}

function appendText(e) {
  if (!e) var e = window.event;
  var element = e.target ? e.target : e.srcElement;
  //   将当前元素的id，添加进div中
  document.getElementById("box1").innerHTML += element.id + "<br/>";
}
function removeOnclickA() {
  removeEventHandler(document.getElementById("buttonA", "click", appendText));
}
function removeOnclickB() {
  removeEventHandler(document.getElementById("buttonB", "click", appendText));
}
function reset() {
  addEventHanlder(document.getElementById("buttonB"), "click", appendText);
  addEventHanlder(document.getElementById("buttonA"), "click", appendText);
}

window.onload = function () {
  addEventHanlder(document.getElementById("button-a"), "click", removeOnclickA);
  addEventHanlder(document.getElementById("button-b"), "click", removeOnclickB);
  addEventHanlder(document.getElementById("reset"), "click", reset);
};
