import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CustomDirectiveApp';
  defaultcolor:string="blue";
  name:string="pranay";
  componentData:string="Hello!!!";

  catchdata(ev:string){
  this.componentData=ev;
  }
}
