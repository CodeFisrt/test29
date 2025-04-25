import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgclassStyleComponent } from './ngclass-style.component';

describe('NgclassStyleComponent', () => {
  let component: NgclassStyleComponent;
  let fixture: ComponentFixture<NgclassStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgclassStyleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgclassStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
