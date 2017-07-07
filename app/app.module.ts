import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {TaskEditComponent} from './task/task-edit.component';
import {TaskListComponent} from "./task/task-list.component";

@NgModule({
	imports: [BrowserModule, FormsModule],
	declarations: [AppComponent,TaskEditComponent, TaskListComponent],
	bootstrap: [AppComponent]
})

export class AppModule{

}