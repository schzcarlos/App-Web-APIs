import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Signo } from 'src/app/models/signo';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-pagec',
  templateUrl: './pagec.component.html',
  styleUrls: ['./pagec.component.css']
})
export class PagecComponent implements OnInit {

  signoZodiacal!:Signo;
  rutaImagen!:string;
  mostrar:boolean=false;
  constructor(private horoscopoService:HoroscopoService) {
    this.signoZodiacal=new Signo();
    this.rutaImagen="";
  }

  ngOnInit(): void {
  }

  getHoroscopo(signo:string){
    this.mostrar=true;
    this.rutaImagen="../../assets/img/"+signo+".png";
    this.horoscopoService.getHoroscopo(signo).subscribe(
      (result)=>{
        this.signoZodiacal.title=result.title;
        this.signoZodiacal.date=result.date;
        this.signoZodiacal.text=result.text;
      },
      error => {alert("Error en la peticion");}
    )
  }

}
