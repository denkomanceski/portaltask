import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs';
import {TaskService} from '../../services/task.service';

@Component({
    selector: 'mokrio-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit, OnDestroy {
    task = '';
    subscription: Subscription;

    constructor(private taskService: TaskService) {
        this.subscription = this.taskService.missionAnnounced$.subscribe(task => {
            this.task = task;
        })
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscription.unsubscribe();
    }


}
