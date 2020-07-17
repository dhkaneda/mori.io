const avgLifeExpectancyInUS = {
  name: 'United States',
  average: 79,
  male: 76,
  female: 81,
};

const determineDeathDayInMilliseconds = (sex, age) => {
  return new Date(new Date().getTime()
  + 24 * 60 * 60 * 1000 * 365 * (avgLifeExpectancyInUS[sex] - age));
};

export default determineDeathDayInMilliseconds;
