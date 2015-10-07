(function () {

  'use strict';

  function debounce(func, wait) {

    let timeout;
    let args;
    let context;
    let timestamp;
    let result;

    const later = function() {

      let last = Date.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) {
          context = args = null;
        }
      }
    };

    return function() {

      context = this;
      args = arguments;
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }

      return result;
    };
  }

  document.addEventListener('DOMNodeInserted', debounce(e => {

    let elements = document.getElementsByClassName('rg_di');

    for (let i = 0, l = elements.length; i < l; i++) {

      // proceed or not
      let element = elements[i];
      if (element.animated) {
        continue;
      }
      element.animated = true;

      let anchor = element.querySelector('a');
      let image = element.querySelector('img');
      if (!anchor || !image) {
        continue;
      }

      let matches = anchor.href.match(/imgurl=(\S+\.gif)/i);
      if (matches !== null && matches.length > 1) {
        image.src = matches[1];
      }
    }
  }), 100);
})();
