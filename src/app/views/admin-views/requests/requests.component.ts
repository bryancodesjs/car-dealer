import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss']
})
export class RequestsComponent implements OnInit {
  requests = [
    {name: 'Dany Castellanos',
    age: '45',
    requestno: '001',
    income: '137000',
    phone: '8090000000',
    email: 'dany@mail.com',
    car: 'BMW M3 Competition 2022',
    code: '003564',
    currency: 'us',
    price: '89000',
    downpayment: '12000',
    loanterm: '60'},

    {name: 'Laura Pinares',
    age: '23',
    requestno: '089',
    income: '46000',
    phone: '8090000000',
    email: 'laura@mail.com',
    car: 'Honda Fit EX 2015',
    code: '003567',
    currency: 'rd',
    price: '590000',
    downpayment: '3000',
    loanterm: '30'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
