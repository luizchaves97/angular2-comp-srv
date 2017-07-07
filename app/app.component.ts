import {Component} from '@angular/core';

declare var module: any;
@Component({
	selector: 'my-app',
	templateUrl: 'app.component.html',
	moduleId: module.id
})

export class AppComponent{
}

