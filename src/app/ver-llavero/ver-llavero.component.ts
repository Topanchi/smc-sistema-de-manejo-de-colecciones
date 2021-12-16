import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CrudService } from '../services/crud.service';
import { ActivatedRoute, Router } from "@angular/router"; // ActivatedRoue is used to get the current associated components information.
import { Location } from '@angular/common';  // Location service is used to go back to previous component
import { ToastrService } from 'ngx-toastr';
import { Llavero } from '../models/llavero';

@Component({
  selector: 'app-ver-llavero',
  templateUrl: './ver-llavero.component.html',
  styleUrls: ['./ver-llavero.component.css']
})
export class VerLlaveroComponent implements OnInit {

  viewForm: FormGroup;
  urlImage: string;

  constructor(
    private crudApi: CrudService,       // Inject CRUD API in constructor
    private fb: FormBuilder,            // Inject Form Builder service for Reactive forms
    private location: Location,         // Location service to go back to previous component
    private actRoute: ActivatedRoute,   // Activated route to get the current component's inforamation
    private router: Router,             // Router service to navigate to specific component
    private toastr: ToastrService       // Toastr service for alert message
  ) { }

  ngOnInit(): void {
    const id = this.actRoute.snapshot.paramMap.get('id');  // Getting current component's id or information using ActivatedRoute service
    this.crudApi.ObtenerLlavero(id).valueChanges().subscribe(data => {
      console.log(data)
      this.urlImage = data.img;
      this.viewLlaveroData(data);
      this.viewForm.setValue(data);                     // Using SetValue() method, It's a ReactiveForm's API to store intial value of reactive form
    })
  }

  // Accessing form control using getters
  get nombre() {
    return this.viewForm.get('nombre');
  }
  get material() {
    return this.viewForm.get('material');
  }  
  get numero() {
    return this.viewForm.get('numero');
  }
  get pais() {
    return this.viewForm.get('pais');
  }
  get comentarios() {
    return this.viewForm.get('comentarios');
  }
  get image() {
    return this.viewForm.get('image');
  }

  // Contains Reactive Form logic
  viewLlaveroData(data: Llavero){
    this.viewForm = this.fb.group({
      nombre: [data ? data.nombre : '', [Validators.required]],
      material: [data ? data.material : '', [Validators.required]],
      numero: [data ? data.numero : '', [Validators.required]],
      pais: [data ? data.pais : ''],
      comentarios: [data ? data.comentarios : ''],
      image: [data ? data.img : '']
    })
  }

  // Go back to previous component
  goBack() {
    this.location.back();
  }

}
