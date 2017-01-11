import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {Http, Headers} from '@angular/http';

@Injectable()
export class TaskService {
    // Observable string sources
    private taskAnnouncedSource = new Subject<string>();
    // Observable string streams
    missionAnnounced$ = this.taskAnnouncedSource.asObservable();
    postHeaders: Headers = new Headers({'Content-Type': 'application/json'})

    constructor(private http: Http) {

    }

    // Service message commands
    announceTask(task: string) {
        this.taskAnnouncedSource.next(task);
    }

    getListofTasks() {
        let url = 'http://10.99.10.81:8080/engine-rest/task'

        return this.http.get(url).map((res)=> res.json());
    }

    postClaimTask(user, list) {
        let toggleClaim = list.assignee == null ? "claim" : "unclaim";
        console.log(toggleClaim)
        let url = `http://10.99.10.81:8080/engine-rest/task/${list.id}/${toggleClaim}`;
        console.log(url)
        let body = JSON.stringify({"userId": user});
        return this.http.post(url, body, {headers: this.postHeaders}).map(() => toggleClaim);
    }


}
