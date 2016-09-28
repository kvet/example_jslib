var Widget = require("./widget");

/**
 * Button module.
 * 
 * @exports button
 */
module.exports = function(){
    return {
        /**
         * @name Button
         * @constructs module:button
         * @extends module:widget~Widget
         * 
         * @param {HTMLElement} element Pass element there
         * @param {?module:button~IButtonOptions} [options=null] options Pass options or null there
         */
        ctor: function(element, options) {

        },

        _getDefaultOptions: function() {
            /**
             * Interface for Button options.
             *
             * @interface IButtonOptions
             * @extends module:widget~IWidgetOptions
             */
            return /** @lends module:button~IButtonOptions */ {

                /**
                 * Switches disabled state for widget
                 * 
                 * @type {?boolean}
                 * @default false
                 */
                disabled: false,

                /**
                 * Defines click callback
                 * 
                 * @type {?module:button~IButtonOnClickCallback}
                 * @default null
                 */
                onClick: null
                
                /**
                 * This callback is displayed as part of the Requester class.
                 * 
                 * @callback IButtonOnClickCallback
                 * @param {module:button~IButtonOnClickActionArguments} arguments - Action arguments.
                 */
            }
        },

        _getActionArgs: {

            /**
             * Interface for Button action arguments.
             *
             * @interface IButtonActionArguments
             * @extends module:widget~IWidgetActionArguments
             * @alias module:button.IButtonActionArguments
             */

            /**
             * Button instance
             * 
             * @name component
             * @memberOf module:button~IButtonActionArguments
             * @type {module:button~Button}
             */

        },

        _fireClick: function() {
            /**
             * Interface for Button onClick action arguments.
             *
             * @interface IButtonOnClickActionArguments
             * @extends module:button~IButtonActionArguments
             * @alias module:button~IButtonOnClickActionArguments
             */
            return /** @lends module:button~IButtonActionArguments */ {
                /**
                 * Event instance
                 * 
                 * @type {JQueryEvent}
                 */
                jQueryEvent: event
            };
        }
    }
};