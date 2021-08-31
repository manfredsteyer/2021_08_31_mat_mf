import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { FilePickerComponent } from '../components/file-picker/file-picker.component';

export const FORGE_ROUTES: Routes = [
  {
    path: 'complete-forge-app',
    component: AppComponent
  },
  {
    path: 'file-picker',
    component: FilePickerComponent
  },
];
