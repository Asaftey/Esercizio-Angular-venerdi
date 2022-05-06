import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootUserComponentComponent } from './root-user-component.component';

describe('RootUserComponentComponent', () => {
  let component: RootUserComponentComponent;
  let fixture: ComponentFixture<RootUserComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootUserComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootUserComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
