import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';


@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html'
})
export class TodoDetailPage {
    title: any;
    description: any;

  constructor(public navParams: NavParams) {

    this.navParams = navParams;
    this.title = navParams.get('item').title;
    this.description = navParams.get('item').description;

}


}
