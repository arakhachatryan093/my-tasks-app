import {Priority} from './Priority';
import {Category} from './Category';
import {Data} from '@angular/router';

export class Task{
  public id: number;
  public title: string;
  public completed: boolean;
  public priority?: Priority;
  public category?: Category;
  public date?: Data;

  constructor(id: number, title: string, completed: boolean, priority?: Priority, category?: Category, date?: Data) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.priority = priority;
    this.category = category;
    this.date = date;
  }
}
