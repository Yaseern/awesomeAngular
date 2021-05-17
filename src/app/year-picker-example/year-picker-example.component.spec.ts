import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YearPickerExampleComponent } from './year-picker-example.component';

describe('YearPickerExampleComponent', () => {
  let component: YearPickerExampleComponent;
  let fixture: ComponentFixture<YearPickerExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearPickerExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearPickerExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
