import {Component, OnInit} from 'angular2/core';
import {SpeakerDetailsComponent} from "./speaker-detail.component";
import {SpeakerService} from "./speaker.service";
import {Speaker} from "./speaker";
import {Router} from "angular2/router";

@Component({
    selector: 'speakers-list',
    template: `<div>
            <ul>
                <li *ngFor="#speaker of speakers">
                    <a (click)="selectSpeaker(speaker)">{{speaker.lastName}} {{speaker.firstName}}</a>
                </li>
            </ul>
        </div>
        <speaker-details [speaker]="speakerSelected"></speaker-details>
        `,
    directives: [SpeakerDetailsComponent],
    providers: [SpeakerService],
})

export class SpeakersListComponent implements OnInit{

    public speakers;
    public speakerSelected = false;

    constructor(private _speakerSerice: SpeakerService, private _router: Router) {}

    ngOnInit():any {
        this.getSpeakers();
    }

    searchSpeaker = function () {
        console.log(this.searchElement);
    }

    selectSpeaker = function (speaker) {
        this._router.navigate(['Speaker.show', {id: speaker.speakerId}])
    }

    getSpeakers() {
        this._speakerSerice.getSpeakers().then((speakers: Speaker[]) => this.speakers = speakers)
    }
}