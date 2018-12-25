const UNITS = ['K', 'M', 'B', 'T'];

// https://stackoverflow.com/a/28608086/2328833
export function getShortNumberString(number) {
  const shouldShowDecimalPlace = UNITS.some((element, index) => {
    const lowerBound = Math.pow(1000, index + 1);
    const upperBound = lowerBound + lowerBound * 10;
    return  number > lowerBound && number < upperBound
  });
  const digits = shouldShowDecimalPlace ? 1 : 0;
  for (let i = UNITS.length - 1; i >= 0; i--) {
    const decimal = Math.pow(1000, i + 1);

    if (number >= decimal) {
      return (number / decimal).toFixed(digits) + UNITS[i];
    }
  }
  return number.toString();
}