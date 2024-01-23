import {TwoDimensionVector} from "./2d-array";

export class Matrix {
    items: TwoDimensionVector = []

    constructor(items: TwoDimensionVector) {
        this.items = items;
    }
}