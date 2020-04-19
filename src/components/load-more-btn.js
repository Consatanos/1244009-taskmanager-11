import AbstractComponent from './abstract-component';

/**
 * Create template load-more btn markup
 * @return {String} markup load-more btn
 */
const createLoadMoreBtnMarkup = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

export default class LoadMoreButton extends AbstractComponent {
  getTemplate() {
    return createLoadMoreBtnMarkup();
  }

  setClickHandler(handler) {
    this.getElement().addEventListener(`click`, handler);
  }
}
