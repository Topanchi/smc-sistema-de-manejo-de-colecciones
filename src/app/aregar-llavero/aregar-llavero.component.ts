import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';    // CRUD services API
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive form services
import { ToastrService } from 'ngx-toastr'; // Alert message using NGX toastr
import { Router } from '@angular/router';


@Component({
  selector: 'app-aregar-llavero',
  templateUrl: './aregar-llavero.component.html',
  styleUrls: ['./aregar-llavero.component.css']
})
export class AregarLlaveroComponent implements OnInit {

  public llaverosForm: FormGroup;  // Define FormGroup to student's form

  constructor( 
    public crudApi: CrudService,  // CRUD API services
    public fb: FormBuilder,       // Form Builder service for Reactive forms
    public toastr: ToastrService,  // Toastr service for alert message
    private router: Router             // Router service to navigate to specific component
  ) { }


  ngOnInit(): void {
    this.crudApi.GetStudentsList();  // Call GetStudentsList() before main form is being called
    this.studenForm();              // Call student form when component is ready

  }
// Reactive student form
studenForm() {
  this.llaverosForm = this.fb.group({
    nombre: ['', [Validators.required]],
    material: ['', [Validators.required]],
    numero: ['', [Validators.required]],
    pais: [''],
    notas: ['']
  })  
}
// Accessing form control using getters
get nombre() {
  return this.llaverosForm.get('nombre');
}
get material() {
  return this.llaverosForm.get('material');
}  
get numero() {
  return this.llaverosForm.get('numero');
}
get pais() {
  return this.llaverosForm.get('pais');
}
get notas() {
  return this.llaverosForm.get('notas');
}

// Reset student form's values
ResetForm() {
  this.llaverosForm.reset();
}  

submitStudentData() {
  this.crudApi.AddStudent(this.llaverosForm.value); // Submit student data using CRUD API
  this.toastr.success('Lavero registrado con éxito!'); // Show success message when data is successfully submited
  this.router.navigate(['listar-llaveros']);
 };
}
