import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicaionComponent } from './ubicaion.component';

describe('UbicaionComponent', () => {
  let component: UbicaionComponent;
  let fixture: ComponentFixture<UbicaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
