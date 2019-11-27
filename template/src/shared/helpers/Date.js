import moment from 'moment';

export const getPassedTimeFromUTCDate = function(givenDate) {
  return moment(givenDate).fromNow();
}