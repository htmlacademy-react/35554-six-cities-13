import * as dayjs from 'dayjs';

const DateFormat = {
  DATE_SHORT: 'MMMM YYYY',
  DATE_FULL: 'YYYY-MM-DD',
};

const getRefineDate = (date: string) => date && dayjs(date).format(DateFormat.DATE_SHORT);
const getRefineFullDate = (date: string) => date && dayjs(date).format(DateFormat.DATE_FULL);

const getRating = (rating: number) => Math.floor(rating) * 20;

export {getRefineDate, getRefineFullDate, getRating};
