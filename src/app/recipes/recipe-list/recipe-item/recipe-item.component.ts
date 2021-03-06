import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;
  /* @Output() recipeSelected = new EventEmitter<void>(); */

  ngOnInit(): void {}
}

/* The ! in the recipe is just a bandaid solution for me. will try to check on other solution next time. */
