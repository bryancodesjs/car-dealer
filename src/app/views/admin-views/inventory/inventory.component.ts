import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  hayResultados = true;
  autos = [
    {brand: 'audi',
    model: 'e-tron',
    year: '2022',
    currency: 'us',
    price: '79000',
    downpayment: '18700',
    img: 'https://cdn.motor1.com/images/mgl/4J88k/s1/audi-e-tron-sportback-black-edition.jpg'},
    {brand: 'mercedes benz',
    model: 'GLE',
    year: '2019',
    price: '45000',
    downpayment: '12000',
    img: 'https://ag-spots-2018.o.auroraobjects.eu/2018/09/23/mercedes-amg-gle-63-s-coupe-c606223092018110513_1.jpg'},
    {brand: 'acura',
    model: 'ilx',
    year: '2020',
    price: '26900',
    downpayment: '4500',
    img: 'https://motoramaze.com/wp-content/uploads/2020/06/acura-ilx-2018-update-four-door.png'},
    {brand: 'honda',
    model: 'accord',
    year: '2022',
    price: '30000',
    downpayment: '4000',
    img: 'https://www.honda2022.com/wp-content/uploads/2021/04/2022-Honda-Accord-2.0T-Sport-Release-Date.jpg'},
    {brand: 'honda',
    model: 'cr-v',
    year: '2022',
    price: '42000',
    downpayment: '4200',
    img: 'https://www.tracyhonda.com/wp-content/uploads/vehicle-image-7FART6H96ME033360-02.jpg'},

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
