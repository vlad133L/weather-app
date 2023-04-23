/* eslint-disable import/no-extraneous-dependencies */
import { differenceInMinutes } from 'date-fns';

export default function getTimeDifference(weatherUpdatedDate) {
  return differenceInMinutes(new Date(), new Date(weatherUpdatedDate));
}
