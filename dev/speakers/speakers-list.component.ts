import {Component, OnInit} from 'angular2/core';
import {SpeakerDetailsComponent} from "./speaker-detail.component";
import {SpeakerService} from "./speaker.service";
import {Speaker} from "./speaker";

@Component({
    selector: 'speakers-list',
    template: `<div>
            <ul>
                <li *ngFor="#speaker of speakers">
                    <a href="#" (click)="selectSpeaker(speaker)">{{speaker.lastName}} {{speaker.firstName}}</a>
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

    constructor(private _speakerSerive: SpeakerService) {}

    ngOnInit():any {
        this.getSpeakers();
    }

    searchSpeaker = function () {
        console.log(this.searchElement);
    }

    selectSpeaker = function (speaker) {
        this.speakerSelected = speaker;
    }

    getSpeakers() {
        this._speakerSerive.getSpeakers().then((speakers: Speaker[]) => this.speakers = speakers)
    }
}