import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateZudioComponent } from './update-zudio.component';

describe('UpdateZudioComponent', () => {
  let component: UpdateZudioComponent;
  let fixture: ComponentFixture<UpdateZudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateZudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateZudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
