import { Network } from "../Network";
import { ENDPOINTS } from "../EndPoints/EndPoints";

export class WeatherServices {
  /**
   *
   * @param {string} location
   * @param {integer} daysCount
   * @param {boolean} showMap
   * @param {string} date
   * @returns {promise} promise
   */
  static getLocalWeather(location, daysCount = 5, showMap = false, date = "") {
    return Network.fetch(
      ENDPOINTS.localWeather.url(location, daysCount, showMap, date),
      {
        method: ENDPOINTS.localWeather.method,
      }
    );
  }
  
}
