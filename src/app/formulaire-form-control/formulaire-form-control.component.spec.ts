import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireFormControlComponent } from './formulaire-form-control.component';

describe('FormulaireFormControlComponent', () => {
  let component: FormulaireFormControlComponent;
  let fixture: ComponentFixture<FormulaireFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
