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
  Llavero: Llavero[];                 // Save students data in Student's array.
  hideWhenNoLlavero: boolean = false; // Hide students data table when no student.
  noData: boolean = false;            // Showing No Student Message, when no student in database.
  
  constructor(
    public crudApi: CrudService, // Inject student CRUD services in constructor.
    public toastr: ToastrService // Toastr service for alert message
  ){ }

  ngOnInit(): void {
    this.dataState(); // Initialize student's list, when component is ready
    let s = this.crudApi.GetStudentsList(); 
    s.snapshotChanges().subscribe(data => { // Using snapshotChanges() method to retrieve list of data along with metadata($key)
      this.Llavero = [];
      data.forEach(item => {
        let a = item.payload.toJSON(); 
        a['$key'] = item.key;
        this.Llavero.push(a as Llavero);
      })
    })
  }
  // Using valueChanges() method to fetch simple list of students data. It updates the state of hideWhenNoStudent, noData variables when any changes occurs in student data list in real-time.
  dataState() {     
    this.crudApi.GetStudentsList().valueChanges().subscribe(data => {
      
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
  deleteStudent(student) {
    if (window.confirm('Are sure you want to delete this student ?')) { // Asking from user before Deleting student data.
      this.crudApi.DeleteStudent(student.$key) // Using Delete student API to delete student.
      this.toastr.success(student.firstName + ' successfully deleted!'); // Alert message will show up when student successfully deleted.
    }
  }
}