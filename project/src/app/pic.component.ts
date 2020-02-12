import {Component} from '@angular/core';

@Component({
    selector: 'Authors' ,
    template:
    `<table style="margin: 0px 100px; border-spacing:20px">
    <tr><td>
        <img [src]="imageURL" width="200px" height="200px" margin="auto" /> 
        </td>
        </tr>
        </table>
        `
})
export class CoursesComponent {
    imageURL="assets/images/dog.jpeg";
}
