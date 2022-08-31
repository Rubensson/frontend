import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSectionComponent } from './titulo-section.component';

describe('TituloSectionComponent', () => {
  let component: TituloSectionComponent;
  let fixture: ComponentFixture<TituloSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
