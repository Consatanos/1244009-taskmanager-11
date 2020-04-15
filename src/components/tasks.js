import {
  createElement
} from "../utils.js";

/**
 * Create tasks container markup
 * @return {string} markup tasks container
 */
const createTasksMarkup = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};


export default class Tasks {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTasksMarkup();
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
