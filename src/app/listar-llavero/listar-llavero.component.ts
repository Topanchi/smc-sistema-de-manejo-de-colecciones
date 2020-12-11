import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';  // CRUD API service class
import { ToastrService } from 'ngx-toastr';      // Alert message using NGX toastr

export interface Llavero { 
  $key: string;
  nombre: string; 
  material: string;
  numero: number;
  notas: string;
  pais: string;
}

@Component({
  selector: 'app-listar-llavero',
  templateUrl: './listar-llavero.component.html',
  styleUrls: ['./listar-llavero.component.css']
})
export class ListarLlaveroComponent implements OnInit {
  p: number = 1;                      // Settup up pagination variable
  Llavero: Llavero[];                 // Save keys data in Student's array.
  hideWhenNoLlavero: boolean = false; // Hide keys data table when no student.
  noData: boolean = false;            // Showing No Key Message, when no keys in database.
  
  constructor(
    public crudApi: CrudService, // Inject key CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ){ }

  ngOnInit(): void {
    this.dataState(); // Initialize key's list, when component is ready
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
  // Using valueChanges() method to fetch simple list of keys data. It updates the state of hideWhenNoLlavero, noData variables when any changes occurs in key data list in real-time.
  dataState() {     
    this.crudApi.ObtenerLlaveroList().valueChanges().subscribe(data => {
      
      if(data.length <= 0){
        this.hideWhenNoLlavero = false;
        this.noData = true;
      } else {
        this.hideWhenNoLlavero = true;
        this.noData = false;
      }
    })
  }
  // Method to delete student object
  deleteLlavero(llavero) {
    if (window.confirm('¿ Seguro que desea eliminar el llavero ?')) { // Asking from user before Deleting student data.
      this.crudApi.EliminarLlavero(llavero.$key) // Using Delete student API to delete student.
      this.toastr.success(' Llavero eliminado con éxito!'); // Alert message will show up when student successfully deleted.
    }
  }
}