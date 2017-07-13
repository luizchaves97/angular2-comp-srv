import {Task} from "./task";
import {MessageService} from "../message.service";
import {Injectable} from '@angular/core';

let TASK:Task[] = [
    {id: 1, name: "Trabalhar"},
    {id: 2, name: "Jogar Basquete"},
    {id: 3, name: "Lavar a louça"},
    {id: 4, name: "Malhar"},
    {id: 5, name: "Estudar"},
];

@Injectable()
export class TaskService{

    constructor(private messageService: MessageService){}

    getTasks():Task[]{
      return TASK;
    }
    getTask(id: number):Task|null{
        let array = this.getTasks().filter(item => item.id == id);
        return array.length ? array[0] : null;
    }
    createTask(task: Task){
        task.id = this.getTasks().length + 1;
        this.getTasks().push(task);
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa incluída com sucesso!'
        });
    }

    deleteTask(id: number){
        let index = this.getTasks().findIndex(item => item.id == id);
        if(index != -1){
            this.getTasks().splice(index,1);
        }
        this.messageService.messages.push({
            type: 'success',
            message: 'Tarefa excluída com sucesso!'
        });
    }
}