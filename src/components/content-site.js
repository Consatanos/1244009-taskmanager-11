import AbstractComponent from './abstract-component';

/**
 * Create content site markup
 * @return {String} markup content site
 */
const createContentSiteMarkup = () => {
  return (
    `<section class="board container">
    </section>`
  );
};

export default class Board extends AbstractComponent {
  getTemplate() {
    return createContentSiteMarkup();
  }
}
