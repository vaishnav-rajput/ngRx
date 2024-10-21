import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './services/store/counter.reducer';
import { CounterbuttonComponent } from './component/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './component/counterdisplay/counterdisplay.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./Material.Module";
import { CustomcounterComponent } from './component/customcounter/customcounter.component'
import { FormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BlogsComponent } from './component/blogs/blogs.component';
import { blogReducer } from './services/store/blog/Blog.reducers';

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcounterComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({counter: counterReducer, blog: blogReducer}),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
