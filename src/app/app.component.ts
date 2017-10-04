import { Component } from '@angular/core';

import { MapasService } from './services/mapas.service';
import { Marcador } from './interfaces/marcador.interface'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public _ms: MapasService) {

    this._ms.cargarMarcador();

  }
  // title: string = 'Mapa Proyecto';
  lat: number = 10.471042; // , 
  lng: number = -66.515270;
  zoom: number = 16;

  marcadorsel:any=null;
  draggable:string;


  clickMapa(evento) {
    console.log(evento);
    let nm: Marcador = {
      lat: evento.coords.lat
      , lng: evento.coords.lng
      , titulo: "Sin titulo"
      , draggable: true
    }
    this._ms.AddMarcador(nm);
  }

  cambiarDraggable(){
    if(this.draggable == "1"){
      this.marcadorsel.draggable= true;
    }else{
      this.marcadorsel.draggable= false;      
    }
  }

  clickMarcador(marcador:Marcador, i :number) {
      console.log(marcador, i);
      this.marcadorsel = marcador;

      this.draggable= "0";
      if(this.marcadorsel.draggable ==  true){
        this.draggable= "1";
      }
  }

  dragEndMarcador(marcador:Marcador, evento) {
    // console.log(marcador, evento);
    let lat =  evento.coords.lat;
    let lng =  evento.coords.lng;

    marcador.lat = lat;
    marcador.lng = lng;

    this._ms.guardarMarcadores();  
  }

  borrarMarcador(idx:number){
    this._ms.borrarMarcador(idx);
    this.marcadorsel = null;
  }

}
