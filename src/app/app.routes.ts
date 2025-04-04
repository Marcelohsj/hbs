import { Routes } from '@angular/router';
import { HomeComponent } from './dashboard/features/home/home.component';
import { InterpolazioneComponent } from './dashboard/features/interpolazione/interpolazione.component';
import { InterpolazioneIncrementaleComponent } from './dashboard/features/interpolazione-incrementale/interpolazione-incrementale.component';
import { FilettiComponent } from './dashboard/features/filetti/filetti.component';
import { AsoleComponent } from './dashboard/features/asole/asole.component';
import { ListaUtensileComponent } from './dashboard/features/lista-utensile/lista-utensile.component';
export const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'interpolazione', component: InterpolazioneComponent },
  { path: 'interpolazione-incrementale', component: InterpolazioneIncrementaleComponent },
  { path: 'filetti', component: FilettiComponent },
  { path: 'asole', component: AsoleComponent },
  { path: 'lista-utensile', component: ListaUtensileComponent },

];
