import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { IClubs} from './clubs';

@Injectable()
export class ClubService{
    private _clubUrl = 'api/clubs/team.json';

    constructor (private _http: Http){}
    getClubs(): Observable<IClubs[]> {
        return this._http.get(this._clubUrl)
            .map((response: Response) => <IClubs[]> response.json())
            .do(data => console.log('All' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}