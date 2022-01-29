import { Day, Goal, Ingredient, Meal, MealPlan } from "./types";
import foods from "./foods"
import { log } from "./log";

// ------------------------------
// set variables
// ------------------------------

const current_weight = 74.7;
const target_weight = 79.0;
const goal = Goal.MAINTAIN;

// ------------------------------
// targets
// ------------------------------

const target_water = current_weight * 0.035;
const target_carbs = target_weight * goal;
const target_proteins = target_weight * 2.0;

// ------------------------------
// mess around with creating meals here
// ------------------------------

const oat_meal = new Meal([
    new Ingredient(foods.rolledOats, 80),
    new Ingredient(foods.quinoa, 40),
    new Ingredient(foods.blackberries, 100),
    // new Ingredient(foods.blueberries, 50),
    // new Ingredient(foods.raspberries, 50),
    new Ingredient(foods.pumpkinSeeds, 30),
    new Ingredient(foods.yoghurt, 200),
    // new Ingredient(foods.apples, 50),
]);

const oat_meal_blueberry = new Meal([
    new Ingredient(foods.rolledOats, 80),
    new Ingredient(foods.quinoa, 40),
    new Ingredient(foods.blueberries, 100),
    // new Ingredient(foods.blueberries, 50),
    // new Ingredient(foods.raspberries, 50),
    new Ingredient(foods.pumpkinSeeds, 30),
    new Ingredient(foods.yoghurt, 200),
    // new Ingredient(foods.apples, 50),
]);

const apple = new Meal([
    new Ingredient(foods.apples, 200),
    new Ingredient(foods.apples, 200),
]);

const chicken_rice = new Meal([
    new Ingredient(foods.rice, 80),
    new Ingredient(foods.chickenBreast, 75),
    new Ingredient(foods.eggs, 50),
    new Ingredient(foods.frozenVegMix1, 105),
    new Ingredient(foods.cucumber, 30),
    new Ingredient(foods.sweetPotato, 80),
]);

const salmon_rice = new Meal([
    new Ingredient(foods.rice, 70),
    new Ingredient(foods.salmon, 105),
    new Ingredient(foods.eggs, 50),
    new Ingredient(foods.potato, 60),
    new Ingredient(foods.sweetPotato, 60),
    new Ingredient(foods.broccolini, 30),
    new Ingredient(foods.cherryTomato, 40),
    new Ingredient(foods.cucumber, 30),
    new Ingredient(foods.peas, 30),
]);

const salmon_rice2 = new Meal([
    new Ingredient(foods.rice, 80),
    new Ingredient(foods.salmon, 105),
    new Ingredient(foods.eggs, 50),
    new Ingredient(foods.potato, 30),
    new Ingredient(foods.sweetPotato, 60),
    new Ingredient(foods.broccolini, 30),
    new Ingredient(foods.cherryTomato, 40),
    new Ingredient(foods.frozenVegMix1, 40),
]);

const steak_rice = new Meal([
    new Ingredient(foods.rice, 70),
    new Ingredient(foods.beef, 90),
    new Ingredient(foods.eggs, 50),
    new Ingredient(foods.potato, 60),
    new Ingredient(foods.broccolini, 30),
    new Ingredient(foods.sweetPotato, 60),
    new Ingredient(foods.peas, 20),
]);

const steak_rice2 = new Meal([
    new Ingredient(foods.rice, 70),
    new Ingredient(foods.beef, 90),
    new Ingredient(foods.eggs, 50),
    new Ingredient(foods.potato, 60),
    new Ingredient(foods.broccolini, 30),
    new Ingredient(foods.sweetPotato, 60),
    new Ingredient(foods.peas, 20),
]);

const mealPlan = new MealPlan(
    target_water,
    target_carbs,
    target_proteins,
    [
        oat_meal_blueberry,
        steak_rice,
        steak_rice,
        steak_rice,
        apple,
    ]);

// ------------------------------
// summary
// ------------------------------

mealPlan.printSummary();