import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwucthMapProjectComponent } from './swucth-map-project.component';

describe('SwucthMapProjectComponent', () => {
  let component: SwucthMapProjectComponent;
  let fixture: ComponentFixture<SwucthMapProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwucthMapProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwucthMapProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
