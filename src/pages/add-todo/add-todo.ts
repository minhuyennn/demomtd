import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html'
})
export class AddTodoPage {

   title: any;
   description: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.navCtrl = navCtrl;
    this.navParams = navParams;
    this.title = "";
    this.description = "";
}

   saveTodo(){
       let newTodo = {
           title: this.title,
           description: this.description
       }

       this.navParams.get('ListPage').saveTodo(newTodo);
       this.navCtrl.pop();

   }
}
