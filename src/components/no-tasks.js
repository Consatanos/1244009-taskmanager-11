import {
  createElement
} from "../utils.js";

/**
 * Create empty task list markup
 * @return {string} markup empty task list
 */
const createNoTasksMarkup = () => {
  return (
    `<p class="board__no-tasks">
      Click «ADD NEW TASK» in menu to create your first task
    </p>`
  );
};


export default class NoTasks {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createNoTasksMarkup();
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
