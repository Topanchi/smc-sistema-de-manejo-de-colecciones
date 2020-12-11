import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService, Llavero } from '../services/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-llavero',
  templateUrl: './editar-llavero.component.html',
  styleUrls: ['./editar-llavero.component.css']
})
export class EditarLlaveroComponent implements OnInit {
  editForm: FormGroup;  // Define FormGroup to student's edit form
  
  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ){ }

  ngOnInit() {
    //this.updateLlaveroData();                              // Call updateLlaveroData() as soon as the component is ready 
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    console.log("id: ", id);
    this.crudApi.ObtenerLlavero(id).valueChanges().subscribe(data => {
      console.log("data from API: ", data);
      this.updateLlaveroData(data);
      this.editForm.setValue(data);                     // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form
    })
  }

  // Accessing form control using getters
  get nombre() {
    return this.editForm.get('nombre');
  }
  get material() {
    return this.editForm.get('material');
  }  
  get numero() {
    return this.editForm.get('numero');
  }
  get pais() {
    return this.editForm.get('pais');
  }
  get comentarios() {
    return this.editForm.get('comentarios');
  }

  // Contains Reactive Form logic
  updateLlaveroData(data: Llavero) {
    this.editForm = this.fb.group({
      nombre: [data ? data.nombre : '', [Validators.required]],
      material: [data ? data.material : '', [Validators.required]],
      numero: [data ? data.numero : '', [Validators.required]],
      pais: [data ? data.pais : ''],
      comentarios: [data ? data.comentarios : '']
    })
  }
  // Go back to previous component
  goBack() {
    this.location.back();
  }
  // Below methods fire when somebody click on submit button
  updateForm(){
    this.crudApi.EditarLavero(this.editForm.value);             // Update key data using CRUD API
    this.toastr.success('Registro editado de forma exitosa');   // Show succes message when data is successfully submited
    this.router.navigate(['listar-llaveros']);                  // Navigate to key's list page when student data is updated
  }
}