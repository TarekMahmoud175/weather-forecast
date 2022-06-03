import DomainUrl from "../Domains";

export const ENDPOINTS = {
  localWeather: {
    url: (location, daysCount, showMap, date) =>
      `${DomainUrl}&q=${location}&num_of_days=${daysCount}&showmap=${showMap}&date=${date}`,
    method: "GET",
  },
};
