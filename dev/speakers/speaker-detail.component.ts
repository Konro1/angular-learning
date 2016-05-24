import {Component} from 'angular2/core';
import {SpeakersListComponent} from "./speakers-list.component";

@Component({
    selector: 'speaker-details',
    template: `
     <div *ngIf="speaker">
        <p>Name: {{speaker.lastName}} {{speaker.firstName}}</p>
        <p><img src="{{speaker.avatarImageURL}}" alt=""></p>
        <p>Job: {{speaker.jobTitle}} </p>
     </div>
     `,
    inputs: ["speaker"]
})
export class SpeakerDetailsComponent {
    public speaker = {};
}