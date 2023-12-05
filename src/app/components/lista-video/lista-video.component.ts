import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-lista-video',
  templateUrl: './lista-video.component.html',
  styleUrls: ['./lista-video.component.css']
})
export class ListaVideoComponent implements OnInit {

  buscar!:string;
  listaDeVideos!:Array<Video>;
  constructor(private youtubeService:YoutubeService, private sanitizer:DomSanitizer,private router:Router) { 
    this.listaDeVideos=new Array<Video>();
  }

  ngOnInit(): void {
    if(this.listaDeVideos!=null){
      this.obtenerLista();
    }
  }

  buscarVideos(){
    this.youtubeService.cargarListaVideos(this.buscar);
    setTimeout(()=>{
      this.obtenerLista();
    },5000);
  }

  obtenerLista(){
    this.listaDeVideos=this.youtubeService.getListaVideos();
    console.log(this.listaDeVideos)
  }

  verVideo(video:Video){
    if(video!=null){
      this.router.navigate(["play", video.video_id]);
    }else{
      console.log("Error");
    }
  }

  // verVideo(id:string): SafeResourceUrl{ Es el original para reporducir videos
  //   if(id!=""){
  //     const url="https://www.youtube.com/embed/"+id;
  //     return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  //   }else{
  //     return "";
  //   }
  // }
}
