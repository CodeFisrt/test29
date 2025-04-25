import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfPageComponent } from './ng-if-page.component';

describe('NgIfPageComponent', () => {
  let component: NgIfPageComponent;
  let fixture: ComponentFixture<NgIfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgIfPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgIfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
