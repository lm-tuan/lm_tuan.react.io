import axios from 'axios';

class Service {
  service: any;
  constructor() {
    let service: any = axios.create({
      headers: { csrf: 'token' },
    //   baseURL: window._env_ && window._env_.REACT_APP_API ? window._env_.REACT_APP_API : process.env.REACT_APP_API,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    this.service = service;
  }

  handleSuccess(response: any) {
    return response;
  }

  handleError = (error : any )=> {
    switch (error.response.status) {
      case 401:
        this.redirectTo(document, '/');
        break;
      case 404:
        // this.redirectTo(document, '/404');
        break;
      default:
        // this.redirectTo(document, '/500');
        break;
    }
    return Promise.reject(error);
  };

  redirectTo = (document: any, path: string) => {
    document.location = path;
  };

  get(path: string, callback: any) {
    return this.service.get(path).then((response: any) => callback(response.data));
  }

  post(path: string, payload: any, callback: any) {
    return this.service
      .request({
        method: 'POST',
        url: path,
        responseType: 'json',
        data: payload,
      })
      .then((response: any) => callback(response.status, response.data));
  }
}

export default new Service();
