import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipWithComponent } from './zip-with.component';

describe('ZipWithComponent', () => {
  let component: ZipWithComponent;
  let fixture: ComponentFixture<ZipWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipWithComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZipWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
