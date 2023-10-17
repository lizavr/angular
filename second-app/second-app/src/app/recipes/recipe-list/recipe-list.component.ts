import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'a test recipe',
      'test test test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LAEih9p--b4Jgwk-iXWC7AxpnJYf8TNVSQ&usqp=CAU'
    ),
    new Recipe(
      'a test recipe',
      'test test test',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LAEih9p--b4Jgwk-iXWC7AxpnJYf8TNVSQ&usqp=CAU'
    ),
  ];
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() {}
  ngOnInit(): void {
    throw new Error();
  }
}
