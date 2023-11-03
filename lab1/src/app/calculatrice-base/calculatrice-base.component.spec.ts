import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatriceBaseComponent } from './calculatrice-base.component';

describe('CalculatriceBaseComponent', () => {
  let component: CalculatriceBaseComponent;
  let fixture: ComponentFixture<CalculatriceBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculatriceBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatriceBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add 15 + 5 to 20', () => {
    const tempval1 = '15';
    const tempval2 = '5';
    component.addition(tempval1, tempval2);
    expect(component.resultatValue).toBeCloseTo(20);
  });

  it('should substract 15 - 5 to 10', () => {
    const tempval1 = '15';
    const tempval2 = '5';
    component.soustraction(tempval1, tempval2);
    expect(component.resultatValue).toBeCloseTo(10);
  });

  it('should multiply 15 * 5 to 75', () => {
    const tempval1 = '15';
    const tempval2 = '5';
    component.multiplication(tempval1, tempval2);
    expect(component.resultatValue).toBeCloseTo(75);
  });

  it('should divide 15 / 5 to 3', () => {
    const tempval1 = '15';
    const tempval2 = '5';
    component.division(tempval1, tempval2);
    expect(component.resultatValue).toBeCloseTo(3);
  });

  it('should clear all numbers back to 0', () => {
    const tempval1 = '15';
    const tempval2 = '5';
    component.clear(tempval1, tempval2);
    expect(component.resultatValue).toBeCloseTo(0);
  });
});
