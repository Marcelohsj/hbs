import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUtensileComponent } from './lista-utensile.component';

describe('ListaUtensileComponent', () => {
  let component: ListaUtensileComponent;
  let fixture: ComponentFixture<ListaUtensileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaUtensileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaUtensileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
