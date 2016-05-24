import {Component} from 'angular2/core';
import {SpeakersListComponent} from "./speakers/speakers-list.component";
import {ROUTER_DIRECTIVES, RouteConfig} from "angular2/router";
import {SessionsListComponent} from "./sessions/sessions-list.component";
import {SpeakerDetailsComponent} from "./speakers/speaker-detail.component";

@Component({
    selector: 'app',
    template: `
        <header>
            <nav>
                <a [routerLink]="['Speakers']">Speakers</a>
                <a [routerLink]="['Sessions']">Sessions</a>
            </nav>
        </header>
        <div class="main">
            <router-outlet></router-outlet>
        </div>
    `,
    directives: [SpeakersListComponent, SessionsListComponent, ROUTER_DIRECTIVES],
})
@RouteConfig([
    {
        path: '/speakers',
        name: 'Speakers',
        component: SpeakersListComponent,
    },
    {
        path: '/speakers/:id',
        name: 'Speaker.show',
        component: SpeakerDetailsComponent,
    },
    {
        path: '/sessions',
        name: 'Sessions',
        component: SessionsListComponent,
    },
])
export class AppComponent {


}