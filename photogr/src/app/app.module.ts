import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router';
import { HttpModule, JsonpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

import { NgRedux, NgReduxModule } from '@angular-redux/store'

import { AppComponent } from './app.component'
import { StoreModule } from './store/store.module'
import { CoreModule, LayoutComponent } from './components/core'


@NgModule({ 
  declarations: [
      AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      NgbModule.forRoot(),
      HttpModule,
      JsonpModule,
      NgReduxModule,
      StoreModule,
      CoreModule
  ],
  providers: [],
  entryComponents: [],
  bootstrap: [
      AppComponent
  ]})
export class AppModule {
    
}
