import {Task} from "./task";

let TASK:Task[] = [
    {id: 1, name: "Trabalhar"},
    {id: 2, name: "Jogar Basquete"},
    {id: 3, name: "Lavar a louça"},
    {id: 4, name: "Malhar"},
    {id: 5, name: "Estudar"},
];

export class TaskService{
    getTasks():Task[]{
      return TASK;
    }
}