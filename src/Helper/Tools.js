import { Constant, Colors } from '../CommonConfig';
import moment from 'moment';

/**
 * Return a trimmed string by removing extra spaces
 * @param {String} text - message to be trimmed
 */
const trimString = text => {
  if (typeof text == 'string') {
    return text.replace(/\s+/g, ' ').trim();
  }
  return text;
};

const getHitSlop = (hitSlop = 5) => {
  return {
    top: hitSlop,
    bottom: hitSlop,
    right: hitSlop,
    left: hitSlop,
  };
};

/**
 * Format the given time into 00:00
 * @param {Number} seconds - value to test
 */
const formatTime = secs => {
  let minutes = Math.floor(secs / 60);
  let seconds = Math.ceil(secs - minutes * 60);

  if (seconds < 10) seconds = `0${seconds}`;

  return `${minutes}:${seconds}`;
};

/**
 * Return formatted timestamp string for event
 * @param {String} startTimestamp
 * @param {String} endTimestamp
 */
const getEventTimestamp = (startTimestamp, endTimestamp) => {
  let date = '';
  if (startTimestamp) {
    // const day = moment(startTimestamp).calendar(null, {
    //     sameDay: '[Today]',
    //     nextDay: '[Tomorrow]',
    //     lastDay: '[Yesterday]',
    //     sameElse: 'ddd',
    // });
    date += moment(startTimestamp).format('DD MMM YYYY').toUpperCase();
  }
  if (endTimestamp) {
    date += ' - ' + moment(endTimestamp).format('DD MMM YYYY').toUpperCase();
  }

  return date;
};

/**
 * Return formatted timestamp string for event time
 * @param {String} startTimestamp
 * @param {String} endTimestamp
 */
const getEventTime = (startTimestamp, endTimestamp) => {
  let date = '';
  if (startTimestamp) {
    // const day = moment(startTimestamp).calendar(null, {
    //     sameDay: '[Today]',
    //     nextDay: '[Tomorrow]',
    //     lastDay: '[Yesterday]',
    //     sameElse: 'ddd',
    // });
    date += moment(startTimestamp).format('hh:mm a').toUpperCase();
  }
  if (endTimestamp) {
    date += ' - ' + moment(endTimestamp).format('hh:mm a').toUpperCase();
  }

  return date;
};

/**
 * Return formatted string for long numbers
 * @param {Number} n - Long number
 */
const formatLongNumbers = n => {
  if (n < 1e3) return String(n).length > 1 ? n : n.pad(2);
  if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'K';
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'M';
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + 'B';
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + 'T';
};

/**
 * Return formatted amount value with $ sign
 * @param {String} n - amount value
 */
const formatPrice = amount => {
  return '$ '.concat(amount.toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
};

const fromNow = date => {
  var now = moment().format('DD/MM/YYYY HH:mm:ss');
  var then = moment(date).format('DD/MM/YYYY HH:mm:ss');

  var ms = moment.utc(
    moment(now, 'DD/MM/YYYY HH:mm:ss').diff(
      moment(then, 'DD/MM/YYYY HH:mm:ss'),
    ),
  );
  var d = moment.duration(ms);
  if (d?._data?.days > 7 || d?._data?.months >= 1 || d?._data?.years >= 1) {
    return moment(date).format('DD MMMM YYYY');
  } else if (d?._data?.days >= 1 && d?._data?.days <= 7) {
    return d?._data?.days + 'd ';
  } else if (d?._data?.hours >= 1 && d?._data?.hours <= 23) {
    return d?._data?.hours + 'h ';
  } else if (d?._data?.minutes > 1 && d?._data?.minutes <= 59) {
    return d?._data?.minutes + 'm ';
  } else if (d?._data?.seconds >= 1 && d?._data?.seconds <= 59) {
    return d?._data?.seconds + 's ';
  } else {
    return moment(date).format('DD MMMM YYYY');
  }
};

const fromatPrayerRequestTime = date => {
  var now = moment().format('DD/MM/YYYY HH:mm:ss');
  var then = moment(date).format('DD/MM/YYYY HH:mm:ss');

  var ms = moment.utc(
    moment(now, 'DD/MM/YYYY HH:mm:ss').diff(
      moment(then, 'DD/MM/YYYY HH:mm:ss'),
    ),
  );
  var d = moment.duration(ms);
  if (d?._data?.days > 7 || d?._data?.months >= 1 || d?._data?.years >= 1) {
    return moment(date).format('DD MMMM YYYY');
  } else if (d?._data?.days >= 1 && d?._data?.days <= 7) {
    return d?._data?.days + ' day ago';
  } else if (d?._data?.hours >= 1 && d?._data?.hours <= 23) {
    return d?._data?.hours + ' hour ago ';
  } else if (d?._data?.minutes >= 1 && d?._data?.minutes <= 59) {
    return d?._data?.minutes + ' minute ago ';
  } else if (d?._data?.seconds >= 1 && d?._data?.seconds <= 59) {
    return d?._data?.seconds + ' second ago ';
  } else {
    return moment(date).format('DD MMMM YYYY');
  }
};

const isUrlValid = url => {
  var res = url.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  );
  if (res == null) return false;
  else return true;
};

const formatNotifBadge = count => {
  if (count > 99) {
    return `99+`;
  }
  return count;
};
const getRandomColor = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += ('0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)).slice(-2);
  return color;
}


export default {
  trimString,
  getHitSlop,
  formatTime,
  getEventTimestamp,
  formatLongNumbers,
  formatPrice,
  fromNow,
  getEventTime,
  getRandomColor,
  fromatPrayerRequestTime
};
