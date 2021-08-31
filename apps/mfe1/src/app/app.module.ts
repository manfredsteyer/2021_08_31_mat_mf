import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StandAloneModule } from './modules/stand.alone.module';

@NgModule({
  declarations: [],
  imports: [
    StandAloneModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
