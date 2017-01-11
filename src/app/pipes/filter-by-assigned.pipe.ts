import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filterByAssigned'
})
export class FilterByAssignedPipe implements PipeTransform {

    transform(value: any, assignedByMe: string|boolean, byWhat, what): any {
        console.log(assignedByMe, "...");
        if (assignedByMe) {
            return value.filter((user)=> {
                return user[byWhat] == what;
            })
        }

        return value;
    }


}
