export enum Goal {
    LOSE = 3.0,
    MAINTAIN = 5.0,
    GAIN = 7.0,
}

export enum Macro {
    CARBS = "carbs",
    PROTEINS = "proteins",
    FATS = "fats",
}

export interface Food {
    carbs: number;
    proteins: number;
    fats: number;
}

export class Ingredient {
    private macroModifier: number;

    constructor(public type: Food, public amount: number) {
        this.macroModifier = amount / 100.0;
    }

    public getMacro(type: Macro): number {
        return this.type[type] * this.macroModifier;
    }
}

export class Meal {
    constructor(public ingredients: Ingredient[]) { }

    public getMacro(type: Macro): number {
        return this.ingredients
            .map((x) => x.getMacro(type))
            .reduce((sumMacro, currentMacro) => sumMacro + currentMacro, 0);
    }

    public printMacros(): void {
        console.log({
            carbs: Math.ceil(this.getMacro(Macro.CARBS)),
            proteins: Math.ceil(this.getMacro(Macro.PROTEINS)),
            fats: Math.ceil(this.getMacro(Macro.FATS)),
        });
    }
}

export class MealPlan {
    public mealsPerDay: number;

    constructor(
        public targetWater: number,
        public targetCarbs: number,
        public targetProteins: number,
        public meals: Meal[]) {
        this.mealsPerDay = meals.length;
    }

    public printSummary(): void {

        const macrosTotal = this.meals
            .map((x) => {
                x.printMacros();
                return {
                    carbs: x.getMacro(Macro.CARBS),
                    proteins: x.getMacro(Macro.PROTEINS),
                    fats: x.getMacro(Macro.FATS),
                };
            })
            .reduce((sumMacros, currentMacros) => {
                return {
                    carbs: sumMacros.carbs + currentMacros.carbs,
                    proteins: sumMacros.proteins + currentMacros.proteins,
                    fats: sumMacros.fats + currentMacros.fats,
                };
            }, {
                carbs: 0,
                proteins: 0,
                fats: 0,
            });

        console.log("");
        console.log(`WATER = ${this.targetWater.toFixed(2)}L`);
        console.log(`CARBS = ${Math.ceil(macrosTotal.carbs)}g/${this.targetCarbs}g`);
        console.log(`PROTS = ${Math.ceil(macrosTotal.proteins)}g/${this.targetProteins}g`);
        console.log(`FATS  = ${Math.ceil(macrosTotal.fats)}g`);
        console.log(`CALS  = ${Math.ceil((macrosTotal.carbs * 4) + (macrosTotal.proteins * 4) + (macrosTotal.fats * 9))}`);
    }
}

export enum Day {
    MONDAY = 'mon',
    TUESDAY = 'tue',
    WEDNESDAY = 'wed',
    THURSDAY = 'thu',
    FRIDAY = 'fri',
    SATURDAY = 'sat',
    SUNDAY = 'sun',
}