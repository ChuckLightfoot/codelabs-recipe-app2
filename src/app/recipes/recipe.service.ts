import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()

export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes:Recipe[] = [
    new Recipe(
      'Chucks Bacon Cheeseburger',
      'Incredibly Tasty Burger',
      'https://ribsandburgers.com/au/wp-content/uploads/2019/03/2-angus-bacon-and-cheese.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 2),
        new Ingredient('Bacon', 4),
        new Ingredient('Lettuce', 1),
        new Ingredient('Tomatoe', 1),
        new Ingredient('Onion', 2),
        new Ingredient('American Cheese', 1),
        new Ingredient('Pepper Jack Cheese', 1),
      ]),



    new Recipe(
      'Luv Jerky',
      'The best jerky in the world!',
      'http://www.mutherfudger.co.uk/wp-content/uploads/2017/08/beef-jerky.jpg',
      [
        new Ingredient('Meat of choice',1),
        new Ingredient('LaChoy Soy Sauce', 1),
        new Ingredient('Worstershire Sauce', 3),
        new Ingredient('Barbeque Sauce', 0.33),
        new Ingredient('Garlic Salt', 2),
        new Ingredient('Water', 2)
      ]),

  ];

  constructor(private slService: ShoppingListService){}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
