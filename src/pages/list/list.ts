import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddTodoPage } from '../add-todo/add-todo';
import { TodoDetailPage } from '../todo-detail/todo-detail';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {

   items: Array<{title: string, description: string}>;


  constructor(public navCtrl: NavController) {
    this.navCtrl = navCtrl;

    this.items = [
      { title: 'test', description: 'test abc'},
      { title: 'test2', description: 'test abc'}
    ];   
}

   addTodo(){
     this.navCtrl.push(AddTodoPage, { listPage: this });
   }

   viewTodo(item){
     this.navCtrl.push(TodoDetailPage, {
       item: item
     });
   }


}
