import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { Track } from 'src/app/models/track';
import { DeezerService } from 'src/app/services/deezer.service';

@Component({
  selector: 'app-pagea',
  templateUrl: './pagea.component.html',
  styleUrls: ['./pagea.component.css']
})
export class PageaComponent implements OnInit {

  listId:Array<string>=[
    "659832242","676183","1879352107", "2041237647","2054897277","1957530017","1809961297","2074439067","2129930367"
  ]
  listTracks!:Array<Track>;
  track!:Track;
  constructor(private deezerService:DeezerService) { 
    this.listTracks=new Array<Track>();
    this.getListTracks();
  }

  ngOnInit(): void {

  }

  getListTracks(){

    for(let i=0; i<this.listId.length;i++){
      this.deezerService.getTrack(this.listId[i]).subscribe(
        (result)=>{
          this.track=new Track();
          this.track.title=result.title;
          this.track.release_date=result.release_date;
          this.track.preview=result.preview;
          this.track.name=result.artist.name;
          this.track.picture_medium=result.artist.picture_medium;
          this.track.titleAlbum=result.album.title;
          this.listTracks.push(this.track);
        },
        error => {alert("Error en la peticion"); }
      )
    }

  }
}
