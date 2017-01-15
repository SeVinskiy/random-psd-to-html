;(function() {
  "use strict";

  window.onload = function () {
    olyx();
  };

  function olyx() {
    document.
      querySelector(".headerNavigation").
        addEventListener("click", visibleBar);

    document.
      querySelector(".close-menu").
        addEventListener("click", disableBar);
  }

  function visibleBar() {
    document.querySelector(".menuLift").classList.add("visible");
  }

  function disableBar() {
    document.querySelector(".menuLift").classList.remove("visible");
  }

})();
