import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor() {
        const config = {
            apiKey: 'AIzaSyCph3rQiaJhvuB9cvqMhw7-mENtq2sP24w',
            authDomain: 'bibliotheque-28281.firebaseapp.com',
            databaseURL: 'https://bibliotheque-28281.firebaseio.com',
            projectId: 'bibliotheque-28281',
            storageBucket: 'bibliotheque-28281.appspot.com',
            messagingSenderId: '497361091282'
        };
        firebase.initializeApp(config);
    }
}
