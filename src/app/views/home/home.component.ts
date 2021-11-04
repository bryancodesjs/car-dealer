import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  marcas = true;
  tipos = false;
  combustible = false;

  mostrar(filt: string) {
    this.marcas = false;
    this.tipos = false;
    this.combustible = false;
    switch(filt) {
      case 'marcas':
        this.marcas = true;
        //console.log('marcas');
        break;
      case 'tipos':
        this.tipos = true;
        //console.log('tipos');
        break;
      case 'combustible':
        this.combustible = true;
        break;
      default:
        this.marcas = true;
        break;
    }
  }
  combustibles = [
    {name: 'electrico',
    cantidad: '215'},
    {name: 'gasolina',
    cantidad: '946'},
    {name: 'diesel',
    cantidad: '415'},
    {name: 'gas / GLP',
    cantidad: '378'},
    {name: 'gas natural',
    cantidad: '99'}
  ]
  autos = [
    {brand: 'audi',
    model: 'e-tron',
    year: '2022',
    currency: 'us',
    price: '79000',
    downpayment: '18700',
    new: 'nuevo',
    img: 'https://cdn.motor1.com/images/mgl/4J88k/s1/audi-e-tron-sportback-black-edition.jpg'},
    {brand: 'mercedes benz',
    model: 'GLE',
    year: '2019',
    price: '45000',
    downpayment: '12000',
    new: 'nuevo',
    img: 'https://ag-spots-2018.o.auroraobjects.eu/2018/09/23/mercedes-amg-gle-63-s-coupe-c606223092018110513_1.jpg'},
    {brand: 'acura',
    model: 'ilx',
    year: '2020',
    price: '26900',
    downpayment: '4500',
    new: 'usado',
    img: 'https://motoramaze.com/wp-content/uploads/2020/06/acura-ilx-2018-update-four-door.png'},
    {brand: 'honda',
    model: 'accord',
    year: '2022',
    price: '30000',
    downpayment: '4000',
    new: 'usado',
    img: 'https://www.honda2022.com/wp-content/uploads/2021/04/2022-Honda-Accord-2.0T-Sport-Release-Date.jpg'},
    {brand: 'honda',
    model: 'cr-v',
    year: '2022',
    price: '42000',
    downpayment: '4200',
    new: 'seminuevo',
    img: 'https://www.tracyhonda.com/wp-content/uploads/vehicle-image-7FART6H96ME033360-02.jpg'},

  ]
  marcasAutos = [
    {marca: 'acura'},
    {marca: 'alfa romeo'},
    {marca: 'alpina'},
    {marca: 'aston martin'},
    {marca: 'audi'},
    {marca: 'baic'},
    {marca: 'bentley'},
    {marca: 'bmw'},
    {marca: 'brilliance'},
    {marca: 'bristol'},
    {marca: 'bugatti'},
    {marca: 'buick'},
    {marca: 'byd'},
    {marca: 'cadillac'},
    {marca: 'changan'},
    {marca: 'chevrolet'},
    {marca: 'chrysler'},
    {marca: 'citroen'},
    {marca: 'daewoo'},
    {marca: 'daihatsu'},
    {marca: 'datsun'},
    {marca: 'dayun'},
    {marca: 'dodge'},
    {marca: 'dongfeng'},
    {marca: 'ferrari'},
    {marca: 'fiat'},
    {marca: 'ford'},
    {marca: 'foton'},
    {marca: 'freightliner'},
    {marca: 'gac'},
    {marca: 'geely'},
    {marca: 'gmc'},
    {marca: 'genesis'},
    {marca: 'hennessey'},
    {marca: 'hino'},
    {marca: 'honda'},
    {marca: 'hummer'},
    {marca: 'hyundai'},
    {marca: 'infinity'},
    {marca: 'iveco'},
    {marca: 'jac'},
    {marca: 'jaguar'},
    {marca: 'jawa'},
    {marca: 'jeep'},
    {marca: 'jmc'},
    {marca: 'kia'},
    {marca: 'koenigsegg'},
    {marca: 'ktm'},
    {marca: 'lamborguini'},
    {marca: 'land rover'},
    {marca: 'lexus'},
    {marca: 'lincoln'},
    {marca: 'lotus'},
    {marca: 'luxgen'},
    {marca: 'mahindra'},
    {marca: 'man'},
    {marca: 'maserati'},
    {marca: 'mazda'},
    {marca: 'mclaren'},
    {marca: 'mercedes bez'},
    {marca: 'mercury'},
    {marca: 'mg'},
    {marca: 'mini'},
    {marca: 'mitsubishi'},
    {marca: 'nikola'},
    {marca: 'nissan'},
    {marca: 'pagani'},
    {marca: 'peugeot'},
    {marca: 'plymouth'},
    {marca: 'polestar'},
    {marca: 'pontiac'},
    {marca: 'porsche'},
    {marca: 'renault'},
    {marca: 'rezvani'},
    {marca: 'rivian'},
    {marca: 'roewe'},
    {marca: 'roewe'},
    {marca: 'rolls royce'},
    {marca: 'scania'},
    {marca: 'scion'},
    {marca: 'seat'},
    {marca: 'skoda'},
    {marca: 'smart'},
    {marca: 'ssang yong'},
    {marca: 'sterling'},
    {marca: 'subaru'},
    {marca: 'suzuki'},
    {marca: 'tesla'},
    {marca: 'toyota'},
    {marca: 'triumph'},
    {marca: 'vauxhall'},
    {marca: 'volkswagen'},
    {marca: 'volvo'},
    {marca: 'yutong'}
  ]
  categoriasAutos = [
    {type: 'compacto',
    cantidad: '410'},
    {type: 'coupe',
    cantidad: '279'},
    {type: 'deportivo',
    cantidad: '103'},
    {type: 'convertible',
    cantidad: '31'},
    {type: 'station wagon',
    cantidad: '24'},
    {type: 'SUV / jeepetas',
    cantidad: '624'},
    {type: 'minivan',
    cantidad: '49'},
    {type: 'camioneta',
    cantidad: '517'},
    {type: 'autobus',
    cantidad: '10'},
    {type: 'camion',
    cantidad: '59'},
    {type: 'maquinaria pesada',
    cantidad: '12'},
    {type: 'motocicletas',
    cantidad: '137'},
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
