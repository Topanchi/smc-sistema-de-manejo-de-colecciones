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

  constructor(private crudApi: CrudService,) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData() {
    let s = this.crudApi.ObtenerLlaveroList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Llavero = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Llavero.push(a as Llavero);
      })
    })
  }

}
