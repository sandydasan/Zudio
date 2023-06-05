import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZudioComponent } from './add-zudio.component';

describe('AddZudioComponent', () => {
  let component: AddZudioComponent;
  let fixture: ComponentFixture<AddZudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddZudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
