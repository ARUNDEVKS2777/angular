import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


   todo=[]
   mov:any[]=[]
  name:string=''
  index:any
  element:any
  getName(event:any)
  {
    this.name=(event.target as HTMLInputElement).value
  }
  saveArray()
  {
    this.todo.push(this.name)
    console.log(this.todo)
  }
  removeD(n:any)
  {
    this.index=this.todo.indexOf(n)
    this.todo.splice(this.index,1)
    console.log(this.todo)
  }

  movE(n:any)
  {
    this.mov.push(n)
    this.removeD(n)
    // this.index=this.todo.indexOf(n)
    // this.todo.splice(this.index,1)
    // console.log(this.todo)

  }



}
