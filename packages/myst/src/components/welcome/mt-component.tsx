import { h, Component, Prop } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'mt-component',
  styleUrl: './mt-component.scss',
  shadow: true,
})
export class MtComponent {
  // Own Properties
  // ====================

  // Reference to host HTML element
  // ===================================

  // State() variables
  // Inlined decorator, alphabetical order
  // =======================================

  // Public Property API
  // ========================

  /** The first name */
  @Prop() first: string;

  /** The middle name */
  @Prop() middle: string;

  /** The last name */
  @Prop() last: string;

  // Prop lifecycle events
  // =======================

  // Events section
  // Requires JSDocs for public API documentation
  // ==============================================

  // Component lifecycle events
  // Ordered by their natural call order
  // =====================================

  // Listeners
  // ==============

  // Public methods API
  // These methods are exposed on the host element.
  // Always use two lines.
  // Public Methods must be async.
  // Requires JSDocs for public API documentation.
  // ===============================================

  // Local methods
  // Internal business logic.
  // These methods cannot be called from the host element.
  // =======================================================

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  // render() function
  // Always the last one in the class.
  // ===================================

  render() {
    return (
      <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div class="flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12" viewBox="0 0 40 40">
            <defs>
              <linearGradient id="a" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#2397B3" />
                <stop offset="100%" stop-color="#13577E" />
              </linearGradient>
              <linearGradient id="b" x1="50%" x2="50%" y1="0%" y2="100%">
                <stop offset="0%" stop-color="#73DFF2" />
                <stop offset="100%" stop-color="#47B1EB" />
              </linearGradient>
            </defs>
            <g fill="none" fill-rule="evenodd">
              <path
                fill="url(#a)"
                d="M28.872 22.096c.084.622.128 1.258.128 1.904 0 7.732-6.268 14-14 14-2.176 0-4.236-.496-6.073-1.382l-6.022 2.007c-1.564.521-3.051-.966-2.53-2.53l2.007-6.022A13.944 13.944 0 011 24c0-7.331 5.635-13.346 12.81-13.95A9.967 9.967 0 0013 14c0 5.523 4.477 10 10 10a9.955 9.955 0 005.872-1.904z"
                transform="translate(1 1)"
              />
              <path
                fill="url(#b)"
                d="M35.618 20.073l2.007 6.022c.521 1.564-.966 3.051-2.53 2.53l-6.022-2.007A13.944 13.944 0 0123 28c-7.732 0-14-6.268-14-14S15.268 0 23 0s14 6.268 14 14c0 2.176-.496 4.236-1.382 6.073z"
                transform="translate(1 1)"
              />
              <path
                fill="#FFF"
                d="M18 17a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
              />
            </g>
          </svg>
        </div>
        <div>
          <h4 class="text-xl font-medium text-black mb-3 mt-0">Hello there!</h4>
          <p class="text-gray-500">I'm {this.getText()}</p>
        </div>
      </div>
    );
  }
}
