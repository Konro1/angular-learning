import {Component, OnInit} from 'angular2/core';
import {SpeakersListComponent} from "./speakers-list.component";
import {RouteParams} from "angular2/router";
import {SpeakerService} from "./speaker.service";

@Component({
    selector: 'speaker-details',
    template: `
     <div *ngIf="speaker">
        <p>Name: {{speaker.lastName}} {{speaker.firstName}}</p>
        <p><img src="{{speaker.avatarImageURL}}" alt=""></p>
        <p>Job: {{speaker.jobTitle}} </p>
     </div>
     `,
    inputs: ["speaker"],
    providers: [SpeakerService],
})
export class SpeakerDetailsComponent implements OnInit{

    public speaker = {};

    constructor(private _speakerService: SpeakerService, private _routerParams: RouteParams) {}

    ngOnInit():any {
        this.speaker = this._speakerService.getSpeaker(this._routerParams.get('id'));
    }
}