import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Car} from './car.modle';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarService {
  private carsUrl = 'api/cars';
  constructor(private http: Http) {}

  getCars(): Promise<Car[]> {
    return this.http.get(this.carsUrl)
      .toPromise()
      .then(response => {
        return response.json().data as Car[];
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
