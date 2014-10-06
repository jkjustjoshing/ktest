'use strict';

console.log('\'Allo \'Allo! Devtools');

// This runs when the user goes to the panel in devtools
chrome.devtools.inspectedWindow.eval('console.log("is angular defined?", ktest.isAngularDefined())');