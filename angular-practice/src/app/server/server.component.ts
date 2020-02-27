// first custom class.. as seen it is in a subfolder with the name corresponding to the comp. which is how we want to structure all our components.
// here we first import component from core pkg
import { Component } from '@angular/core';
// then we use the component decorator that marks our class as an angular comp. holds important metadata like selector that basically signals where this component will "latch" onto, our template url which links to our corresponding html page, and styleUrl if we need it
@Component({
    selector: 'app-server',
    // its important that we name our selector uniquely to be sure we don't override another component.. a good naming convention is to start with app- then the name of the component
    templateUrl: './server.component.html'
})
// then we export our class so it can be found and used properly 
export class ServerComponent {

}