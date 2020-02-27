import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  // here is where we create our name value that is used by our directive in our html file 
export class AppComponent {
  name = 'Alethia';
}
