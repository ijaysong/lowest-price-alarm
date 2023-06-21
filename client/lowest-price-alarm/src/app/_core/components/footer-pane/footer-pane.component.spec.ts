import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPaneComponent } from './footer-pane.component';

describe('FooterPaneComponent', () => {
  let component: FooterPaneComponent;
  let fixture: ComponentFixture<FooterPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
