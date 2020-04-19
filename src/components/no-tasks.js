import AbstractComponent from './abstract-component';

/**
 * Create empty task list markup
 * @return {String} markup empty task list
 */
const createNoTasksMarkup = () => {
  return (
    `<p class="board__no-tasks">
      Click «ADD NEW TASK» in menu to create your first task
    </p>`
  );
};


export default class NoTasks extends AbstractComponent {
  getTemplate() {
    return createNoTasksMarkup();
  }
}
