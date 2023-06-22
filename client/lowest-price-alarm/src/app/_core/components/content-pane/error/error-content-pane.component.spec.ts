import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorContentPaneComponent } from './error-content-pane.component';

describe('ErrorContentPaneComponent', () => {
  let component: ErrorContentPaneComponent;
  let fixture: ComponentFixture<ErrorContentPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorContentPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorContentPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
