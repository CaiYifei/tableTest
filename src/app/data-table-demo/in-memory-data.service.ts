import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      {vin: 'dsad231ff', year: 2012, brand: 'VW', color: 'orange'},
      {vin: 'gwregre345', year: 2011, brand: 'Audi', color: 'black'},
      {vin: 'h354htr', year: 2005, brand: 'Renault', color: 'gray'},
      {vin: 'j6w54qgh', year: 2003, brand: 'BMW', color: 'blue'},
      {vin: 'hrtwy34', year: 1995, brand: 'Mercedes', color: 'orange'},
      {vin: 'jejtyj', year: 2005, brand: 'Volvo', color: 'black'},
      {vin: 'g43gr', year: 2012, brand: 'Honda', color: 'yellow'},
      {vin: 'greg34', year: 2013, brand: 'Jaguar', color: 'orange'},
      {vin: 'h54hw5', year: 2000, brand: 'Ford', color: 'black'},
      {vin: '245t2s', year: 2013, brand: 'Flat', color: 'red'}
    ];
    return {cars};
  }
}
