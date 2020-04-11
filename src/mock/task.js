import {
  COLORS
} from "../const.js";

/**
 * Array description values
 */
const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

/**
 * Array default repeating days
 */
const DefaultRepeatingDays = {
  "mo": false,
  "tu": false,
  "we": false,
  "th": false,
  "fr": false,
  "sa": false,
  "su": false,
};

/**
 * Generate random array item
 * @param {array} array
 * @return {array}
 */
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

/**
 * Generate random number
 * @param {number} min
 * @param {numver} max
 * @return {number} random number
 */
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

/**
 * Generate random dates
 * @return {array} array of dates
 */
const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * getRandomIntegerNumber(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

/**
 * Generate random repeating days
 * @return {array} array of repeating days
 */
const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    "mo": Math.random() > 0.5,
  });
};

/**
 * Generate task
 * @return {object}
 */
const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    color: getRandomArrayItem(COLORS),
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

/**
 * Genearate tasks array
 * @param {number} count
 * @return {array}
 */
const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {
  generateTask,
  generateTasks
};
