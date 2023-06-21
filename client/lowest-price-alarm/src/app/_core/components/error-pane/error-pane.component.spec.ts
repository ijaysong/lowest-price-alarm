import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPaneComponent } from './error-pane.component';

describe('ErrorPaneComponent', () => {
  let component: ErrorPaneComponent;
  let fixture: ComponentFixture<ErrorPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
