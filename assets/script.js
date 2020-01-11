var initHandler = function() {
  var notifyPlank = document.querySelector(".notify-plank");

  function notifyClient(em) {
    notifyPlank.classList.add("notify-plank");
    var notify = document.createElement("span");
    notify.classList.add("notify", "animate");
    var notifyText = document.createTextNode("Copied! "+ em);
    notify.appendChild(notifyText);
    notifyPlank.appendChild(notify);
  }

  var removeNotify = function() {
    var notify = document.querySelectorAll(".notify")[0];
    notifyPlank.removeChild(notify);
  };

  window.addEventListener("click", function(ev) {
    var ev = ev.target;
    if (ev.classList.contains("emoji")) {
      function dynamicNode() {
        var node = document.createElement("pre");
        node.style.position = "fixed";
        node.style.fontSize = "0px";
        node.textContent = ev.textContent;
        return node;
      }

      var node = dynamicNode();
      document.body.appendChild(node);
      var selection = getSelection();
      selection.removeAllRanges();
      var range = document.createRange();
      range.selectNodeContents(node);
      selection.addRange(range);
      document.execCommand("copy");
      selection.removeAllRanges();
      document.body.removeChild(node);
      notifyClient(ev.textContent);
      setTimeout(removeNotify, 700);
    }
  });
};

document.addEventListener("DOMContentLoaded", initHandler);
