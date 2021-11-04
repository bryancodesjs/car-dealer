import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {

  fotos = [
    {foto: 'https://www.bmwusa.com/content/dam/bmwusa/M/M3/myu22/gallery/BMW-MY22-M3-Gallery-Exterior-07.jpg'},
    {foto: 'https://www.bmwusa.com/content/dam/bmwusa/M/M3/myu22/gallery/BMW-MY22-M3-Gallery-Exterior-01.jpg'},
    {foto: 'https://www.bmwusa.com/content/dam/bmwusa/M/M3/myu22/gallery/BMW-MY22-M3-Gallery-Exterior-09.jpg'},
    {foto: 'https://www.bmwusa.com/content/dam/bmwusa/M/M3/myu22/gallery/BMW-MY22-M3-Gallery-Interior-12.jpg'},
    {foto: 'https://www.bmwusa.com/content/dam/bmwusa/M/M3/myu22/gallery/BMW-MY22-M3-Gallery-Interior-15.jpg'},
  ]
  colores = [
    {color: 'blanco'},
    {color: 'blanco perla'},
    {color: 'negro'},
    {color: 'gris'},
    {color: 'rojo'},
    {color: 'azul'},
    {color: 'verde'},
    {color: 'beige'},
    {color: 'marron'},
    {color: 'dorado'},
    {color: 'rosa'},
    {color: 'naranja'}
  ]
  years = [
    {year: '2022'},
    {year: '2021'},
    {year: '2020'},
    {year: '2019'},
    {year: '2018'},
    {year: '2017'},
    {year: '2016'},
    {year: '2015'},
    {year: '2014'},
    {year: '2013'},
    {year: '2012'},
    {year: '2011'},
    {year: '2010'},
    {year: '2009'},
    {year: '2008'},
    {year: '2007'},
    {year: '2006'},
    {year: '2005'},
    {year: '2004'},
    {year: '2003'},
    {year: '2002'},
    {year: '2001'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
