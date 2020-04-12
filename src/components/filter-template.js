/**
 * Create template filter item
 * @param {array} filter
 * @param {number} isChecked
 * @return {string} html template filter item
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
 * Create template filters site
 * @param {array} filters
 * @return {string} html template filters
 */
const filterTemplate = (filters) => {
  const filtersMarkup = filters.map((item, i) => createFilterMarkup(item, i === 0)).join(`\n`);
  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

export {
  filterTemplate
};
