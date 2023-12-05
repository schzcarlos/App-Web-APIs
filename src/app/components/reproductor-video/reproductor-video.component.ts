import { Component, OnInit } from '@angular/core';
import { DomSanitizer , SafeResourceUrl} from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/models/video';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-reproductor-video',
  templateUrl: './reproductor-video.component.html',
  styleUrls: ['./reproductor-video.component.css']
})
export class ReproductorVideoComponent implements OnInit {

  video!:Video;
  constructor(private youtubeService:YoutubeService,private sanitizer:DomSanitizer,  private activatedRoute:ActivatedRoute, private router:Router) { 
  
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if(params['id'] !== ''){
        console.log("Se reproducira el video")
        console.log(params['id'])
        this.reproducirVideo(params['id']);
      }else{
       console.log("No pudo reproducir el video, porque no hay id del video")
      }
    });
  }

  public reproducirVideo(video_id:string){
    this.video=new Video();
    console.log("El siguiente es el id del vide")
    console.log(video_id)
    console.log("El resultado de la busqueda sin almacenar en una variable video")
    console.log(this.youtubeService.getVideo(video_id))
    this.video=this.youtubeService.getVideo(video_id);
    console.log(this.video);
  }
  verVideo(): SafeResourceUrl{ 
    if(this.video.video_id!=""){
      const url="https://www.youtube.com/embed/"+this.video.video_id;
      return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }else{
      return "";
    }
  }
  volverAMenu(){
    this.router.navigate(["listaVideo"]);
  }
}
