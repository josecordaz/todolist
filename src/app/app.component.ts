import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'To do list!';
  task = '';
  list = ['Uno']; 

  counter  = true;
  
  addTask():void{
    this.list.push(this.task);
    this.task = '';
  }
}