import {Matrix} from "./matrix";
import {Hourglass} from "./hourglass";

export type TwoDimensionVector = Array<number[]>

export function findHighestHourglassSum(matrix: Matrix) {
    const hourglasses: Hourglass[] = Hourglass.extractFromMatrix(matrix);
    const sums: number[] = [];

    if(hourglasses.length === 0) {
        return 0;
    }
    for(let i = 0; i < hourglasses.length; i++) {
        sums.push(hourglasses[i].sum());
    }

    return Math.max(...sums);
}