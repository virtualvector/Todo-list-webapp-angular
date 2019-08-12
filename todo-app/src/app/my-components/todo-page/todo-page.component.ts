import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent implements OnInit {
  myid: string = ""
  todoArray: Array<any>= [];
  isClicked: boolean = true;
  constructor() { 
   
  }
pushUpdate(){

}

  stateChange(listElem)
  {
    console.log(listElem)
    for (let entry of this.todoArray){
     if(entry.id == listElem)
     {
        entry.status = "Not Completed"
     } 
     this.pushUpdate();
      
  }
    
  }


  ngOnInit() {
    fetch('http://localhost:3000/todo-lists')
    .then(res=>res.clone().json())
    .then(function(myJson) {
      // console.log(JSON.stringify(myJson))
     console.log(myJson[0].id);
     this.myid  = myJson[0].id
     console.log(this.myid);

     for (let entry of myJson){
      console.log(entry.id); // 1, "string", false
      this.todoArray.push(entry);
  }

  for (let entry of this.todoArray){
    console.log(entry.id, entry.title); // 1, "string", false
    
}
  
      
    }.bind(this));
    
  }

}
