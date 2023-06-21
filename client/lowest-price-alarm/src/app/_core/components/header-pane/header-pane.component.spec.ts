import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPaneComponent } from './header-pane.component';

describe('HeaderPaneComponent', () => {
  let component: HeaderPaneComponent;
  let fixture: ComponentFixture<HeaderPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
