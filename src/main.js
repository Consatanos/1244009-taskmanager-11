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

const TASK_COUNT = 3;

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

render(headerElement, siteMenuTemplate(), `beforeEnd`);
render(mainElement, filterTemplate(), `beforeEnd`);
render(mainElement, siteContentTemplate(), `beforeEnd`);

const boardElement = document.querySelector(`.board`);
const taskListElement = document.querySelector(`.board__tasks`);

render(boardElement, sortTemplate(), `afterBegin`);
render(taskListElement, taskEditTemplate(), `beforeEnd`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, taskTemplate(), `beforeEnd`);
}

render(boardElement, loadMoreBtnTemplate(), `beforeEnd`);
