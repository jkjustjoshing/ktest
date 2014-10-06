'use strict';
/**
 * This file gets injected into the context of the loaded page. 
 * It adds methods that send messages back and forth to the
 * sandboxed extension code
 */
window.ktest = {

  isAngularDefined: function() {
    return !!window.angular;
  }

};