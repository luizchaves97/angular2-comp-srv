"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
var task_edit_component_1 = require("./task/task-edit.component");
var task_list_component_1 = require("./task/task-list.component");
var app_routing_1 = require("./app.routing");
var task_service_1 = require("./task/task.service");
var task_create_component_1 = require("./task/task-create.component");
var ngx_bootstrap_1 = require("ngx-bootstrap");
var message_service_1 = require("./message.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing,
                ngx_bootstrap_1.AlertModule.forRoot()
            ],
            declarations: [
                app_component_1.AppComponent,
                task_edit_component_1.TaskEditComponent,
                task_list_component_1.TaskListComponent,
                task_create_component_1.TaskCreateComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [task_service_1.TaskService, message_service_1.MessageService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map