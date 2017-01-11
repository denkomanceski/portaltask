import {Component, OnInit} from '@angular/core';
import {TaskService} from '../../services/task.service';

@Component({
    selector: 'mokrio-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    lists: {};
    myInput: string = '';
    randomVar: any;
    myAssignee: boolean;

    constructor(private  taskService: TaskService) {
        //setInterval(()=> {
            this.parseListOfTask()
        //}, 3000);

    }

    ngOnInit() {
    }

    sendTask(task) {
        this.taskService.announceTask(task);
    }

    parseListOfTask() {
        this.taskService.getListofTasks().subscribe(data => {

            this.lists = data;
            console.log(this.lists);
        })
    }

    toggleList() {
        this.randomVar = !this.randomVar;
    }

    claimTask(list) {
        this.taskService.postClaimTask("demo", list)
            .subscribe(isClaimed=> {
                console.log("success", isClaimed);
                list.assignee = isClaimed == 'claim' ? 'demo': null;
                this.taskService.announceTask(list);
            });

    }


}
