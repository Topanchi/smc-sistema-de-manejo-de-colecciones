import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

import { AregarLlaveroComponent } from './aregar-llavero/aregar-llavero.component';
import { EditarLlaveroComponent } from './editar-llavero/editar-llavero.component';
import { ListarLlaveroComponent } from './listar-llavero/listar-llavero.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// NGX Pagination
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { VerLlaveroComponent } from './ver-llavero/ver-llavero.component';
import { GaleriaLlaveroComponent } from './galeria-llavero/galeria-llavero.component';

@NgModule({
  declarations: [
    AppComponent,
    AregarLlaveroComponent,
    EditarLlaveroComponent,
    ListarLlaveroComponent,
    VerLlaveroComponent,
    GaleriaLlaveroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule, // required animations module
    NgxPaginationModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
