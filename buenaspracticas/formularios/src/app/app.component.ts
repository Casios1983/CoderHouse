import { Component, ViewChild } from '@angular/core';
import { SharkDirective } from './directive/shark.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formularios';
  extraCreature!: string;

  @ViewChild(SharkDirective)
  set appShark(directive: SharkDirective)
  {
    this.extraCreature = directive.creature;
  }
ngAfterViewInit()
{ 
console.log(this.extraCreature);
}

}
