import { ObjectId } from "mongoose";

export interface Recipe {
    recipeId: ObjectId;
    title: string;
    description: number;
    image: string;
    tags: Array<string>
    mealType: string;
}
