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
            return /** @lends module:button~IButtonOptions# */ {

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
                 * @param {module:button~IButtonOnClickActionArguments} args - Action arguments.
                 */
            }
        },

        _fireClick: function() {
            /**
             * Interface for Button onClick action arguments.
             *
             * @interface IButtonOnClickActionArguments
             * @extends module:widget~IWidgetActionArguments
             * @alias module:button~IButtonOnClickActionArguments
             */
            return /** @lends module:button~IButtonOnClickActionArguments# */ {
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