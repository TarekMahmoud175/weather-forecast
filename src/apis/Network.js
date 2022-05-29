export class Network {

  static async fetch(url, init, addAuth) {

    const response = await fetch(url, {
      mode: "cors",
      ...init,
      headers: Network.getHeaders(init.headers, addAuth),
    });

    let promise;

    if (response.status !== 200 && response.status !== 201) {
      let promise = response.json().then((data) => {
        return Promise.reject(data);
      });
      return promise.catch((error) => {
        return Promise.reject(error);
      });
    } else {
      promise = response.json();
    }

    return promise;
  }


  static getHeaders(originalHeaders) {
    let headers = {};

    headers = {
      ...headers,
      ...originalHeaders,
      "content-type": "application/json",
      Accept: "application/json",
    };

    return headers;
  }
}
