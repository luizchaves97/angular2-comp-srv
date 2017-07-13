"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_service_1 = require("../message.service");
var core_1 = require("@angular/core");
var TASK = [
    { id: 1, name: "Trabalhar" },
    { id: 2, name: "Jogar Basquete" },
    { id: 3, name: "Lavar a louça" },
    { id: 4, name: "Malhar" },
    { id: 5, name: "Estudar" },
];
var TaskService = (function () {
    function TaskService(messageService) {
        this.messageService = messageService;
    }
    TaskService.prototype.getTasks = function () {
        return TASK;
    };
    TaskService.prototype.getTask = function (id) {
        var array = this.getTasks().filter(function (item) { return item.id == id; });
        return array.length ? array[0] : null;
    };
    TaskService.prototype.createTask = function (task) {
        task.id = this.getTasks().length + 1;
        this.getTasks().push(task);
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa incluída com sucesso!'
        });
    };
    TaskService.prototype.deleteTask = function (id) {
        var index = this.getTasks().findIndex(function (item) { return item.id == id; });
        if (index != -1) {
            this.getTasks().splice(index, 1);
        }
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa excluída com sucesso!'
        });
    };
    TaskService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [message_service_1.MessageService])
    ], TaskService);
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map