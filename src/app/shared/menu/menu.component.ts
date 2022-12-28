import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items:MenuItem[]=[];

  ngOnInit():void {
    this.items = [
      {
        label:'pipes de Angular',
        icon: 'pi pi-desktop',
        items:[
          {
            label: 'Textos y Fechas',
            icon:'pi pi-align-left',
            routerLink:'/'
          },
          {
            label: 'Numeros',
            icon:'pi pi-dollar',
            routerLink:'numeros'
          }
          ,
          {
            label: 'No Comunes',
            icon:'pi pi-globe',
            routerLink:'no-comunes'
          }
        ]
      },
      {
        label:'Pipes Perzonalizados',
        icon:'pi pi-cog',
        routerLink:'ordenar'
      }
  ];
  }
  
  
}
