import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string='alfredo';
  genero:string='masculino';
  
  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino':'invitarla'
  }

  //i18nPlural
  clientes:string[]=['Maria','jose','jesus','rocio','diana','juan']

  clientesMapa={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando'
  }

  cambiarCliente(){
    this.nombre = 'Diana';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyvalue pipe
  persona = {
    nombre:'alfredo',
    edad:25,
    direccion:'Ottawa, Canada'
  }

  //json pipe
  heroes=[
    {
      nombre:'superman',
      vuela: true
    },
    {
      nombre:'Robin',
      vuela: false
    },
    {
      nombre:'Acuaman',
      vuela: false
    }
  ]

  //async pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve('Data de promesa conseguida')
    }, 3500);
  });
}
