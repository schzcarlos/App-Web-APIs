import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  /**
   * Si tira error intente cambiar la key por esta, ya que la API tenia un limite
   * b72a296faamshb6f5211cc4518cfp14ee78jsnc4dcec3ef97f
   */
  listVideo!:Array<Video>;
  video!:Video;
  constructor(private _http: HttpClient) {
    
   }

  /**
   * Este metodo obtendra toda la busqueda que el usuario realize
   * 
   */
  public getVideos(buscar:string):Observable<any>{
    // petición por get a esa url de un api rest
    const httpOptions = {
    params: {
      query: buscar,
      number: '5',
      country: 'us',
      lang: 'en'
    },
    headers: new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'youtube-search6.p.rapidapi.com',//Recuerda que cuando se acaben las 100 peticiones por mes, crea una nueva cuenta y remplaza la key vieja por la nueva 
    'X-RapidAPI-Key': '3c1eea0f6amsh5b4b679132d2d64p1bcb7bjsncad57bb8ca0a'
    })
    };
    return this._http.get("https://youtube-search6.p.rapidapi.com/search/", httpOptions);
  }

  /**
   *Este metodo cargara la busqueda realizada en un array para luego usarla para cada video y no tener que 
   consumir seguido la API ya que tengo solo 100 peticiones por mes
   */
  public cargarListaVideos(buscar:string){
    this.listVideo=new Array<Video>();
    this.getVideos(buscar).subscribe(
      (result)=>{
        result["videos"].forEach((element:any) => {
          this.video=new Video();
          Object.assign(this.video,element);
          this.video.url=element.thumbnails[0].url;
          this.listVideo.push(this.video);
        });
        console.log(this.listVideo);
      },
      error => { alert("Error en la petición"); } 
    )
  }

  public getListaVideos(){
    console.log(this.listVideo);
    return this.listVideo;
  }

  public getVideo(video_id:string):Video{
    console.log(this.listVideo);
    return this.listVideo[this.listVideo.findIndex(v =>(v.video_id==video_id))];
     
   }
}
