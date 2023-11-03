import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirListeComponent } from './voir-liste.component';

describe('VoirListeComponent', () => {
  let component: VoirListeComponent;
  let fixture: ComponentFixture<VoirListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirListeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
