import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = new Array();

  onSubmit(e:any){
    e.preventDefault();
    const ujErtek = e.target.elements.cim.value;
    this.list.push(ujErtek);
    e.target.reset();
  }

  elemTorles(i:number){
    this.list.splice(i,1);
  }
}
