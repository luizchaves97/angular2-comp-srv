"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TASK = [
    { id: 1, name: "Trabalhar" },
    { id: 2, name: "Jogar Basquete" },
    { id: 3, name: "Lavar a louça" },
    { id: 4, name: "Malhar" },
    { id: 5, name: "Estudar" },
];
var TaskService = (function () {
    function TaskService() {
    }
    TaskService.prototype.getTasks = function () {
        return TASK;
    };
    return TaskService;
}());
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map