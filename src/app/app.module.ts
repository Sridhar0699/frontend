import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ChildComponent } from './child/child.component';
import { TaskComponent } from './task/task.component';
import { ListComponent } from './list/list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { UpdateParentTaskComponent } from './update-parent-task/update-parent-task.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ChildComponent,
    TaskComponent,
    ListComponent,
    NotfoundComponent,
    UpdateProjectComponent,
    UpdateParentTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
