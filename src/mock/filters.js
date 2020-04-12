/**
 * Array filter names
 */
const filterNames = [`all`, `overdue`, `today`, `favorites`, `repeating`, `archive`];

/**
 * Generate filters array
 * @return {array} array of filters
 */
const generateFilters = () => {
  return filterNames.map((item) => {
    return {
      name: item,
      count: Math.floor(Math.random() * 10)
    };
  });
};

export {
  generateFilters
};
