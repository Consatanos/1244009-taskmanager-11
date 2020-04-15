"use strict";

import ContentComponent from './components/content-site';
import MenuComponent from './components/site-menu';
import FiltersComponent from './components/filters';
import LoadMoreButtonComponent from './components/load-more-btn';
import SortComponent from './components/sort';
import TasksComponent from './components/tasks';
import TaskComponent from './components/task';
import TaskEditComponent from './components/task-edit';
import NoTasksComponent from './components/no-tasks';

import {
  generateTasks
} from './mock/task';
import {
  generateFilters
} from './mock/filters';
import {
  render,
  RenderPosition
} from './utils';

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (taskListElement, task) => {
  const replaceTaskToEdit = () => {
    taskListElement.replaceChild(taskEditComponent.getElement(), taskComponent.getElement());
  };

  const replaceEditToTask = () => {
    taskListElement.replaceChild(taskComponent.getElement(), taskEditComponent.getElement());
  };

  const onEscKeyDown = (event) => {
    const isEscKey = event.key === `Escape` || event.key === `Esc`;

    if (isEscKey) {
      replaceEditToTask();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  const taskComponent = new TaskComponent(task);
  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, () => {
    replaceTaskToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  const taskEditComponent = new TaskEditComponent(task);
  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToTask();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  render(taskListElement, taskComponent.getElement(), RenderPosition.BEFOREEND);
};

const renderContent = (contentComponent, tasks) => {
  const isAllTasksArchived = tasks.every((task) => task.isArchive);

  if (isAllTasksArchived) {
    render(contentComponent.getElement(), new NoTasksComponent().getElement(), RenderPosition.BEFOREEND);
    return;
  }

  render(contentComponent.getElement(), new SortComponent().getElement(), RenderPosition.BEFOREEND);
  render(contentComponent.getElement(), new TasksComponent().getElement(), RenderPosition.BEFOREEND);

  const taskListElement = contentComponent.getElement().querySelector(`.board__tasks`);

  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
  tasks.slice(0, showingTasksCount)
    .forEach((task) => {
      renderTask(taskListElement, task);
    });

  const loadMoreButtonComponent = new LoadMoreButtonComponent();
  render(contentComponent.getElement(), loadMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTasksCount)
      .forEach((task) => renderTask(taskListElement, task));

    if (showingTasksCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

const tasks = generateTasks(TASK_COUNT);
const filters = generateFilters();

render(siteHeaderElement, new MenuComponent().getElement(), RenderPosition.BEFOREEND);
render(siteMainElement, new FiltersComponent(filters).getElement(), RenderPosition.BEFOREEND);

const contentComponent = new ContentComponent();
render(siteMainElement, contentComponent.getElement(), RenderPosition.BEFOREEND);
renderContent(contentComponent, tasks);
