import { differenceInMinutes } from 'date-fns';

export default function getTimeDifference(weatherUpdatedDate) {
  console.log(
    `${differenceInMinutes(
      new Date(),
      new Date(weatherUpdatedDate)
    )} minutes passed`
  );
  return differenceInMinutes(new Date(), new Date(weatherUpdatedDate));
}
