/**
 * Widget module.
 * 
 * @module widget
 */

module.exports = Widget = function() {
    return {
        /**
         * @constructs module:widget
         * @name Widget
         * 
         * @param {HTMLElement} element Pass element there
         * @param {?module:widget~IWidgetOptions} [options=null] Pass options or null there
         */
        ctor: function(element, options) {

        },

        /**
         * @memberof module:widget~Widget#
         * @returns {HTMLElement} Widget instance
         */
        element: function() {

        },

        _getDefaultOptions: function() {
            /**
             * Interface for Widget options.
             *
             * @interface module:widget~IWidgetOptions
             */
            
            return /** @lends module:widget~IWidgetOptions */ {

                /**
                 * Switches visible state for widget
                 * 
                 * @type {?boolean}
                 */
                visible: true

            }
        },

        _getActionArgs: function() {
            /**
             * Interface for Widget action arguments.
             *
             * @interface IWidgetActionArguments
             */

            return /** @lends module:widgetIWidgetActionArguments */ {

                /**
                 * Widget instance
                 * 
                 * @type {module:widget}
                 */
                component: this,

                /**
                 * Widget instance element
                 * 
                 * @type {HTMLElement}
                 */
                element: this.element()

            }
        }
    }
};

/**
 * Gets the Widget instance
 * 
 * @name getInstance
 * @method
 * @memberof module:widget~Widget
 * @param {HTMLElement} element An element with instantiated widget on it
 * @returns {module:widget} Widget instance
 */
Widget.getInstance = function(element) {};