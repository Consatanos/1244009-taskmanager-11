import AbstractComponent from './abstract-component';

/**
 * Create tasks container markup
 * @return {String} markup tasks container
 */
const createTasksMarkup = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};


export default class Tasks extends AbstractComponent {
  getTemplate() {
    return createTasksMarkup();
  }
}
