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
         * @param {?module:button~ButtonOptions} [options=null] options Pass options or null there
         */
        ctor: function(element, options) {

        },

        _getDefaultOptions: function() {
            /**
             * Interface for Button options.
             * 
             * @interface ButtonOptions
             * @extends module:widget~WidgetOptions
             */
            return /** @lends module:button~ButtonOptions# */ {

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
                 * @type {?module:button~ButtonOnClickCallback}
                 * @default null
                 */
                onClick: null
                
                /**
                 * This callback is displayed as part of the Requester class.
                 * 
                 * @callback ButtonOnClickCallback
                 * @param {module:button~ButtonOnClickActionArguments} args - Action arguments.
                 */
            }
        },

        _fireClick: function() {
            /**
             * Interface for Button onClick action arguments.
             *
             * @interface ButtonOnClickActionArguments
             * @extends module:widget~WidgetActionArguments
             * @alias module:button~ButtonOnClickActionArguments
             */
            return /** @lends module:button~ButtonOnClickActionArguments# */ {
                /**
                 * Event instance
                 * 
                 * @type {?Event}
                 */
                jQueryEvent: event
            };
        }
    }
};