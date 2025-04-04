import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilettiComponent } from './filetti.component';

describe('FilettiComponent', () => {
  let component: FilettiComponent;
  let fixture: ComponentFixture<FilettiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilettiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilettiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
