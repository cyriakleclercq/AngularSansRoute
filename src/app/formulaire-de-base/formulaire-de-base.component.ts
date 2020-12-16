import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-formulaire-de-base',
  templateUrl: './formulaire-de-base.component.html',
  styleUrls: ['./formulaire-de-base.component.css']
})
export class FormulaireDeBaseComponent implements OnInit {

  userProfileForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userProfileForm = this.fb.group({
      nom: ["", Validators.required],
      prenom: ["", Validators.required],
      adresse: this.fb.group({
        numero: [""],
        rue: [""],
        cp: [""]
      })
    });
  }

  onSubmit = (): void => {
    console.log(this.userProfileForm.value);
  }

  ngOnInit() {
  }

}
