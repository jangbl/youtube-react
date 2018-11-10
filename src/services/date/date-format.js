const objMap = ['years', 'months','days', 'hours', 'minutes', 'seconds'];
const numbers = '\\d+(?:[\\.,]\\d{0,3})?';
const datePattern = `(${numbers}Y)?(${numbers}M)?(${numbers}D)?`;
const timePattern = `T(${numbers}H)?(${numbers}M)?(${numbers}S)?`;
const pattern = new RegExp(`P(?:${datePattern}(?:${timePattern})?)`);

export function parseISO8601TimePattern(durationString) {
  // https://github.com/tolu/ISO8601-duration/blob/master/src/index.js
  return durationString.match(pattern).slice(1).reduce((prev, next, idx) => {
    prev[objMap[idx]] = parseFloat(next) || 0;
    return prev
  }, {});
}

export function getPublishedAtDateString(iso8601DateString) {
  if (!iso8601DateString) {
    return '';
  }
  const date = new Date(Date.parse(iso8601DateString));
  return date.toDateString();
}

export function getVideoDurationString(iso8601DurationString) {
  if (!iso8601DurationString || iso8601DurationString === '') {
    return '';
  }

  // new Date(Date.parse(...)) doesn't work here
  // therefore we are using our regex approach
  let {days, hours, minutes, seconds} = parseISO8601TimePattern(iso8601DurationString);

  let secondsString = seconds.toString();
  let minutesString = minutes.toString();
  let accumulatedHours = days * 24 + hours;

  if (seconds < 10) {
    secondsString = seconds.toString().padStart(2, '0');
  }
  if (minutes < 10 && hours !== 0) {
    minutesString = minutesString.toString().padStart(2, '0');
  }
  if (!accumulatedHours) {
    return [minutesString, secondsString].join(':');
  } else {
    return [accumulatedHours, minutesString, secondsString].join(':');
  }
}




