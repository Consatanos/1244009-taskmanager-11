import {
  createElement
} from "../utils.js";

/**
 * Create filter item markup
 * @param {array} filter
 * @param {number} isChecked
 * @return {string} markup filter item
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
 * @param {array} filters
 * @return {string} markup filters
 */
const createFiltersMarkup = (filters) => {
  const filtersMarkup = filters.map((item, i) => createFilterMarkup(item, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

export default class Filter {
  constructor(filters) {
    this._filters = filters;
    this._element = null;
  }

  getTemplate() {
    return createFiltersMarkup(this._filters);
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
