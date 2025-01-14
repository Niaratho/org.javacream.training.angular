import { Component , Input} from '@angular/core';
import { Person } from '../../schema/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
  @Input()
  person?:Person
  @Input()
  detail:boolean = false

}
