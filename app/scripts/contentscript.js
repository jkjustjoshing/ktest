'use strict';

/**
 * Builds a script tag with the given JS code and injects it into a page.
 *
 * This allows us to run JS that isn't strictly allowed in Chrome extension,
 * such as .trigger()ing things like click and change, or accessing global vars.
 *
 * @param {string} jsString
 */
var injectFile = function(file) {
  var s = document.createElement('script');
  s.src = file;
  s.onload = function () {
      this.parentNode.removeChild(this);
  };
  document.head.appendChild(s);
};

console.log('Injecting script');  
injectFile(chrome.extension.getURL('scripts/inspect.js'));
