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
         * @param {?module:widget~WidgetOptions} [options=null] Pass options or null there
         */
        ctor: function(element, options) {

        },

        /**
         * @memberof module:widget~Widget#
         * @method
         * @returns {HTMLElement} Widget instance
         */
        element: function() {

        },

        _getDefaultOptions: function() {
            /**
             * Interface for Widget options.
             *
             * @interface module:widget~WidgetOptions
             */
            
            return /** @lends module:widget~WidgetOptions */ {

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
             * @interface WidgetActionArguments
             */

            return /** @lends module:widget~WidgetActionArguments# */ {

                /**
                 * Widget instance
                 * 
                 * @type {module:widget~Widget}
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
 * @returns {module:widget~Widget} Widget instance
 */
Widget.getInstance = function(element) {};