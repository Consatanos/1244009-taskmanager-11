"use strict";

import {
  siteMenuTemplate
} from './components/site-menu-template';
import {
  filterTemplate
} from './components/filter-template';
import {
  siteContentTemplate
} from './components/site-content-template';
import {
  sortTemplate
} from './components/sort-template';
import {
  taskTemplate
} from './components/task-template';
import {
  taskEditTemplate
} from './components/task-edit-template';
import {
  loadMoreBtnTemplate
} from './components/load-more-btn-template';

import {
  generateFilters
} from './mock/filters';

import {
  generateTasks
} from './mock/task';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

/**
 * Render element to DOM
 * @param {*} container
 * @param {string} template
 * @param {string} place
 */
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const mainElement = document.querySelector(`.main`);
const headerElement = document.querySelector(`.main__control`);

const filters = generateFilters();
const tasks = generateTasks(TASK_COUNT);

render(headerElement, siteMenuTemplate(), `beforeEnd`);
render(mainElement, filterTemplate(filters), `beforeEnd`);
render(mainElement, siteContentTemplate(), `beforeEnd`);

const boardElement = document.querySelector(`.board`);
const taskListElement = document.querySelector(`.board__tasks`);

render(boardElement, sortTemplate(), `afterBegin`);
render(taskListElement, taskEditTemplate(tasks[0]), `beforeEnd`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

tasks.slice(1, showingTasksCount)
  .forEach((task) => render(taskListElement, taskTemplate(task), `beforeEnd`));

render(boardElement, loadMoreBtnTemplate(), `beforeEnd`);

const loadMoreButton = boardElement.querySelector(`.load-more`);

loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(taskListElement, taskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
