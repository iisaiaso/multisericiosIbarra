import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  image = [
    {
      image: "https://llantasemotion.pe/pub/media/mageplaza/blog/post/l/l/llantas-y-neumaticos-llanta-runflat-en-lima-peru.jpg"
    },
    {
      image: "https://highbattery.com/wp-content/uploads/2020/03/Que-significan-los-numeros-de-las-llantas.jpg"
    },
    {
      image: "https://www.autofacil.es/wp-content/uploads/2021/05/llantas-2.jpg"
    }
  ]

}
