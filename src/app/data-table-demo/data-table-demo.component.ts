import { Component, OnInit } from '@angular/core';
import {Car} from './car.modle';
import {CarService} from './car.service';


@Component({
  selector: 'app-data-table-demo',
  templateUrl: './data-table-demo.component.html',
  styleUrls: ['./data-table-demo.component.css'],
  providers: [CarService]
})
export class DataTableDemoComponent implements OnInit {
  loading: boolean;
  cars: Car[];
  cols: any[];
  constructor(private carService: CarService) { }

  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.carService.getCars().then(cars => this.cars = cars);
      this.loading = false;
    }, 1000);

    this.cols = [
      {field: 'vin', header: 'Vin'},
      {field: 'year', header: 'Year'},
      {field: 'brand', header: 'Brand'},
      {field: 'color', header: 'Color'}
    ];
  }

}
