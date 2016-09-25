/**
 * Lib  namspace
 * 
 * @namespace Lib
 */
var Lib = window.Lib = {};

/**
 * UI namspace
 * 
 * @memberof Lib
 * @namespace Lib.ui
 */
Lib.ui = {};

/**
 * Widget class reexport
 * 
 * @memberof Lib
 * @type {module:widget~Widget}
 */
Lib.Widget = require('./widget');

/**
 * dxButton class reexport
 * 
 * @memberof Lib.ui
 * @type {module:button~Button}
 */
Lib.ui.dxButton = require('./button');
