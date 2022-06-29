import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {MyFilterPipe} from '../app/myfilter.pipe';
import { SortpipePipe } from './sortpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MyFilterPipe,
    SortpipePipe
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
