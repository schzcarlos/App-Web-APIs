import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Moneda } from 'src/app/models/moneda';
import { ConcurrenciesService } from 'src/app/services/concurrencies.service';
import { ConvertServiceService } from 'src/app/services/convert-service.service';

@Component({
  selector: 'app-pageb',
  templateUrl: './pageb.component.html',
  styleUrls: ['./pageb.component.css']
})
export class PagebComponent implements OnInit {

  usd: string="../../assets/img/USD.png";
  eur: string="../../assets/img/EUR.png";
  gbp: string="../../assets/img/GBP.png";
  jpy: string="../../assets/img/JPY.png";
  ars: string="../../assets/img/argentina.png";
  rub: string="../../assets/img/RUB.png";

  origen!:string;
  destino!:string;
  valor!:string;
  resultado!:string;
  simbolosDeMonedas!:Array<Moneda>;
  moneda!:Moneda;

  constructor(private convertService:ConvertServiceService, private currencie:ConcurrenciesService) { 
    this.simbolosDeMonedas= new Array<Moneda>();
  }

  ngOnInit(): void {
    this.cargarMonedas();
  }
  
  convertirMoneda(){
    this.convertService.postConvert(this.valor,this.origen,this.destino).subscribe(
      (result)=>{
        this.resultado=result.result;
        console.log(this.resultado);
      },
      error => {alert("Error al convertir moneda")}
    )
  }

  cargarMonedas(){
    this.currencie.getCurrencies().subscribe(
      (result)=>{

        result.forEach((element:any) => {
          this.moneda=new Moneda();
          this.moneda.name=element.name;
          this.moneda.symbol=element.symbol;
          this.simbolosDeMonedas.push(this.moneda);
        });
        console.log(this.simbolosDeMonedas);
      }, 
      error => {alert("Error en la peticion"); }
    )
  }

}
