import {Injectable} from "angular2/core";
import {SPEAKERS} from "./mock-speakers";
import {Speaker} from './speaker';

@Injectable()

export class SpeakerService {
    getSpeakers() {
        return Promise.resolve(SPEAKERS);
    }

    getSpeaker(id) {
        var speakers = SPEAKERS;
        var speaker = {};
        speakers.forEach(function (item: Speaker) {
            if (item.speakerId == id) {
                speaker = item;
            }
        });
        return speaker;
    }
}