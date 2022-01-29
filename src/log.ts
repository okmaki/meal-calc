import fs from "fs";

import { Day, MealPlan } from "./types";

export function log(mealPlan: MealPlan, week: number, day: Day): void {
    const diaryFilename = "./diary.json";
    let diary;

    try {
        const fileContent = fs.readFileSync(diaryFilename).toString();
        diary = JSON.parse(fileContent) ?? {};
    } catch (error) {
        console.log("diary file does not exist - creating...");
        diary = {};
        fs.writeFileSync(diaryFilename, JSON.stringify(diary));
        console.log("diary file created!");
    }

    const dayIdentifier = `${week}-${day}`;
    diary[dayIdentifier] = mealPlan;

    fs.writeFileSync(diaryFilename, JSON.stringify(diary));
}
