import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import {TaskService} from './services/task.service';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterByAssignedPipe } from './pipes/filter-by-assigned.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    FilterPipe,
    FilterByAssignedPipe
  ],
  entryComponents: [
	AppComponent,
    TaskListComponent,
    TaskDetailComponent
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TaskService]
})
export class AppModule { }
