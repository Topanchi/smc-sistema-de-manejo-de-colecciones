import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';  // Firebase modules for Database, Data list and Single object

export interface Llavero { 
  $key: string;
  nombre: string; 
  material: string;
  numero: number;
  comentarios: string;
  pais: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  llaverosRef: AngularFireList<any>;    // Reference to Llaveros data list, its an Observable
  llaveroRef: AngularFireObject<any>;   // Reference to Lllavero object, its an Observable too
  
  // Inject AngularFireDatabase Dependency in Constructor
  constructor(private db: AngularFireDatabase) { }

  // Create Keys
  AgregarLlavero(llavero: Llavero) {
    this.llaverosRef.push({
      nombre: llavero.nombre,
      material: llavero.material,
      numero: llavero.numero,
      pais: llavero.pais,
      comentarios: llavero.comentarios
    })
  }

  // Fetch Single Key Object
  ObtenerLlavero(id: string) {
    this.llaveroRef = this.db.object('llaveros/' + id);
    return this.llaveroRef;
  }
  // Fetch Keys List
  ObtenerLlaveroList() {
    this.llaverosRef = this.db.list('llaveros');
    return this.llaverosRef;
  } 

  // Update Key Object
  EditarLavero(llavero: Llavero) {
    this.llaveroRef.update({
      nombre: llavero.nombre,
      material: llavero.material,
      numero: llavero.numero,
      pais: llavero.pais,
      comentarios: llavero.comentarios
    })
  }  
  // Delete Key Object
  EliminarLlavero(id: string) { 
    this.llaveroRef = this.db.object('llaveros/'+id);
    this.llaveroRef.remove();
  }


}
