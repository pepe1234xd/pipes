import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower = 'alfredo';
  nombreUpper = 'ALFREDO';
  nombreCompleto='jOSe aLfREdo';

  fecha:Date = new Date();
}
