import {TwoDimensionVector} from "./2d-array";
import {Matrix} from "./matrix";
/**
 * An hourglass is a matrix of numbers with this shape:
 * a b c   x x x
 * 0 d 0   0 x 0
 * e f g   x x x
 */

export class Hourglass {
    items: TwoDimensionVector = []

    constructor(items: TwoDimensionVector) {
        this.items = Hourglass.hourglassify(items);
    }

    static hourglassify(items: TwoDimensionVector): TwoDimensionVector {
        items[1][0] = 0;
        items[1][2] = 0;
        return items;
    }

    sum(): number {
        let sum = 0;
        this.items.forEach(item => {
            item.forEach(num => {
                sum += num;
            })
        })
        return sum;
    }

    static extractFromMatrix(matrix: Matrix): Hourglass[] {
        if (matrix.items.length >= 3) {
            const hourglasses: Hourglass[] = [];
            let hourglass: Hourglass;
            const width = matrix.items[0].length;
            const height = matrix.items.length;

            const maxRightShift = width - 3;
            const maxTopShift = height - 3;

            for(let tS = 0; tS <= maxTopShift; tS++) {
                for (let rS = 0; rS <= maxRightShift; rS++) {
                    hourglasses.push(new Hourglass([
                        [matrix.items[tS][rS], matrix.items[tS][rS + 1], matrix.items[tS][rS + 2]],
                        [matrix.items[tS + 1][rS], matrix.items[tS + 1][rS + 1], matrix.items[tS + 1][rS + 2]],
                        [matrix.items[tS + 2][rS], matrix.items[tS + 2][rS + 1], matrix.items[tS + 2][rS + 2]]]));
                }
            }
            return hourglasses;
        } else {
            return [];
        }
    }
}
