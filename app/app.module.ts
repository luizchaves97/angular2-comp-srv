import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {TaskEditComponent} from './task/task-edit.component';
import {TaskListComponent} from "./task/task-list.component";
import {routing} from "./app.routing";
import {TaskService} from "./task/task.service";
import {TaskCreateComponent} from "./task/task-create.component";
import {AlertModule} from 'ngx-bootstrap';
import {MessageService} from "./message.service";

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		AlertModule.forRoot()],
	declarations: [
		AppComponent,
		TaskEditComponent,
		TaskListComponent,
		TaskCreateComponent],
	bootstrap: [AppComponent],
	providers: [TaskService, MessageService]
})

export class AppModule{

}