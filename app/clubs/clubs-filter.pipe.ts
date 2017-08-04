import { PipeTransform, Pipe } from '@angular/core';
import { IClubs } from './clubs'
@Pipe ({
    name: 'clubFilter'
})

export class ClubsFilterPipe implements PipeTransform {
    transform (value: IClubs [], filterBy: string): IClubs [] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((club: IClubs) =>
            club.name.toLocaleLowerCase().indexOf(filterBy) !== -1): value;

    }

}


