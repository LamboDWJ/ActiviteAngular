import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  


export class AppComponent {
    
    
    
    posts = [
    {
        title: 'Premier article',
        content: 'Ceci est le premier article',
        loveIts: 0,
        date: new Date()
    },
    {
      title: 'Deuxième article',
      content: 'Ceci est le deuxième article',
      loveIts: 0,
      date: new Date()


    },
    {
      title: 'Troisième article',
      content: 'Ceci est le troisième article',
      loveIts: 0,
      date: new Date()


    }
  ];

constructor() {
   
  }
}

  

