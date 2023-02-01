import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenPropertyComponent } from './hidden-property.component';

describe('HiddenPropertyComponent', () => {
  let component: HiddenPropertyComponent;
  let fixture: ComponentFixture<HiddenPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiddenPropertyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
