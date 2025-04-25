import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgforPageComponent } from './ngfor-page.component';

describe('NgforPageComponent', () => {
  let component: NgforPageComponent;
  let fixture: ComponentFixture<NgforPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgforPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgforPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
