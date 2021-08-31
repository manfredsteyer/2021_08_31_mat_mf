//import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

//const URL = 'http://localhost:4200/remoteEntry.js';
const URL = 'http://localhost:4200/remoteEntry.js';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },

  // Your route here:

  // {
  //   path: 'flights',
  //   loadChildren: () => loadRemoteModule({
  //     remoteEntry: URL,
  //     remoteName: 'integration',
  //     exposedModule: './Module'
  //   })
  //     .then(m => m.StandAloneModule)
  // },
  {
    path: 'flights',
    loadChildren: () => import('mfe1/Module').then(m => m.StandAloneModule)
  },
  // {
  //   path: 'flights',
  //   loadChildren: () => import('integration/Module').then(m => m.StandAloneModule)
  // },

  {
    path: '**',
    //loadChildren: () => import('integration/Module').then(m => m.StandAloneModule)
    component: NotFoundComponent
  }

  // DO NOT insert routes after this one.
  // { path:'**', ...} needs to be the LAST one.

];

