import { Injectable } from '@angular/core';
import { Marcador} from '../interfaces/marcador.interface'

@Injectable()
export class MapasService {

  marcadores:Marcador[] = [];
  constructor(
  ) {
      let marcador:Marcador = {
        titulo :'Home'
        , lat: 10.471042
        , lng:  -66.515270
        , draggable : true
      }

      this.marcadores.push(marcador);

   }

   AddMarcador(mar:Marcador){
     this.marcadores.push(mar);
     this.guardarMarcadores();
   }

   borrarMarcador(idx:number){
     this.marcadores.splice(idx,1);
     this.guardarMarcadores();
   }

   guardarMarcadores(){
     localStorage.setItem("mapasApp", JSON.stringify(this.marcadores));
   }

   cargarMarcador(){
     if(localStorage.getItem("mapasApp")){
       this.marcadores = JSON.parse(localStorage.getItem("mapasApp"))
     }
     else{
       this.marcadores= [];
     }
   }

}
