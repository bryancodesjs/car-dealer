import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  mostrarFinanciamiento = false;

  collection = [
    'https://i.blogs.es/29438e/ford-mustang-shelby-gt500-mexico_/1366_2000.jpg',
    'https://i.blogs.es/dbea83/ford-mustang-shelby-gt500-mexico_12/1366_2000.jpg',
    'https://i.blogs.es/d62ae0/ford-mustang-shelby-gt500-mexico_3/1366_2000.jpg',
    'https://i.blogs.es/dc07ef/ford-mustang-shelby-gt500-mexico_6/1366_2000.jpg',
    'https://i.blogs.es/26f647/ford-mustang-shelby-gt500-mexico_7/1366_2000.jpg',
    'https://i.blogs.es/0f6129/ford-mustang-shelby-gt500-mexico_22/1366_2000.jpg',
    'https://i.blogs.es/d30a56/ford-mustang-shelby-gt500-prueba/1366_2000.jpg',
    'https://i.blogs.es/01a984/ford-mustang-shelby-gt500-mexico_27/1366_2000.jpg'
  ]
  infoForm = false;

  constructor() { }

  ngOnInit(): void {
  }
  toggleInfoForm() {
    if(this.infoForm) {
      this.infoForm = false;
    } else {
      this.infoForm = true;
    }
  }
  toggleModalFinanciamiento() {
    if(this.mostrarFinanciamiento) {
      this.mostrarFinanciamiento = false;
    } else {
      this.mostrarFinanciamiento = true;
    }
  }
}
