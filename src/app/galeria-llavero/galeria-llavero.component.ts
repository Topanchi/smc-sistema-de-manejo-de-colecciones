import { Component, OnInit } from '@angular/core';
import { Llavero } from '../models/llavero';

import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-galeria-llavero',
  templateUrl: './galeria-llavero.component.html',
  styleUrls: ['./galeria-llavero.component.css']
})
export class GaleriaLlaveroComponent implements OnInit {
  Llavero: Llavero[];
  Imagenes: any[];
  urlImage: any;

  constructor(private crudApi: CrudService,) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    this.crudApi.ObtenerLlaveroList().snapshotChanges().subscribe(data => {
      console.log(data);
      this.Llavero = [];
      data.forEach(item => {
        //console.log(item.payload.toJSON());
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Llavero.push(a as Llavero);
      })
      console.log(this.Llavero);
      //this.getImg(this.Llavero);
    });

    
  }

  private getImg(Llavero: Llavero[]) {
    Llavero.forEach(element => {
      this.urlImage = element.img
    }); 
  }

}
