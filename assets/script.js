var initHandler = function() {
  var mode = document.querySelector(".mode");
  var notifyPlank = document.querySelector(".notify-plank");
  var rootEle = document.documentElement;

  function notifyClient(em) {
    notifyPlank.classList.add("notify-plank");
    var notify = document.createElement("span");
    notify.classList.add("notify", "animate");
    notify.innerHTML = `"Copied! <span class="beedii">${em}</span>`;
    notifyPlank.appendChild(notify);
  }

  var removeNotify = function() {
    var notify = document.querySelectorAll(".notify")[0];
    notifyPlank.removeChild(notify);
  };

  window.addEventListener("click", function(ev) {
    var ev = ev.target;
    if (ev.classList.contains("emoji")) {
      var selection = getSelection();
      selection.removeAllRanges();
      var range = document.createRange();
      range.selectNodeContents(ev);
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      if(notifyPlank){
        notifyClient(ev.textContent);
        setTimeout(removeNotify, 700);
      }
    }
  });  
  if(mode){
    mode.addEventListener("click", function(){
      if(!rootEle.classList.contains("dark")){
        rootEle.classList.add("dark");
        this.textContent = "😴";
      }
      else{
        rootEle.classList.remove("dark");
        this.textContent = "😁";
      }
    }); 
  }
};

document.addEventListener("DOMContentLoaded", initHandler);

