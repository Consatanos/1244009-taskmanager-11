"use strict";

import ContentComponent from './components/content-site';
import ContentController from './controllers/board';
import MenuComponent from './components/site-menu';
import FiltersComponent from './components/filters';
import {
  generateTasks
} from './mock/task';
import {
  generateFilters
} from './mock/filters';
import {
  render,
  RenderPosition
} from './utils/render';

const TASK_COUNT = 22;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

render(siteHeaderElement, new MenuComponent(), RenderPosition.BEFOREEND);
render(siteMainElement, new FiltersComponent(filters), RenderPosition.BEFOREEND);

const contentComponent = new ContentComponent();
const contentController = new ContentController(contentComponent);

render(siteMainElement, contentComponent, RenderPosition.BEFOREEND);
contentController.render(tasks);
