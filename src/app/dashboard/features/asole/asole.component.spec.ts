import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsoleComponent } from './asole.component';

describe('AsoleComponent', () => {
  let component: AsoleComponent;
  let fixture: ComponentFixture<AsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
