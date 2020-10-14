import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular Demo';
  leadParagraph: string = 'All new componets in paragraph';

  order(){
    console.log("Biuu");
  }
}
