import {
  createElement
} from "../utils.js";

/**
 * Create content site markup
 * @return {string} markup content site
 */
const createContentSiteMarkup = () => {
  return (
    `<section class="board container">
    </section>`
  );
};

export default class Board {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createContentSiteMarkup();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
