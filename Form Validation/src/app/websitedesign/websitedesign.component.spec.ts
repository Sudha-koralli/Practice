import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsitedesignComponent } from './websitedesign.component';

describe('WebsitedesignComponent', () => {
  let component: WebsitedesignComponent;
  let fixture: ComponentFixture<WebsitedesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsitedesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsitedesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
