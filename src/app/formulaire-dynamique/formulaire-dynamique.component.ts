import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-formulaire-dynamique',
  templateUrl: './formulaire-dynamique.component.html',
  styleUrls: ['./formulaire-dynamique.component.css']
})
export class FormulaireDynamiqueComponent implements OnInit {

  myTeamForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myTeamForm = this.fb.group({
      membres: this.fb.array([
        this.fb.control('')
      ])
    })
  }

  get members(): FormArray {
    return this.myTeamForm.get("membres") as FormArray;
  }

  addNewMember = (): void => {
    this.members.push(this.fb.control(''));
  }

  onSubmitTeam = () => {
    console.log(this.myTeamForm);

  }

  ngOnInit() {
  }

}
