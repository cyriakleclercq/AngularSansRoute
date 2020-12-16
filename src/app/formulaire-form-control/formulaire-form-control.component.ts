import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulaire-form-control',
  templateUrl: './formulaire-form-control.component.html',
  styleUrls: ['./formulaire-form-control.component.css']
})
export class FormulaireFormControlComponent implements OnInit {

  userProfile: FormGroup;
  newUserProfile: FormGroup;

  constructor() {
    this.userProfile = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl('')
    });

    this.newUserProfile = new FormGroup({
      nom: new FormControl(''),
      prenom: new FormControl('')
    });
  }

  onSubmitFirst = (): void => {
    this.newUserProfile.setValue(this.userProfile.value);

    this.newUserProfile.patchValue({
      nom: this.userProfile.controls['nom'].value,
      prenom: this.userProfile.get('prenom').value
    });
  }

  onSubmitSecond = (): void => {
    console.log(this.userProfile.value);

  }

  ngOnInit() {
  }

}
