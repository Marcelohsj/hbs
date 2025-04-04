import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterpolazioneIncrementaleComponent } from './interpolazione-incrementale.component';

describe('InterpolazioneIncrementaleComponent', () => {
  let component: InterpolazioneIncrementaleComponent;
  let fixture: ComponentFixture<InterpolazioneIncrementaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterpolazioneIncrementaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterpolazioneIncrementaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
