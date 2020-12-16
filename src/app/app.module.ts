import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormulaireDeBaseComponent } from './formulaire-de-base/formulaire-de-base.component';
import { FormulaireFormControlComponent } from './formulaire-form-control/formulaire-form-control.component';
import { FormulaireDynamiqueComponent } from './formulaire-dynamique/formulaire-dynamique.component';


@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    FormulaireDeBaseComponent,
    FormulaireFormControlComponent,
    FormulaireDynamiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
