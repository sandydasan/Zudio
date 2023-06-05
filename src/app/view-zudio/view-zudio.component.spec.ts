import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewZudioComponent } from './view-zudio.component';

describe('ViewZudioComponent', () => {
  let component: ViewZudioComponent;
  let fixture: ComponentFixture<ViewZudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewZudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewZudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
