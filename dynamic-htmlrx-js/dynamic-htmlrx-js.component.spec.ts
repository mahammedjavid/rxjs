import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicHtmlrxJsComponent } from './dynamic-htmlrx-js.component';

describe('DynamicHtmlrxJsComponent', () => {
  let component: DynamicHtmlrxJsComponent;
  let fixture: ComponentFixture<DynamicHtmlrxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicHtmlrxJsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicHtmlrxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
