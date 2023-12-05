import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  urlVideo:string="hCceDLkcCEw";
  constructor(private sanitizer:DomSanitizer) {
    this.verVideo();
   }

  ngOnInit(): void {
  }

  verVideo(): SafeResourceUrl{
    if(this.urlVideo!=""){
      const url="https://www.youtube.com/embed/"+this.urlVideo;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }else{
      return "";
    }
  }
}
