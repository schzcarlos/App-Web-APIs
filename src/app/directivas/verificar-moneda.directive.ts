import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS} from '@angular/forms';

function verificarMoneda(c:AbstractControl){
  if (c.value == null) return null;
  
  if((c.value>=1) == false){
  
  return {valorCorrecto: true}
  }

  return null;
}
@Directive({
  selector: '[verificar-Moneda]',
  providers:[
  {provide: NG_VALIDATORS, multi: true, useValue:verificarMoneda}
  ]
})
export class VerificarMonedaDirective {

  constructor() { }

}
