import AbstractComponent from './abstract-component';

/**
 * Create filter item markup
 * @param {Array} filter
 * @param {Number} isChecked
 * @return {String} markup filter item
 */
const createFilterMarkup = (filter, isChecked) => {
  const {
    name,
    count
  } = filter;
  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${name}" class="filter__label">
    ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

/**
 * Create filters markup
 * @param {Array} filters
 * @return {String} markup filters
 */
const createFiltersMarkup = (filters) => {
  const filtersMarkup = filters.map((item, i) => createFilterMarkup(item, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return createFiltersMarkup(this._filters);
  }
}
