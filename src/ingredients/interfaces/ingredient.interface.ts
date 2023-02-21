import { ObjectId } from "mongoose";

export interface Ingredient {
    _id: ObjectId;
    name: string;
    amount: number;
    measure_unit: string;
}
