import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvReactiveFormComponent } from './adv-reactive-form.component';

describe('AdvReactiveFormComponent', () => {
  let component: AdvReactiveFormComponent;
  let fixture: ComponentFixture<AdvReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
