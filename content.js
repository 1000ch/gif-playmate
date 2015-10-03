(function () {
  document.addEventListener('DOMNodeInserted', e => {
    'use strict';

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
  });
})();
